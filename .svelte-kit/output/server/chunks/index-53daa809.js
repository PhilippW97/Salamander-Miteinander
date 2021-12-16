import { c as create_ssr_component, g as getContext, s as subscribe, e as escape, b as setContext, n as noop, d as safe_not_equal, v as validate_component } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
const Hint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let touched;
  let errors;
  let hideWhenError;
  let requiredError;
  let value;
  let $form, $$unsubscribe_form;
  var _a, _b, _c, _d;
  let { on = "" } = $$props;
  let { hideWhen = "" } = $$props;
  let { hideWhenRequired = false } = $$props;
  let { showWhenUntouched = false } = $$props;
  let { for: name = "" } = $$props;
  let internalClass = $$props.class;
  if (!name)
    name = getContext("svelte-use-form_hint-group-name");
  const form = getContext("svelte-use-form_form");
  $$unsubscribe_form = subscribe(form, (value2) => $form = value2);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.hideWhen === void 0 && $$bindings.hideWhen && hideWhen !== void 0)
    $$bindings.hideWhen(hideWhen);
  if ($$props.hideWhenRequired === void 0 && $$bindings.hideWhenRequired && hideWhenRequired !== void 0)
    $$bindings.hideWhenRequired(hideWhenRequired);
  if ($$props.showWhenUntouched === void 0 && $$bindings.showWhenUntouched && showWhenUntouched !== void 0)
    $$bindings.showWhenUntouched(showWhenUntouched);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  touched = (_b = (_a = $form[name]) === null || _a === void 0 ? void 0 : _a.touched) !== null && _b !== void 0 ? _b : {};
  errors = (_d = (_c = $form[name]) === null || _c === void 0 ? void 0 : _c.errors) !== null && _d !== void 0 ? _d : {};
  hideWhenError = hideWhen ? errors[hideWhen] : "";
  requiredError = errors["required"];
  value = errors[on];
  $$unsubscribe_form();
  return `${!(hideWhenRequired && requiredError) && !hideWhenError ? `${(touched || showWhenUntouched) && value ? `<div class="${"svelte-use-form-hint " + escape(internalClass)}">${slots.default ? slots.default({ value }) : ``}</div>` : ``}` : ``}`;
});
const HintGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { for: name = "" } = $$props;
  setContext("svelte-use-form_hint-group-name", name);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  return `${slots.default ? slots.default({}) : ``}`;
});
const isChrome = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const animationName = "svelte-use-form-webkit-autofill";
const css$1 = `
@keyframes ${animationName} {
    from {}
}

input:-webkit-autofill {
    animation-name: svelte-use-form-webkit-autofill;
}
`;
function startAnimationWhenAutofilled() {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.appendChild(document.createTextNode(css$1));
  document.head.appendChild(style);
}
function handleChromeAutofill(textElement, control, callback) {
  if (!isChrome())
    return;
  function handleAnimationStart(event) {
    if (event.animationName.includes(animationName)) {
      const currentValue = textElement.value;
      if (!currentValue) {
        control.valid = true;
        callback();
      }
    }
  }
  textElement.addEventListener("animationstart", handleAnimationStart);
  startAnimationWhenAutofilled();
}
class FormControl {
  constructor(formControl) {
    this.errors = {};
    this.errorMap = {};
    this.elements = [];
    this.valid = true;
    this._touched = false;
    this.formRef = formControl.formRef;
    this.validators = formControl.validators;
    this.errorMap = formControl.errorMap;
    this.initial = formControl.value;
    this.elements = formControl.elements;
    this.value = formControl.value;
  }
  get value() {
    return this._value;
  }
  get touched() {
    return this._touched;
  }
  set value(value) {
    this._value = value;
    this.validate();
  }
  set touched(value) {
    this._touched = value;
    this.elements.forEach((element) => {
      if (value)
        element.classList.add("touched");
      else
        element.classList.remove("touched");
    });
  }
  error(errors) {
    this.errors = { ...errors, ...this.errors };
    this.valid = false;
    this.formRef()["_notifyListeners"]();
  }
  change(value) {
    this.value = value;
    this.elements.forEach((element) => element.value = value);
  }
  validate() {
    let valid = true;
    this.errors = {};
    for (const validator of this.validators) {
      const errors = validator(this._value, this.formRef());
      if (errors) {
        valid = false;
        for (const error of Object.entries(errors)) {
          let [key, value] = error;
          const errorMap = this.errorMap[key];
          if (errorMap) {
            value = typeof errorMap === "function" ? errorMap(value) : errorMap;
          }
          this.errors[key] = value;
        }
      }
    }
    this.valid = valid;
    this.elements.forEach((element) => element.setCustomValidity(valid ? "" : "Field is invalid"));
    return valid;
  }
  reset({ value = null } = {}) {
    const resetValue = value !== null ? value : this.initial;
    this.elements.forEach((element) => element.value = resetValue);
    this.value = resetValue;
    this.touched = false;
    this.formRef()["_notifyListeners"]();
  }
}
class Form {
  constructor(initialData, notifyListeners) {
    for (const [k, v] of Object.entries(initialData !== null && initialData !== void 0 ? initialData : {})) {
      this._addFormControl(k, v.initial, v.validators, [], v.errorMap);
    }
    this._notifyListeners = notifyListeners;
  }
  get valid() {
    let valid = true;
    this.forEachFormControl((formControl) => {
      if (!formControl.valid)
        valid = false;
    });
    return valid;
  }
  get touched() {
    let touched = true;
    this.forEachFormControl((formControl) => {
      if (!formControl.touched)
        touched = false;
    });
    return touched;
  }
  get values() {
    let values = {};
    this.forEachFormControl((formControl, key) => {
      values[key] = formControl.value;
    });
    return values;
  }
  set touched(value) {
    this.forEachFormControl((formControl) => {
      formControl.touched = value;
    });
    this._notifyListeners();
  }
  reset() {
    this.forEachFormControl((formControl) => formControl.reset());
  }
  _addFormControl(name, initial, validators, elements, errorMap) {
    this[name] = new FormControl({
      value: initial !== null && initial !== void 0 ? initial : "",
      validators: validators !== null && validators !== void 0 ? validators : [],
      errorMap: errorMap !== null && errorMap !== void 0 ? errorMap : {},
      elements: elements !== null && elements !== void 0 ? elements : [],
      formRef: () => this
    });
  }
  forEachFormControl(callback) {
    for (const [key, value] of Object.entries(this)) {
      if (value instanceof FormControl) {
        callback(value, key);
      }
    }
  }
}
function isTextElement(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement;
}
function isFormMember(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement;
}
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const formReferences = writable([]);
function useForm(properties) {
  properties = properties !== null && properties !== void 0 ? properties : {};
  const eventListeners = [];
  const subscribers = [];
  let state = new Form(properties, notifyListeners);
  let observer;
  action.subscribe = subscribe2;
  action.set = set;
  setContext("svelte-use-form_form", action);
  function action(node) {
    setupForm(node);
    formReferences.update((values) => [
      ...values,
      { node, form: state, notifyListeners }
    ]);
    return {
      update: () => {
      },
      destroy: () => {
        unmountEventListeners();
        observer.disconnect();
      }
    };
  }
  function setupForm(node) {
    const inputElements = [...node.getElementsByTagName("input")];
    const textareaElements = [...node.getElementsByTagName("textarea")];
    const textElements = [...inputElements, ...textareaElements];
    const selectElements = [...node.getElementsByTagName("select")];
    setupTextElements(textElements);
    setupSelectElements(selectElements);
    hideNotRepresentedFormControls([...textElements, ...selectElements]);
    setupFormObserver(node);
    notifyListeners();
  }
  function setupTextElements(textElements) {
    for (const textElement of textElements) {
      const name = textElement["name"];
      if (!state[name]) {
        let initial;
        if (textElement.type === "radio" && textElement instanceof HTMLInputElement) {
          initial = textElement.checked ? textElement.value : "";
        } else if (textElement.type === "checkbox" && textElement instanceof HTMLInputElement) {
          initial = textElement.checked ? "checked" : "";
        } else {
          initial = textElement.value;
        }
        state._addFormControl(name, initial, [], [textElement], {});
      } else {
        state[name].elements.push(textElement);
        if (textElement.type === "radio" && textElement instanceof HTMLInputElement && textElement.checked) {
          state[name].initial = textElement.value;
        }
      }
      switch (textElement.type) {
        case "checkbox":
        case "radio":
          mountEventListener(textElement, "click", handleBlurOrClick);
          break;
        default:
          setInitialValue(textElement, state[name]);
          handleAutofill(textElement, state[name]);
          mountEventListener(textElement, "blur", handleBlurOrClick);
      }
      mountEventListener(textElement, "input", handleInput);
    }
  }
  function setupSelectElements(selectElements) {
    for (const selectElement of selectElements) {
      const name = selectElement["name"];
      if (!state[name]) {
        const initial = selectElement.value;
        state._addFormControl(name, initial, [], [selectElement], {});
      } else {
        state[name].elements.push(selectElement);
        setInitialValue(selectElement, state[name]);
      }
      mountEventListener(selectElement, "input", handleInput);
      mountEventListener(selectElement, "input", handleBlurOrClick);
      mountEventListener(selectElement, "blur", handleBlurOrClick);
    }
  }
  function setupFormObserver(form) {
    observer = new MutationObserver(observeForm);
    observer.observe(form, { childList: true });
  }
  function observeForm(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        for (const node of mutation.removedNodes) {
          if (node instanceof HTMLElement) {
            const inputElements = [...node.getElementsByTagName("input")];
            const textareaElements = [...node.getElementsByTagName("textarea")];
            const selects = [...node.getElementsByTagName("select")];
            const elements = [
              ...inputElements,
              ...textareaElements,
              ...selects
            ];
            if (isFormMember(node))
              elements.push(node);
            for (const element of elements) {
              for (const eventListener of eventListeners) {
                if (element === eventListener.node) {
                  delete state[element["name"]];
                  element.removeEventListener(eventListener.event, eventListener.listener);
                }
              }
            }
          }
        }
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            const inputElements = [...node.getElementsByTagName("input")];
            const textareaElements = [...node.getElementsByTagName("textarea")];
            const textElements = [...inputElements, ...textareaElements];
            const selectElements = [...node.getElementsByTagName("select")];
            if (isTextElement(node))
              textElements.push(node);
            else if (node instanceof HTMLSelectElement)
              selectElements.push(node);
            for (const element of [...textElements, ...selectElements]) {
              const initialFormControlProperty = properties[element.name];
              if (!state[element.name] && initialFormControlProperty) {
                state._addFormControl(element.name, initialFormControlProperty.initial, initialFormControlProperty.validators, [element], initialFormControlProperty.errorMap);
              }
            }
            setupTextElements(textElements);
            setupSelectElements(selectElements);
          }
        }
      }
    }
    notifyListeners();
  }
  function mountEventListener(node, event, listener) {
    node.addEventListener(event, listener);
    eventListeners.push({ node, event, listener });
  }
  function handleAutofill(textElement, formControl) {
    handleChromeAutofill(textElement, formControl, notifyListeners);
    function handleNoEventAutofilling() {
      if (textElement.value !== formControl.initial) {
        handleBlurOrClick({ target: textElement });
        return true;
      }
      return false;
    }
    const autofillingWithoutEventInstantly = handleNoEventAutofilling();
    if (!autofillingWithoutEventInstantly)
      setTimeout(() => handleNoEventAutofilling(), 100);
  }
  function handleInput({ target: node }) {
    if (isFormMember(node)) {
      const name = node["name"];
      let value;
      if (node.type === "checkbox" && node instanceof HTMLInputElement) {
        value = node.checked ? "checked" : "";
      } else {
        value = node.value;
      }
      state[name].value = value;
      notifyListeners();
    }
  }
  function handleBlurOrClick({ target: node }) {
    if (isFormMember(node)) {
      const control = state[node.name];
      if (!control.touched)
        handleInput({ target: node });
      control.touched = true;
      node.classList.add("touched");
      notifyListeners();
    }
  }
  function hideNotRepresentedFormControls(nodes) {
    for (const key of Object.keys(properties)) {
      let isFormControlRepresentedInDom = false;
      for (const node of nodes) {
        if (key === node["name"])
          isFormControlRepresentedInDom = true;
      }
      if (!isFormControlRepresentedInDom)
        delete state[key];
    }
  }
  function setInitialValue(formMember, formControl) {
    if (formControl.initial)
      formMember.value = formControl.initial;
  }
  function unmountEventListeners() {
    for (const { node, event, listener } of eventListeners) {
      node.removeEventListener(event, listener);
    }
  }
  function notifyListeners() {
    for (const callback of subscribers)
      callback(state);
  }
  function subscribe2(callback) {
    subscribers.push(callback);
    callback(state);
    return { unsubscribe: () => unsubscribe(callback) };
  }
  function unsubscribe(subscriber) {
    const index = subscribers.indexOf(subscriber);
    subscribers.splice(index, 1);
  }
  function set(value) {
    state = value;
    notifyListeners();
  }
  return action;
}
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-o8gfqd{position:flex;padding:50px}form.svelte-o8gfqd{display:flex;flex-direction:column;width:300px;position:absolute;top:40%;left:50%;transform:translate(-50%, -50%);gap:20px}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { name } = $$props;
  const form = useForm();
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  $$unsubscribe_form();
  return `<main class="${"svelte-o8gfqd"}"><form class="${"svelte-o8gfqd"}"><h1>Login</h1>
		<input type="${"email"}" name="${"email"}">
		${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "email" }, {}, {
    default: () => `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
      default: () => `This is a mandatory field`
    })}
			${validate_component(Hint, "Hint").$$render($$result, { on: "email", hideWhenRequired: true }, {}, { default: () => `Email is not valid` })}`
  })}
		<input type="${"password"}" name="${"password"}">
		${validate_component(Hint, "Hint").$$render($$result, { for: "password", on: "required" }, {}, {
    default: () => `This is a mandatory field`
  })}
		<button ${!$form.valid ? "disabled" : ""}>Login</button></form>
	
</main>`;
});
export { Login as default };

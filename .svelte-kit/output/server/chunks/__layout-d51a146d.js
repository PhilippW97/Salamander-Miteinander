import { g as getContext, c as create_ssr_component, s as subscribe, a as add_attribute, v as validate_component } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var profpic = "/_app/assets/profpic-2c055d2e.jpg";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1717g60.svelte-1717g60{display:flex;justify-content:space-between}.corner.svelte-1717g60.svelte-1717g60{width:3em;height:3em}#profpic.svelte-1717g60.svelte-1717g60{width:5em;height:5em;position:absolute;top:50px;right:50px;border-radius:50%}#player.svelte-1717g60.svelte-1717g60{position:absolute;right:150px;top:60px;font-size:20px;padding-right:20px}nav.svelte-1717g60.svelte-1717g60{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-1717g60.svelte-1717g60{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1717g60.svelte-1717g60{position:relative;height:100%}li.active.svelte-1717g60.svelte-1717g60::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1717g60 a.svelte-1717g60{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1717g60.svelte-1717g60:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1717g60"}"><div class="${"corner svelte-1717g60"}"></div>

	<nav class="${"svelte-1717g60"}"><ul class="${"svelte-1717g60"}"><li class="${["svelte-1717g60", $page.path === "/game" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/game"}" class="${"svelte-1717g60"}">Game</a></li>
			<li class="${["svelte-1717g60", $page.path === "/scoreboard" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/scoreboard"}" class="${"svelte-1717g60"}">Scoreboard</a></li>
			<li class="${["svelte-1717g60", $page.path === "/login" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/login"}" class="${"svelte-1717g60"}">Login</a></li></ul></nav>

	<div class="${"corner svelte-1717g60"}"><h2 id="${"player"}" class="${"svelte-1717g60"}">Spieler123</h2>
		<img id="${"profpic"}"${add_attribute("src", profpic, 0)} alt="${"Profile"}" class="${"svelte-1717g60"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-7j2i6y.svelte-7j2i6y{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-7j2i6y.svelte-7j2i6y{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-7j2i6y a.svelte-7j2i6y{font-weight:bold}@media(min-width: 480px){footer.svelte-7j2i6y.svelte-7j2i6y{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-7j2i6y"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-7j2i6y"}"><p>visit <a href="${"https://git.it.hs-heilbronn.de/it/courses/seb/cc1/ws21/demoproject123"}" class="${"svelte-7j2i6y"}">git.it.hs-heilbronn.de</a> to learn more about Salamander Miteinander
	</p>
</footer>`;
});
export { _layout as default };

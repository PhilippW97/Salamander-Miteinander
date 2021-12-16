import { c as create_ssr_component } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#scores.svelte-8iui5f.svelte-8iui5f{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}#scores.svelte-8iui5f td.svelte-8iui5f,#scores.svelte-8iui5f th.svelte-8iui5f{border:1px solid #ddd;padding:8px}#scores.svelte-8iui5f tr.svelte-8iui5f:nth-child(even){background-color:#f2f2f2}#scores.svelte-8iui5f tr.svelte-8iui5f:hover{background-color:#ddd}#scores.svelte-8iui5f th.svelte-8iui5f{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#04aa6d;color:white}",
  map: null
};
const Scoreboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<main><h1>Bestenliste</h1>

	<table id="${"scores"}" class="${"svelte-8iui5f"}"><tr class="${"svelte-8iui5f"}"><th class="${"svelte-8iui5f"}">Nickname</th>
			<th class="${"svelte-8iui5f"}">Score</th>
			<th class="${"svelte-8iui5f"}">Date</th></tr>
		<tr class="${"svelte-8iui5f"}"><td class="${"svelte-8iui5f"}">Max Mustermann</td>
			<td class="${"svelte-8iui5f"}">100.000</td>
			<td class="${"svelte-8iui5f"}">09.12.2021</td></tr></table>
</main>`;
});
export { Scoreboard as default };

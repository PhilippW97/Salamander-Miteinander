import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"./favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<!-- <script>\n\t\t\tif (global === undefined) {\n\t\t\t\tvar global = window;\n\t\t\t}\n\t\t</script> -->\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-edf118e6.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-edf118e6.js",assets + "/_app/chunks/vendor-dbb812ab.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: null,
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/scoreboard\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/scoreboard/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Game2\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/Game2.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/login\.json$/,
						params: empty,
						load: () => import("../../src/routes/login/index.json.js")
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/login/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../src/routes/todos/index.json.js")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../src/routes/todos/[uid].json.js")
					},
		{
						type: 'page',
						pattern: /^\/game\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/game/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/scoreboard/index.svelte": () => import("../../src/routes/scoreboard/index.svelte"),"src/routes/Game2.svelte": () => import("../../src/routes/Game2.svelte"),"src/routes/login/index.svelte": () => import("../../src/routes/login/index.svelte"),"src/routes/todos/index.svelte": () => import("../../src/routes/todos/index.svelte"),"src/routes/game/index.svelte": () => import("../../src/routes/game/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-9d307313.js","css":["assets/pages/__layout.svelte-4fd51ecb.css"],"js":["pages/__layout.svelte-9d307313.js","chunks/vendor-dbb812ab.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-ccbf5573.js","css":[],"js":["error.svelte-ccbf5573.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-08573f32.js","css":[],"js":["pages/index.svelte-08573f32.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/scoreboard/index.svelte":{"entry":"pages/scoreboard/index.svelte-669ee55a.js","css":["assets/pages/scoreboard/index.svelte-a6cbc5e9.css"],"js":["pages/scoreboard/index.svelte-669ee55a.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/Game2.svelte":{"entry":"pages/Game2.svelte-13d0ff34.js","css":["assets/pages/Game2.svelte-9705ade4.css"],"js":["pages/Game2.svelte-13d0ff34.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/login/index.svelte":{"entry":"pages/login/index.svelte-6296f449.js","css":["assets/pages/login/index.svelte-33749e63.css"],"js":["pages/login/index.svelte-6296f449.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/todos/index.svelte":{"entry":"pages/todos/index.svelte-ade70b7a.js","css":["assets/pages/todos/index.svelte-784042c1.css"],"js":["pages/todos/index.svelte-ade70b7a.js","chunks/vendor-dbb812ab.js"],"styles":[]},"src/routes/game/index.svelte":{"entry":"pages/game/index.svelte-055e55b8.js","css":["assets/pages/game/index.svelte-33ab4645.css"],"js":["pages/game/index.svelte-055e55b8.js","chunks/vendor-dbb812ab.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}
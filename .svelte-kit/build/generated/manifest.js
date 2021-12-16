const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/scoreboard/index.svelte"),
	() => import("../../../src/routes/Game2.svelte"),
	() => import("../../../src/routes/login/index.svelte"),
	() => import("../../../src/routes/todos/index.svelte"),
	() => import("../../../src/routes/game/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/scoreboard/index.svelte
	[/^\/scoreboard\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Game2.svelte
	[/^\/Game2\/?$/, [c[0], c[4]], [c[1]]],

	,

	// src/routes/login/index.svelte
	[/^\/login\/?$/, [c[0], c[5]], [c[1]]],

	,

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[6]], [c[1]]],

	,

	// src/routes/game/index.svelte
	[/^\/game\/?$/, [c[0], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];
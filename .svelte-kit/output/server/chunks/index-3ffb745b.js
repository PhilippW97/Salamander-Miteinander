import { c as create_ssr_component, o as onMount, e as escape, f as each, h as null_to_empty } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".square.svelte-k3usej{width:20px;height:20px;border:solid 1px #fff}.empty.svelte-k3usej{background-color:black}.food.svelte-k3usej{background-color:pink}.snake.svelte-k3usej{background-color:green}.row.svelte-k3usej{display:flex}.center.svelte-k3usej{display:flex;justify-content:center;align-items:center}.tcenter.svelte-k3usej{text-align:center}.restart.svelte-k3usej{margin-top:10px}.enter.svelte-k3usej{border:#000 1px solid;background-color:#eee;border-radius:2px;padding:5px}",
  map: null
};
let TICK_DELAY = 200;
let GRID_SIZE = 20;
let SNAKE_HEAD = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lost = false;
  let grid = [...Array(GRID_SIZE)].map(() => [...Array(GRID_SIZE)].map(() => "empty"));
  let snakePosition = [[12, 13]];
  let direction = [0, 1];
  let gridWithSnake = grid;
  function randomFood() {
    grid[getRandomInt(GRID_SIZE)][getRandomInt(GRID_SIZE)] = "food";
    grid[getRandomInt(GRID_SIZE)][getRandomInt(GRID_SIZE)] = "food";
  }
  randomFood();
  const fn = (n) => {
    setTimeout(() => {
      const [x, y] = snakePosition[SNAKE_HEAD];
      const [dx, dy] = direction;
      const newHead = [dx + x, y + dy];
      function isOutOfBounds(n2) {
        return n2 < 0 || n2 > GRID_SIZE - 1;
      }
      if (isOutOfBounds(newHead[0]) || isOutOfBounds(newHead[1])) {
        lost = true;
        return;
      }
      let ateFood = false;
      if (gridWithSnake[newHead[0]][newHead[1]] === "food") {
        ateFood = true;
        randomFood();
      }
      const snakeBody = snakePosition.slice(0, snakePosition.length - (ateFood ? 0 : 1));
      if (snakeBody.some((x2) => x2[0] === newHead[0] && x2[1] === newHead[1])) {
        lost = true;
        return;
      }
      snakePosition = [newHead, ...snakeBody];
      fn(TICK_DELAY - Math.min(snakePosition.length, 15) * 10);
    }, n);
  };
  onMount(() => {
    fn(TICK_DELAY);
  });
  $$result.css.add(css);
  {
    {
      for (let i = 0; i < gridWithSnake.length; i++) {
        for (let k = 0; k < gridWithSnake.length; k++) {
          if (gridWithSnake[i][k] === "snake") {
            gridWithSnake[i][k] = "empty";
          }
        }
      }
      snakePosition.forEach(([x, y]) => {
        gridWithSnake[x][y] = "snake";
      });
    }
  }
  return `

<main>${lost ? `<h1 class="${"tcenter svelte-k3usej"}">you lost</h1>
		<h3 class="${"tcenter svelte-k3usej"}">Hit <code class="${"enter svelte-k3usej"}">ENTER</code> to restart</h3>` : ``}
	<h3 class="${"tcenter svelte-k3usej"}">snake length ${escape(snakePosition.length)}</h3>
	<div class="${"center svelte-k3usej"}"><div>${each(gridWithSnake, (row, i) => `<div class="${"row svelte-k3usej"}">${each(row, (cell, k) => `<div class="${escape(null_to_empty(`square ${cell}`)) + " svelte-k3usej"}"></div>`)}
				</div>`)}</div></div>

	${lost ? `<div class="${"center restart svelte-k3usej"}"><button>Start again </button></div>` : ``}
</main>`;
});
export { Game as default };

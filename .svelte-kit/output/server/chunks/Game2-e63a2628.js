import { c as create_ssr_component } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
var Game2_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-1ac9b3a{height:50vh;width:50vw;display:flex;justify-content:center;align-items:center;margin:0;background-color:black}#game-board.svelte-1ac9b3a{background-color:#ccc;width:50vmin;height:50vmin;display:grid;grid-template-rows:repeat(21, 1fr);grid-template-columns:repeat(21, 1fr)}",
  map: null
};
const SNAKE_SPEED = 5;
const EXPANSION_RATE = 5;
const GRID_SIZE = 21;
function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  };
}
function outsideGrid(position) {
  return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
const Game2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const snakeBody = [{ x: 11, y: 11 }];
  let food = getRandomFoodPosition();
  let lastRenderTime = 0;
  let gameOver = false;
  const gameBoard = document.getElementById("game-board");
  let inputDirection = { x: 0, y: 0 };
  let lastInputDirection = { x: 0, y: 0 };
  function updateFood() {
    if (onSnake(food)) {
      expandSnake(EXPANSION_RATE);
      food = getRandomFoodPosition();
    }
  }
  function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
  }
  let newSegments = 0;
  function updateSnake() {
    addSegments();
    const inputDirection2 = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection2.x;
    snakeBody[0].y += inputDirection2.y;
  }
  function expandSnake(amount) {
    newSegments += amount;
  }
  function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0)
        return false;
      return equalPositions(segment, position);
    });
  }
  function getSnakeHead() {
    return snakeBody[0];
  }
  function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
  }
  function addSegments() {
    for (let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
  }
  function main(currentTime) {
    if (gameOver) {
      if (confirm("You lost. Press ok to restart.")) {
        window.location = "/";
      }
      return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1e3;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
      return;
    lastRenderTime = currentTime;
    updateGame();
    drawGame();
  }
  window.requestAnimationFrame(main);
  function updateGame() {
    updateSnake();
    updateFood();
    checkDeath();
  }
  function drawGame() {
    gameBoard.innerHTML = "";
  }
  function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (lastInputDirection.y !== 0)
          break;
        inputDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (lastInputDirection.y !== 0)
          break;
        inputDirection = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (lastInputDirection.x !== 0)
          break;
        inputDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (lastInputDirection.x !== 0)
          break;
        inputDirection = { x: 1, y: 0 };
        break;
    }
  });
  function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
  }
  $$result.css.add(css);
  return `


<body class="${"svelte-1ac9b3a"}"><div id="${"game-board"}" class="${"svelte-1ac9b3a"}"></div>
</body>`;
});
export { Game2 as default };

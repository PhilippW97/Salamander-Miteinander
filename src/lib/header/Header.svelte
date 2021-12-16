<script>
	import { page } from '$app/stores';
	import logo from './salamander-logo.png';
	import profpic from './profpic.jpg';
</script>

<header>
	<div class="corner">
		<!-- <a href="/">
			<img id="salamander" src={logo} alt="Salamander" />
			<h1 id="title">Salamander Miteinander</h1>
		</a> -->
	</div>

	<nav>
		<ul>
			<li class:active={$page.path === '/game'}><a sveltekit:prefetch href="/game">Game</a></li>
			<li class:active={$page.path === '/scoreboard'}>
				<a sveltekit:prefetch href="/scoreboard">Scoreboard</a>
			</li>
			<li class:active={$page.path === '/login'}><a sveltekit:prefetch href="/login">Login</a></li>
		</ul>
	</nav>

	<div class="corner">
		<h2 id="player">Spieler123</h2>
		<img id="profpic" src={profpic} alt="Profile" />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	#profpic {
		width: 5em;
		height: 5em;
		position: absolute;
		top: 50px;
		right: 50px;
		border-radius: 50%;
	}

	#player {
		position: absolute;
		right: 150px;
		top: 60px;
		font-size: 20px;
		padding-right: 20px;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	#title {
		position: absolute;
		left: 150px;
		top: 100px;
		padding-left: 50px;
	}

	#salamander {
		position: absolute;
		top: 200px;
		left: 150px;
		flex-basis: 40%;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>

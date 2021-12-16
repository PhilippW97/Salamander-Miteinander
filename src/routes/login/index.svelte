<script>
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';
	export let name;
	// import Login from './Login.svelte';
	// import Main from './Main.svelte';
	// import { store } from './stores/auth.js';
	const form = useForm();
</script>

<main>
	<form use:form>
		<h1>Login</h1>
		<input type="email" name="email" use:validators={[required, email]} />
		<HintGroup for="email">
			<Hint on="required">This is a mandatory field</Hint>
			<Hint on="email" hideWhenRequired>Email is not valid</Hint>
		</HintGroup>
		<input type="password" name="password" use:validators={[required]} />
		<Hint for="password" on="required">This is a mandatory field</Hint>
		<button disabled={!$form.valid}>Login</button>
	</form>
	<!-- {#if $store != null}
		<Main />
	{:else}
		<Login />
	{/if} -->
</main>

<style>
	main {
		position: flex;
		padding: 50px;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 300px;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		gap: 20px;
	}
</style>

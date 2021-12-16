<script context="module">
	export async function load({ session }) {
		const { user } = session;

		if (!user) {
			return {
				status: 302,
				redirect:
					'https://salamander-miteinander.auth.eu-central-1.amazoncognito.com/login?response_type=code&client_id=2pn4c90l0pk89n1k2t67f7oqpf&redirect_uri=https://walter-philipp.de'
				//'https://salamander-miteinander.auth.eu-central-1.amazoncognito.com/login?response_type=token&client_id=2pn4c90l0pk89n1k2t67f7oqpf&redirect_uri=https://walter-philipp.de'
			};
		}
		return {};
	}
</script>

<main>
	<!-- <div class="game" /> -->
</main>

<style>
	/* main {
		position: flex;
		padding: 50px;
	}
	.game {
		width: 100%;
		height: 150vh;
		background-color: grey;
	} */

	/* TODO:
	Joystick for media tag- under certain resolution for mobile devices */
</style>

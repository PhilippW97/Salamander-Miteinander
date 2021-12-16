import { c as create_ssr_component } from "./app-0542dce1.js";
import "cookie";
import "@lukeed/uuid";
async function load({ session }) {
  const { user } = session;
  if (!user) {
    return {
      status: 302,
      redirect: "https://salamander-miteinander.auth.eu-central-1.amazoncognito.com/login?response_type=code&client_id=2pn4c90l0pk89n1k2t67f7oqpf&redirect_uri=https://walter-philipp.de"
    };
  }
  return {};
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>
</main>`;
});
export { Routes as default, load };

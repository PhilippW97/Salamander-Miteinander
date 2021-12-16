const base = "https://api.svelte.dev";
async function api(request, resource, data) {
  if (!request.locals.userid) {
    return { status: 401 };
  }
  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request.method !== "GET" && request.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/login"
      }
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
const get = async (request) => {
  const response = await api(request, `login/${request.locals.userid}`);
  if (response.status === 404) {
    return { body: [] };
  }
  return response;
};
const post = async (request) => {
  const response = await api(request, `login/${request.locals.userid}`, {
    text: request.body.get("text")
  });
  return response;
};
export { get, post };

export async function get(req) {
  const url = decodeURIComponent(req.params.rest);
  const api = `http://localhost:62224/api/content/?route=/${url}/`;
  const res = await fetch(api);
  const data = await res.json();

  return {
    body: {
      ...data,
      url,
    },
  }
}

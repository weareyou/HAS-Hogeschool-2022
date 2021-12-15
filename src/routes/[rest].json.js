export async function get(req) {
  const url = decodeURIComponent(req.params.rest);
  const api = `${import.meta.env.VITE_UMBRACO_API_URL}content/?route=/${url}/`;
  let data;
  try {
    const res = await fetch(api);
    data = await res.json();
  } catch (e) {
    data = {
      error: 'Content api not available',
      errorCode: '502',
      call: api,
    };
  }

  return {
    body: {
      ...data,
      url,
    },
  };
}

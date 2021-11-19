import '../utilities/dotenv.js';

export async function get(req) {
  const url = decodeURIComponent(req.params.rest);
  const api = `${import.meta.env.VITE_UMBRACO_API_URL}content/?route=/${url}/`;
  let data = {
    error: 'Content api not available',
    errorCode: '502',
    call: api,
  };
  try {
    const res = await fetch(api);
    data = await res.json();
  } catch (e) {
  }

  return {
    body: {
      ...data,
      url,
    },
  }
}

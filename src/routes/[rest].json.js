import '../utilities/dotenv.js';

export async function get(req) {
  const url = decodeURIComponent(req.params.rest);
  const api = `${process.env['UMBRACO_API_URL']}content/?route=/${url}/`;
  const res = await fetch(api);
  const data = await res.json();

  return {
    body: {
      ...data,
      url,
    },
  }
}

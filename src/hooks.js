/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const [, lang] = event.url.pathname.split('/');

  if (!lang) {
    return resolve(event);
  }

  return resolve(event, {
    transformPage: ({ html }) => html.replace('<html lang="nl"', `<html lang="${lang}"`),
  });
}

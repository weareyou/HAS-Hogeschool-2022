/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const [, lang] = decodeURIComponent(event.url.pathname).split('/');

  if (!lang) {
    return resolve(event);
  }

  return resolve(event, {
    // todo: works for SSR, not for SPA page switch :(
    // transformPage: ({ html }) => html.replace('<html lang="nl"', `<html lang="${lang}"`),
    transformPage: ({ html }) => html.replace('<html', `<html lang="${lang}"`),
  });
}

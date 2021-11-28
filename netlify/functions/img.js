const { builder } = require('@netlify/functions');
const fetch = require('node-fetch').default;

const API_ROOT = process.env.VITE_MEDIA_URL;

/**
 request (query params don't work)
 http://localhost:8888/img/width:650::media/nc5dhsxb/eiffel_tower_vertical.jpg
 */

async function handler(event) {
  const prefix = '/img/'; // need to be stripped of the path
  const pieces = event.path.split('::');
  let qs = '?quality=30&mode=crop';
  // turn `width:300/height:300` into `?width=300&height=300
  pieces[0].substring(prefix.length).split('/').forEach((param) => {
    // param = width:300
    const [prop, value] = param.split(':');
    qs += `&${prop}=${value}`;
  });
  const url = `${API_ROOT}${pieces[1]}${qs}`;

  try {
    const req = await fetch(url);
    const res = await req.arrayBuffer();
    return {
      statusCode: 200,
      body: new Buffer(res).toString('base64'),
      isBase64Encoded: true,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: `error: ${e}`,
    };
  }
}

exports.handler = builder(handler);

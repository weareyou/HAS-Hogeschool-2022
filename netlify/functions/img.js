const { builder } = require('@netlify/functions');
const fetch = require('node-fetch').default;
const API_ROOT = process.env.VITE_MEDIA_URL;

/**
 request (query params don't work)
 http://localhost:8888/img/media/nc5dhsxb/eiffel_tower_vertical.jpg===width/300
 **/

async function handler(event, context) {
  const prefix = '/img'; //need to be stripped of the path
  const pieces = event.path.split('===');
  // turn `width/300/height/300` into `?width=300&height=300
  let isValue = false; // it's the property (width)
  let qs = '?quality=30&mode=crop';
  pieces[1].split('/').forEach((param) => {
    if (!isValue) { // i.e. 'width'
      qs += `&${param}=`;
      isValue = true;
    } else {
      qs += `${param}`;
      isValue = false;
    }
  });
  const url = `${API_ROOT}${pieces[0].substring(prefix.length)}${qs}`;

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

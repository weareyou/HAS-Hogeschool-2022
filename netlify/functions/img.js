// const { builder } = require("@netlify/functions");
const fetch = require('node-fetch');
const API_ROOT = process.env.VITE_MEDIA_URL;


exports.handler = async function (event, context) {
  const pieces = event.path.split('===');

  try {
    const res = await fetch(`${API_ROOT}${pieces[0]}`)
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
}

/**
 request (query params don't work)
 http://localhost:8888/images/media/nc5dhsxb/eiffel_tower_vertical.jpg===width/300
 event: {
  path: "/images/media/nc5dhsxb/eiffel_tower_vertical.jpg===width/300"
}

 can use: process.env.VITE_MEDIA_URL
 **/

/*
async function handler(event, context) {
  const pieces = event.path.split('===');
  // const {
  //   img,
  //   params,
  // } = event.path;

  try {
    const res = await fetch(`${API_ROOT}${pieces[0]}`)
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pieces)
    // body: `
    // <!DOCTYPE html>
	  //   <html>
		//     <body>
		//       Hello World
		//     </body>
    // </html>
    // `,
  };
}

exports.handler = builder(handler);
*/

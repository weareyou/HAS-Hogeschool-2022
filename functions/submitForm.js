const fetch = require('node-fetch').default;
// const https = require('https');

exports.handler = async (event, context) => {
  // 1. Parse the form
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: '[ERROR] Bad Request',
    };
  }

  try {
    const url = process.env.VITE_UMBRACO_API_URL;
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // auth headers?
      },
      body,
    });
    return await req.json();
  } catch (e) {
    return {
      statusCode: 503,
      body: '[ERROR] Service Unavaliable',
    };
  }
};

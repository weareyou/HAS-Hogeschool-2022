const fetch = require('node-fetch').default;

exports.handler = async (event, context) => {
  console.log(atob(event.body));
  // 1. Parse the form
  // console.log(event);
  // let body;
  // try {
  //   body = JSON.parse(event.body);
  // } catch (e) {
  //   return {
  //     statusCode: 400,
  //     body: '[ERROR] Bad Request',
  //   };
  // }

  // 2. submit the form
  const formId = 'f5d42b76-cde6-4f4b-8b4d-3cb86da44552';
  const url = `${process.env.VITE_UMBRACO_API_URL}form/Submit?guid=${formId}`;
  const headers = {
    // 'Content-Type': 'multipart/form-data; boundary=-----------------------------58722240314917694791091360880',
    'Content-Type': 'multipart/form-data; charset="utf-8"',
    // 'Content-Length': atob(event.body).length.toString(),
    // Accept: '*/*',
  };
  console.log(headers);
  // try {
  const req = await fetch(url, {
    method: 'post',
    headers,
    // body: atob(event.body),
    body: event.body,
  });

  // const res = await req.json();
  console.log(req);
  return {
    statusCode: 200,
    body: `${JSON.stringify(req)}`,
  };
};

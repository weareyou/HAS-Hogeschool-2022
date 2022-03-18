const axios = require('axios');
const FormData = require('form-data');

exports.handler = async (event) => {
  // 1. parse the data
  let data;
  let formGuid;
  try {
    data = JSON.parse(event.body);
    // form id is sent via a custom header, add it to the url
    formGuid = event.headers.formid;
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
  const url = `${process.env.VITE_UMBRACO_API_URL}form/Submit?guid=${formGuid}`;
  // setup formdata object
  const formData = new FormData();
  data.forEach((obj) => {
    formData.append(obj.name, obj.value);
  });

  // set auth headers
  const username = process.env.VITE_UMBRACO_USERNAME;
  const password = process.env.VITE_UMBRACO_PASSWORD;

  // get headers object, append auth header
  const headers = formData.getHeaders();
  headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;

  try {
    // axios' way of submitting FormData()
    const req = await axios.post(url, formData, {
      headers,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(req.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};

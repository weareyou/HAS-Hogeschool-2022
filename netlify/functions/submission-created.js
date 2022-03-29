/**
 * What's this?
 * A Netlify specific trigger that handles form submissions:
 * https://docs.netlify.com/functions/trigger-on-events/#available-triggers
 */

const axios = require('axios');
const FormData = require('form-data');

exports.handler = async (event) => {
  const body = JSON.parse(event.body).payload;
  const formGuid = event.headers.formid;

  const url = `${process.env.VITE_UMBRACO_API_URL}form/Submit?guid=${formGuid}`;
  const formData = new FormData();
  body.ordered_human_fields.forEach((obj) => {
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

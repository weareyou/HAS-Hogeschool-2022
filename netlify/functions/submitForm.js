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
  try {
    // axios' way of submitting FormData()
    const req = await axios.post(url, formData, { headers: formData.getHeaders() });
    return {
      statusCode: 200,
      body: JSON.stringify(req.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};

import $ from 'jquery';

function complete(data) {
  try {
    if (window.location.hostname) {
      console.log(
        '\tCOMPLETE: \n\t\t',
        JSON.parse(data.responseText), '\n\t\t',
        data
      );
    }
    return data;
  } catch (e) {
    console.error('ricro-app-template/utils/apiCall:\n\t' + e);
    return false;
  }
}

export default function apiCall(params) {
  let {
    url = 'https://services.ricro.colostate.edu/api', uri = '', settings = {}
  } = params;
  if (!uri.match(/^(?:\w(?:-\w)*\/*)+\w$/g)) {
    console.error('Invalid API URI syntax: ' + uri);
    return false;
  }
  console.log('API Request: ', url + '/' + uri + '/', settings);
  return $.ajax({
    dataType: 'json',
    url: url + '/' + uri + '/',
    complete: complete.bind(this),
    ...settings,
  });
}
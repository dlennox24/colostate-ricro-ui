import $ from 'jquery';


function complete(data) {
  try {
    console.log(
      'COMPLETE:',
      JSON.parse(data.responseText), '|',
      data
    );
  } catch (e) {
    console.error("ricro-app-template/utils/linkTo:\n" + e);
  }
  return data;
}

export default function apiCall(uri = '/', settings = {}) {
  if (!uri.match(/^([/].+[/])$/g)) {
    console.error('Invalid API URI syntax: ' + uri);
    return false;
  }
  console.log('API Request: ', 'http://192.168.1.24:8080/api' + uri, settings);
  return $.ajax({
    dataType: 'json',
    url: 'http://192.168.1.24:8080/api' + uri,
    complete: complete.bind(this),
    ...settings,
  });
}

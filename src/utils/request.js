import 'whatwg-fetch';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  //can deal some error or other status codes here
};

export default function request(url) {
  const real_url = `http://5ca334a8190b430014edbc1f.mockapi.io${url}`;

  return fetch(real_url)
    .then(checkStatus)
    .then(response => {
      return response.json();
    })
    .catch(function(ex) {
      console.log('parsing failed', ex);
    });
}

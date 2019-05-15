/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let fetchrequest = {  
    method: options.method,
    mode: "cors",
    headers: {'Content-Type': 'application/json'},
  }
  if (options.method === "POST"){
    fetchrequest.body = JSON.stringify(options.data)
  }
  
fetch(options.url, fetchrequest)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log("Something went wrong!", err);
    });
}

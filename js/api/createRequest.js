/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = async function(options = {} , callback) {
fetchrequest = options;
options.mode = "cors";

fetch(options.url, fetchrequest)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      callback(data)
    })
    .catch(function(err) {
      console.log("Something went wrong!", err);
    });
}

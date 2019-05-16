/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = async function(options = {} , callback) {
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

/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'http://bhj-diploma.u-w.me'.
 * */
class Entity {
  constructor() {
    this.host = 'http://bhj-diploma.u-w.me',
    this.url = ''
  }

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    let options = {
      data: data,
      method: 'GET',
      url: this.host + this.url,
    }  
    createRequest(options);

  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    let options = {
      data: data,
      method: 'POST',
      url: this.host + this.url,
    }
    createRequest(options);
    

  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    let options = {
      data: data,
      method: 'GET',
      url: this.host + this.url + '/' + id
    }
    createRequest(options);

  }

  /**
   * Обновляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static update( id = '', data, callback = f => f ) {
    let options = {
      data: data,
      method: 'POST',
      url: this.host + this.url + '/' + id
    }
    createRequest(options);
    

  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    let modifiedData = Object.assign({ _method: 'DELETE' }, data );
    const options = {
      data: modifiedData,
      method: 'POST',
      url: this.host + this.url + '/' + id
    }
    createRequest(options)
  }
}


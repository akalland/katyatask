/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    constructor() {
        super(host);
         this.url = '/account';
    }
    
   }
Entity.URL = '/account';

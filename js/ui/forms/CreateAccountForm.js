/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm
 * */
class CreateAccountForm extends AsyncForm {
 
 
	/**
	 * Создаёт счёт с помощью Account.create и закрывает
	 * окно в случае успеха, а также вызывает App.update()
	 * и сбрасывает форму
	 * */
	onSubmit( options ) {
	 const result = Account.create(options, (err, res) => {
	  if(result) {
	 modal.close();
		  App.update();
	 
	  }
	 }); 
	}
  }
let login = prompt("Who is coming?", "");
if (login == "Admin") {
  let password = prompt("Password?", "");
  if (password == "Black Overlord") {
    alert("Welcome!");
  } else if (password == null) {
    alert("Enter canceled");
  } else {
    alert("Wrong password");
  }
} else if (login !== "Admin") {
  alert("I don't know you!");
} else {
  alert("Enter canceled");
}

/*Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль,
если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
иначе – «Пароль неверен», при отмене – «Вход отменён».*/

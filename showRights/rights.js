/**
 * Created by Julia on 11.01.2016.
 */
var CHANGE_RIGHTS = 1;//константы для хранения прав
var WRITE_ART = 2;
var READ_ART = 4;
var key = 1220461917; //произвольный ключ для шифрования

window.onload = function () {
    if (localStorage) {
        var savedUser = JSON.parse(localStorage.getItem('user'));//т.к. объект хранился в localstorage в виде строки, возвращаем вид объекта
        if(savedUser){
            checkPassword(savedUser);//проверяем, есть ли уже сохраненныю юзер
        }
        else {
            document.getElementById('form').addEventListener('submit', function () {
                var login = document.getElementById('login').value;//сохр в значения переменных данные, введенные в форму
                var password = document.getElementById('password').value;
                var role = this.elements.role.value;
                if(login == ''||password == ''||role ==''){//проверяем все ли строки заполнены
                    alert('вы не все ввели');
                    return false;//для того чтобы функция дальше не выполнялась
                }

                var criptedPassword = cript(password, key);//вызываем ф. шифрования пароля
                var user = {//создаем юзера
                    login: login,
                    password: criptedPassword,
                    role: role
                };
                // записываем его в localstorage
                localStorage.setItem('user', JSON.stringify(user));
            });
        }
    }
};

function cript(password, key) {
    return password ^ key
}


function checkPassword(savedUser) {//проверка пароля
    var checkPass = prompt('введите свой пароль еще раз', '');
var uncriptedPass = ((savedUser.password)^key);
    if (checkPass != 0) {//если пользователь ввел пароль
        if (checkPass == uncriptedPass) {
            alert('вы верно ввели пароль');
            showRights(savedUser);//если пароли совпадают - показываем права
        }
        else {
            alert('вы неверно ввели пароль')
        }
    }
}
function showRights(savedUser){//показываем права юзеру
    var list = document.getElementById('list');
    var li = document.createElement('LI');
    if(savedUser.role == CHANGE_RIGHTS){
        li.innerHTML = 'Вы можете читать и изменять записи, менять пользователей';
        list.appendChild(li);//добавляем элемент в список
    }
    else if(savedUser.role == WRITE_ART){
        li.innerHTML = 'Вы можете читать и изменять записи';
        list.appendChild(li);
    }
    else if(savedUser.role == READ_ART){
        li.innerHTML = 'Вы можете читать записи';
        list.appendChild(li);
    }
}




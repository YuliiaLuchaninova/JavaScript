/**
 * Created by Julia on 11.01.2016.
 */
var DELETE = 1;// 001константы для хранения прав
var WRITE = 2;//010
var READ = 4;//100
var guest = READ;
var moderator = guest | WRITE;
var admin = moderator | DELETE;
var accessRights = {
    guest: guest,
    moderator: moderator,
    admin: admin
};
var key = 1220461917; //произвольный ключ для шифрования

window.onload = function () {
    if (localStorage) {
        var savedUser = JSON.parse(localStorage.getItem('user'));//т.к. объект хранился в localstorage в виде строки, возвращаем вид объекта
        if (savedUser) {
            checkPassword(savedUser);//проверяем, есть ли уже сохраненныю юзер
        }
        else {
            document.getElementById('form').addEventListener('submit', function () {
                var login = document.getElementById('login').value;//сохр в значения переменных данные, введенные в форму
                var password = document.getElementById('password').value;
                //var role = this.elements.role.value;
                var roles = document.getElementsByName('role');
                for (var i = 0; i < roles.length; i++) {
                    if (roles[i].checked) {
                        var role = (roles[i].value);
                    }
                }
                if (login == '' || password == '' || role == '') {//проверяем все ли строки заполнены
                    alert('вы не все ввели');
                    return;//для того чтобы функция дальше не выполнялась
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
    if (typeof (password) == "string") {
        return (password.charCodeAt(password.length - 1)) ^ key;

    }
    else {
        return password ^ key
    }
}

function checkPassword(savedUser) {//проверка пароля
    var checkPass = cript(prompt('введите свой пароль еще раз', ''), key);
    var uncriptedPass = (cript(savedUser.password, key) ^ key);
    if (checkPass == key) {//если пользователь не ввел пароль
        alert('вы не ввели пароль');
    }
    else {
        if (checkPass == uncriptedPass) {
            alert('вы верно ввели пароль');
            showRights(savedUser);//если пароли совпадают - показываем права
        }
        else {
            alert('вы неверно ввели пароль')
        }
    }
}


function showRights(savedUser) {//показываем права юзеру
    var list = document.getElementById('list');

    if ((accessRights[savedUser.role] & READ)) {
        appendEl('read');
    }
    if ((accessRights[savedUser.role] & WRITE)) {
        appendEl('write');
    }
    if ((accessRights[savedUser.role] & DELETE)) {
        appendEl('delete');
    }
}
function appendEl(word) {
    var can = 'You can ';
    var li = document.createElement('LI');
    li.innerHTML = can + word;
    list.appendChild(li);
}









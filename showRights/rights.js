/**
 * Created by Julia on 11.01.2016.
 */
var DELETE = 1;// 001  константы для хранения прав
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
        var savedUser = JSON.parse(localStorage.getItem('user'));//т.к. объект хранился в localStorage в виде строки, возвращаем вид объекта
        if (savedUser) {
            checkPassword(savedUser);//проверяем, есть ли уже сохраненныю юзер
        }
        else {
            document.getElementById('form').addEventListener('submit', function () {
                var login = document.getElementById('login').value;//сохр в значения переменных данные, введенные в форму
                var password = document.getElementById('password').value;
                var secondPassword = document.getElementById('secondPassword').value;
                var roles = document.getElementsByName('role');
                var role = getCheckedBtn(roles);
                if(login == ''){
                    alert("вы не ввели логин");
                    return;
                }
                if(password == ''){
                    alert('вы не ввели пароль');
                    return;
                }
                if(secondPassword ==''){
                    alert('вы не ввели пароль еще раз');
                    return;

                }
                if(!role){
                    alert('вы не указали роль');
                    return;
                }

                var criptedPassword = cript(password, key);//вызываем ф. шифрования пароля
                var user = {//создаем юзера
                    login: login,
                    password: criptedPassword,
                    secondPassword: secondPassword,
                    role: role
                };
                // записываем его в localStorage
                localStorage.setItem('user', JSON.stringify(user));
            });
        }
    }
};

function getCheckedBtn(roles) {
    for (var i = 0; i < roles.length; i++) {
        if (roles[i].checked) {
            return roles[i].value;
        }
    }
}

function cript(password, key) {
    if (typeof (password) == "string") {
        password = (password.charCodeAt(password.length - 1));

    }
        return password ^ key
}

function checkPassword(savedUser) {//проверка пароля
    var checkPass = cript(savedUser.secondPassword, key);

    if (savedUser.secondPassword == 0) {//если пользователь не ввел пароль
        alert('вы не ввели пароль');
        return false;
    }
    if (checkPass !== savedUser.password) {
        alert('вы неверно ввели пароль');
        return false;
    }

    alert('вы верно ввели пароль');
    showRights(savedUser);//если пароли совпадают - показываем права
}



//function showRights(savedUser) {//показываем права юзеру
//    if ((accessRights[savedUser.role] & READ)) {
//        appendEl('read');
//    }
//    if ((accessRights[savedUser.role] & WRITE)) {
//        appendEl('write');
//    }
//    if ((accessRights[savedUser.role] & DELETE)) {
//        appendEl('delete');
//    }
//}
function showRights(savedUser) {//показываем права юзеру
    switch (savedUser.role) {
        case 'guest':
            appendEl('read');
            break;

        case 'moderator':
            appendEl('read, write');
            break;

        case 'admin':
            appendEl('read, write, delete');
            break;

        default:
            appendEl('nothing');
            break;
    }
}

function appendEl(word) {//чтобы не повторять в каждом if showRights создание эл-та списка , если создать в showRights 1 раз то будет перезаписываться а не дописываться
    var list = document.getElementById('list');
    var can = 'You can ';
    var li = document.createElement('LI');
    li.innerHTML = can + word;
    list.appendChild(li);
}
console.log(accessRights.admin & READ);








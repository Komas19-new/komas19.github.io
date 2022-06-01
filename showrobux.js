let xhr = new XMLHttpRequest();
xhr.open('get', 'https://economy.roblox.com/v1/user/currency');
xhr.send();

xhr.onload = function() {
    print(xhr.response);
};
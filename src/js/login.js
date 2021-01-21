//获取页面元素对象
//获取用户名
const o_us = document.getElementById("uname"),
    //获取密码
    o_pwd = document.getElementById("upwd"),
    //获取登录按钮
    o_sub = document.getElementById("sub");
//给登录按钮添加事件
o_sub.onclick = function() {
    //获取用户名
    let uname = o_us.value;
    //获取密码
    let upwd = o_pwd.value;
    //判断用户名是否为空
    if (!uname) {
        alert('用户名不能为空！');
        return;
    }
    //获取cookie
    let cookieStr = getCookie('registors') ? getCookie('registors') : '';
    //转为对象
    let cookieObj = convertCookieStrToCookieObj(cookieStr);
    //判断对象中是否有用户名
    if (uname in cookieObj) {
        if (cookieObj[uname] === upwd) {
            alert('登录成功');
            location.href = './index.html';
            o_us.value = '';
            o_pwd.value = '';
        } else {
            alert('请确认您的密码是否正确！');
        }
    } else {
        alert('该用户不存在！');
    }
}

//cookie字符串转为cookie对象
function convertCookieStrToCookieObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}
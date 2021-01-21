// 验证码
// var countdown = 60;

// function settime(obj) {
//     if (countdown == 0) {
//         obj.removeAttribute("disabled");
//         obj.value = "免费获取验证码";
//         countdown = 60;
//         return;
//     } else {
//         obj.setAttribute("disabled", true);
//         obj.value = "重新发送(" + countdown + ")";
//         countdown--;
//     }
//     setTimeout(function() {
//         settime(obj)
//     }, 1000)
// }

class Form {
    constructor() {
        this.con = document.querySelectorAll('.con');
        this.sub = document.querySelector('#sub');
        this.o_i = document.querySelectorAll('i');
        this.arr = [false, false, false];
        //添加事件
        this.addEvent();
    }
    addEvent() {
        let that = this;
        this.con[0].onblur = function() {
            let re = /^\d{11}$/;
            let str = this.value;
            if (re.test(str)) {
                that.o_i[0].innerHTML = '正确';
                that.o_i[0].style.color = '#2f983f';
                that.arr[0] = true;
            } else {
                that.o_i[0].innerHTML = '请输入11位手机号';
                that.o_i[0].style.color = 'red';
                this.arr[0] = false;
            }
        }
        this.con[1].onblur = function() {
            let re = /^\w{6,18}$/;
            let str = this.value;
            if (re.test(str)) {
                that.o_i[1].innerHTML = '正确';
                that.o_i[1].style.color = '#2f983f';
                that.arr[1] = true;
            } else {
                that.o_i[1].innerHTML = '6-16个数字、字母或符号，字母区分大小写';
                that.o_i[1].style.color = 'red';
                this.arr[1] = false;
            }
        }
        this.con[2].onblur = function() {
            let old = that.con[1].value
            let str = this.value;
            if (old === str) {
                that.o_i[2].innerHTML = '正确';
                that.o_i[2].style.color = '#2f983f';
                that.arr[2] = true;
            } else {
                that.o_i[2].innerHTML = '密码输入不一致';
                that.o_i[2].style.color = 'red';
                this.arr[2] = false;
            }
        }
        this.sub.onclick = function() {
            if (this.arr.indexOf(false) !== -1) {
                alert('请完善信息！')
                return;
            } else {
                alert('注册成功');
                location.href = '../pages/login.html';
            }
        }.bind(this);
    }
}
new Form();
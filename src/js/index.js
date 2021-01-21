// 轮播图
window.onload = function() {
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic').getElementsByTagName("li"),
        list = document.getElementById('list').getElementsByTagName('li'),
        index = 0,
        timer = null;

    // 定义并调用自动播放函数
    timer = setInterval(autoPlay, 2000);

    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function() {
        clearInterval(timer);
    }

    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function() {
            timer = setInterval(autoPlay, 3000);
        }
        // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function() {
            clearInterval(timer);
            index = this.innerText - 1;
            changePic(index);
        };
    };

    function autoPlay() {
        if (++index >= pic.length) index = 0;
        changePic(index);
    }

    // 定义图片切换函数
    function changePic(curIndex) {
        for (var i = 0; i < pic.length; ++i) {
            pic[i].style.display = "none";
            list[i].className = "";
        }
        pic[curIndex].style.display = "block";
        list[curIndex].className = "on";
    }

};


// 倒计时
var countDownTime = {
    init: function(a, b, c, d, e) {
        this.t = a, this.d = b, this.h = c, this.m = d, this.s = e
    },
    start: function() {
        var a = this;
        setInterval(a.timer, 1e3)
    },
    timer: function(a) {
        var b, c, d, e, f, g, h;
        a = this.countDownTime, b = new Date, c = new Date(a.t), d = c.getTime() - b.getTime(), e = Math.floor(a.formatTime(d, "day")), f = Math.floor(a.formatTime(d, "hours")), g = Math.floor(a.formatTime(d, "minutes")), h = Math.floor(a.formatTime(d, "seconds")), a.d && (a.d.innerText = a.formatNumber(e)), a.h && (a.h.innerText = a.formatNumber(f)), a.m && (a.m.innerText = a.formatNumber(g)), a.s && (a.s.innerText = a.formatNumber(h))
    },
    formatNumber: function(a) {
        if (a <= 0) {
            a = 0
        }
        return a = a.toString()
    },
    formatTime: function(a, b) {
        switch (b) {
            case "day":
                return a / 1e3 / 60 / 60 / 24;
            case "hours":
                return a / 1e3 / 60 / 60 % 24;
            case "minutes":
                return a / 1e3 / 60 % 60;
            case "seconds":
                return a / 1e3 % 60
        }
    }
};
$(function() {
    var day = document.getElementById('day');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    // 日 时 分 秒的dom对象
    countDownTime.init('2021/1/25 23:59:59', day, hours, minutes, seconds);
    countDownTime.start();
});
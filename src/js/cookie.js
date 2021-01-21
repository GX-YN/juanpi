//创建cookie
function setCookie(key,value,expires){
	let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(!isNaN(expires)){
		let date = new Date();
		date.setDate(date.getDate() + Number(expires));
		cookieText += ';expires=' + date;
	}
	document.cookie = cookieText;
}
//获取cookie
function getCookie(key){
	let arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		let list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}

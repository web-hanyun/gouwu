/**
 * Created by Administrator on 2016/9/5.
 */
//-----------------------------搜索------------------------
//1.https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy
//    /su?wd=%E5%A5%BD&cb=handleData
//百度搜索接口描述
//该接口支持jsonp
//需要参数1是  关键字,   wd
//本地的js函数名，回调函数名，服务器通过调用本地的js函数
// 把服务器的数据通过参数传给你
// 例如: 本地有 handleData(res){}，服务器在获取到数据之后调用它
//  服务器返回  handleData({数据});
//需要第二个参数是  cb   ,本地函数名

//2.把用户输入的文本获取到传给服务器，服务器返回数据，将返回的数据展示出来
var input = document.getElementById("txt_keywords");
input.onkeyup = function () {
    var text = this.value; //当前输入框的值
    //通过script标签获取数据
    var script = document.createElement("script");
    script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+text+"&cb="+"handleData";
    document.body.appendChild(script);//插入之后会立即请求数据
    document.body.removeChild(script);//获取数据之后删除script
    $("#resultlist").addClass("result");
};
//jsonp需要服务器配合，服务器必需调用本地的js函数
var list = document.getElementById("resultlist");
function  handleData(res) {
    console.log(res);
    // res从百度获取来之后是一个对象，对象的s属性是一个数组
    //获取到数据之后将数据展示出来
    var arr = res.s;
    var htmlstr = "";
    for(var i= 0,len=arr.length;i<len;i++) {
        htmlstr += "<li>"+arr[i]+"</li>";
    }
    list.innerHTML = htmlstr;
}








/**
 * Created by Administrator on 2016/9/5.
 */
$(function(){
    var index = 0;
    var preindex = 0;//要显示的这张图的前面的一张
    var timer = null;
    var $imgs = $("#banner img");//缓存所有图片
    autoPlay();
    function autoPlay() {
        timer = setInterval(function () {
            index++;
            if(index>4) {
                index = 0;
                preindex = 4;//5最后一张
            }
            //滚动
            scrollLeft();
            //当前显示的这一张图将成为下一次的前一张
            preindex = index;
        },3000);
    }

    function scrollLeft() {
        $("#btns span").eq(index).addClass("hover").siblings().removeClass("hover");
        $imgs.eq(index).stop(true).fadeTo(500,1).siblings().fadeTo(500,0);//去到左边
        //把当前要显示的图片，放到最右边
        //.css({left:820})目的是第一轮之后她们的坐标还是在右边
        //如果不使用那么所有的图片的left都是 -820，只能正常滚动一轮
    }
    //添加点击事件


    //小圆点添加悬浮事件
    //悬浮上去？清除定时器,改变图片位置
    $("#btns span").hover(function () {
        clearInterval(timer);
        index = $(this).index();//当前要显示的图片的索引
        //判断方向
        //假设 preindex=0  index=1向左移移动 index=0   preindex=5
        // preindex = 5 ,index = 2 向右移动 index=5  preindex=0
        //&&优先级高
        scrollLeft();
    }, function () {
        autoPlay();
    });
});
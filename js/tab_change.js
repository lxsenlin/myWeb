window.onload = function () {
    //需求：鼠标放到上面的li上，li本身变色(添加类)，下方对应的span也显示出来(添加类);
    //思路：1.点亮上面的盒子。   2.利用索引值显示下面的对应的盒子。

    //1、获取所有的nav
    var navArr = document.getElementsByClassName("nav");

    //让每一个nav都调用函数
    for (var i = 0; i < navArr.length; i++) {
        fn(navArr[i]);
    }
    
    function fn(element) {
        var aArr = element.getElementsByTagName("a");   //注意，是element获取事件源，不是document获取事件源
        var contentArr = document.getElementsByClassName("contents_box"); //获取所有的content
        //2.绑定事件（循环绑定）
        for (var i = 0; i < aArr.length; i++) {
            //绑定索引值（新增一个自定义属性：index属性）
            aArr[i].index = i;
            aArr[i].onmouseover = function () {
                //3.书写事件驱动程序（排他思想）
                //1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
                for (var j = 0; j < aArr.length; j++) {
                    aArr[j].className = "";
                    //隐藏所有的content
                    contentArr[j].style.display = "none";
                }
                this.className = "aCurrent";
                // contentArr[this.index].className = "w contents_box contents_show";
                //添加class属性
                contentArr[this.index].style.display = "block";
            } 
        }
    }
}
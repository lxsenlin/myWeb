var img = document.getElementsByClassName("background_box")[0];
window.onscroll = function () {
    //被卷去的距离大于
    if (scroll().top > 70) {
        img.style.position = "fixed";
    } else {
        img.style.position = "relative";
    }
    //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
    leader = scroll().top;
}

//封装g检测滚动的函数
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

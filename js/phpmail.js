document.querySelector('.feedback_btn').addEventListener('click', function() {
    var feedbackContent = document.querySelector('.feedback_input').value;

    // 使用XMLHttpRequest对象发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/phpmail.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 发送请求并将用户输入的数据作为参数
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText); // 显示来自服务器的响应文本
        }
    };
    xhr.send("feedback=" + encodeURIComponent(feedbackContent));
});
// document.addEventListener('DOMContentLoaded', function() {
//     var btns = document.getElementsByClassName("feedback_btn");
//     if (btns.length > 0) { // 确保至少有一个按钮被找到
//         btns[0].addEventListener('click', function() {
//             alert("点击了反馈按钮");
//         });
//     } else {
//         console.error("未找到具有 'feedback_btn' 类的按钮。");
//     }
// });
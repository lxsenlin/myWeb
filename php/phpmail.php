<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 获取通过POST方法发送过来的反馈内容
    $feedback = isset($_POST['feedback']) ? $_POST['feedback'] : '';

    // 在这里可以对$feedback进行处理，例如存储到数据库或写入文件等
    // 示例：简单地返回接收到的内容
    // echo "接收到的反馈是: " . htmlspecialchars($feedback);
} else {
    // echo "无效请求";
}


#获取用户注册的账号信息
$email="2109587701@qq.com";
$name="客户";
// 输出接收到的反馈内容
$huizhi=htmlspecialchars($feedback);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../includes/PHPMailer/src/Exception.php';
require '../includes/PHPMailer/src/PHPMailer.php';
require '../includes/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

// #判断codetime 是否存在 30秒内只能发送一次邮件 可以自己定义时间
// if(isset($_SESSION['codetime'])){
//     $now=time();
//     $res=$now-intval($_SESSION['codetime']);
    
// }else{
//     $res=30;
// }

// if($res>=30){
//       #随机生成验证码
// $code=rand(1000,9999);
// #$_SESSION['code']=$code;
// ##请在此处将网址内容 更改为你当前服务器的模板所在的网址
// $huizhi=file_get_contents('http://localhost/email-master/muban.php?code='.$code);

// $huizhi2="站长，".$name."注册了您的Madmic账号";
//                              // Passing `true` enables exceptions
try {
    //服务器配置
    $mail->CharSet ="UTF-8";                     //设定邮件编码
    $mail->SMTPDebug = 0;                        // 调试模式输出
    $mail->isSMTP();                             // 使用SMTP
    $mail->Host = 'smtp.qq.com';                // SMTP服务器
    $mail->SMTPAuth = true;                      // 允许 SMTP 认证
    $mail->Username = '2109587701@qq.com';                // SMTP 用户名  即邮箱的用户名
    $mail->Password = 'pnidfkkjcvobcjii';             // SMTP 密码  部分邮箱是授权码(例如163邮箱)
    $mail->SMTPSecure = 'ssl';                    // 允许 TLS 或者ssl协议
    $mail->Port = 465;                            // 服务器端口 25 或者465 具体要看邮箱服务器支持

    $mail->setFrom('2109587701@qq.com', 'chenkk');  //发件人
    $mail->addAddress($email,$name);  // 收件人
    //$mail->addAddress('ellen@example.com');  // 可添加多个收件人
    $mail->addReplyTo('2109587701@qq.com', 'info'); //回复的时候回复给哪个邮箱 建议和发件人一致
    //$mail->addCC('cc@example.com');                    //抄送
    //$mail->addBCC('bcc@example.com');                    //密送

    //发送附件
    // $mail->addAttachment('../xy.zip');         // 添加附件
    // $mail->addAttachment('../thumb-1.jpg', 'new.jpg');    // 发送附件并且重命名

    //Content
    $mail->isHTML(true);                                  // 是否以HTML文档格式发送  发送后客户端可直接显示对应HTML内容
    $mail->Subject = '来自lxsenlin网站的用户反馈';
    $mail->Body    = $huizhi;
    $mail->AltBody = '你的设备不支持此邮件，请使用谷歌浏览器查看！';

    $mail->send();
    echo '邮件发送成功！';
    // 请按邮件提示进行激活！<a href="login6.html">返回登陆页</a>';
} catch (Exception $e) {
    echo '邮件发送失败: ', $mail->ErrorInfo;
}

?>
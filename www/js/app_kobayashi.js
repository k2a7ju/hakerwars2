$(function() {
  $("#LoginBtn").click(onLoginBtn);
  $("#RegisterBtn").click(onRegisterBtn);
});

var appKey    = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
var clientKey = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
var ncmb = new NCMB(appKey, clientKey);
// 
// var key = "2400e802a0bfb66f2d8bc4624263ab0f4d9ff2955cbca47a484140e89a149e1e";
// var value = "c435ae78b8984c1b6d0de9faa84996e8e70d7dc0ecada40500cb3a49e1d0128a";
// var ncmb = new NCMB(key, value);

function onRegisterBtn()
{
    var email = $("#reg_email").val();
    ncmb.User.requestSignUpEmail(email)
         .then(function(data){
            // 送信後処理
            $.mobile.changePage('#tlPage');
         })
         .catch(function(err){
           // エラー処理
           alert("faild"+err.text);
         });
}

function onLoginBtn()
{
    var email = $("#login_email").val();
    var password = $("#login_password").val();
    //メールアドレスとパスワードをもつインスタンスでログイン
   	var mail_user = new ncmb.User(
   	{
       	mailAddress: email,
       	password: password
   	});
   	ncmb.User.loginWithMailAddress(mail_user)
    .then(function(data){
    	// ログイン後処理
    	$.mobile.changePage('#AddContent');
    	//console.log("OK");
    })
    .catch(function(err){
    	// エラー処理
    	console.log(err);
    }
)};
$(function()
{
   $("#RegisterBtn").click(onRegisterBtn);
   $("#LoginBtn").click(onLoginBtn);
});

var key = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
var value = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
//var key = "a96154cf37818fb6edd425a6a10b8dddc2d7bb22f13451e8946fe3c7df914c84";
//var value = "50f6d95c7b6ee08e67f2ca351d380b24c230c530375e912ffe1585aa2039efeb";
// var key = "2400e802a0bfb66f2d8bc4624263ab0f4d9ff2955cbca47a484140e89a149e1e";
// var value = "c435ae78b8984c1b6d0de9faa84996e8e70d7dc0ecada40500cb3a49e1d0128a";
var ncmb = new NCMB(key, value);

function onLoginBtn()
{
   var userName = $("#login_user").val();
   var password = $("#login_password").val();
   console.log(userName);
   console.log(password);
   // ユーザー名とパスワードをもつインスタンスでログイン
   var user = new ncmb.User(
   {
       userName: userName,
       password: password
   });
   ncmb.User.login(user)
       .then(function(data)
       {
           // ログイン後処理
           //alert("ログインに成功しました。");
          $.mobile.changePage('#AddContent');  
       })
       .catch(function(err)
       {
           // エラー処理
           alert(err);
           //alert("faild" + err.text);
       })      
   
}

function onRegisterBtn()
{
    var key = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
   var value = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
   //var key = "a96154cf37818fb6edd425a6a10b8dddc2d7bb22f13451e8946fe3c7df914c84";
   //var value = "50f6d95c7b6ee08e67f2ca351d380b24c230c530375e912ffe1585aa2039efeb";
   
   var ncmb = new NCMB(key, value);
    
   var user = new ncmb.User();
   var mailAddress = $("#reg_mailAddress").val();
   console.log("%s",mailAddress);
   var username = mailAddress;
   var password = $("#reg_password").val();
   console.log("%s",password);
   var userNameFirst = $("#reg_userNameFirst").val();
   var userNameFamily = $("#reg_userNameFamily").val();
   var userNameFamilyFurigana = $("#reg_userNameFamilyFurigana").val();
   var userNameFirstFurigana = $("#reg_userNameFirstFurigana").val();
   var history = $("#reg_history").val();
   var mind = $("#reg_mind").val();
   var facebookAccount = $("#reg_facebookAccount").val();
   user.set("userName",username)
       .set("mailAddress",mailAddress)
       .set("password",password)
       .set("userNameFamily",userNameFamily)
       .set("userNameFirst", userNameFirst)
       .set("userNameFamilyFurigana",userNameFamilyFurigana)
       .set("userNameFirstFurigana", userNameFirstFurigana)
       .set("history", history)
       .set("mind", mind)
       .set("facebookAccount", facebookAccount);
   user.signUpByAccount()
       .then(function()
       {
           // 登録後処理
           console.log("success!")
           $.mobile.changePage('index.html');
       })
       .catch(function(err)
       {
           console.log(err);
       });
}
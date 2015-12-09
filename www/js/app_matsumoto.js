var appKey    = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
var clientKey = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
var ncmb = new NCMB(appKey, clientKey);

function getCurrentUser() {
	var currentUser = ncmb.User.getCurrentUser();
	var userName = currentUser.get("userName")
	//console.log(ncmb.User.getCurrentUser());
	//console.log(currentUser.get("userName"));
	
	$("#currentUser").append("You are " + userName);
}

// function getContent() {	
// 	// ncmb.User.login("matsu111", "password")
//  //    .then(function(data){
//  //      	// ログイン後処理
//  //      	console.log("success");
//  //      	var currentUser = ncmb.User.getCurrentUser();
// 	// 	console.log("ログイン中のユーザー1: " + currentUser.get("userName"));
//  //    })
//  //    .catch(function(err){
// 	//  	// エラー処理
//  //      	console.log(err);
//  //    });
// 	
// 	var content = ncmb.DataStore("Content");
// 	content.order("createDate",true)
//  	.fetchAll()
//  	.then(function(results){
// 		//console.log("Successfully retrieved " + results.length);
// 		for (var i = 0; i < results.length; i++) {
//  			var object = results[i];
//  			//document.write("<p>" + object.get("content") + "</p>");
//  			//document.getElementById("content").textContent= object.get("content");
//  			$("#content").append("<li>"+object.get("content")+"</li>");
//   			//console.log(object.score + " - " + object.get("content"));
// 		}
// 		console.log("done");
//   	})
//  	.catch(function(err){
// 		console.log(err);
//   	});
// }

function goToHome() {
	$.mobile.changePage('#tlPage');
}

function showMyPage(userName) {
	console.log("show my page of " + userName);
}

function cntB() {
    var ContentClass = ncmb.DataStore("Content");
    var contentClass = new ContentClass();
    var key   = "content";
    var value = $("#reg_content").val();
    var tkey   = "title";
    var tvalue = $("#reg_title").val();
    contentClass.set(key, value);
    contentClass.set(tkey, tvalue);
    var userName = ncmb.User.getCurrentUser().get("userName");
    contentClass.set("userName", userName);
    contentClass.save()
    .then(function() {
        // 保存完了後に実行される
        //alert("New object created with objectId: " + contentClass.objectId);
        //var userName = ncmb.User.getCurrentUser().get("userName");
        //console.log(userName);
        $.mobile.changePage('#tlPage');
    })
    .catch(function(error) {
        // エラー時に実行される
        //alert("Failed to create new object, with error code: " + error.text);
    });
}
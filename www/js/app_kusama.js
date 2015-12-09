(function(){
	// This is a JavaScript file
	var appKey    = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
	var clientKey = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
	var ncmb = new NCMB(appKey, clientKey);
			
	var content = ncmb.DataStore("Content");
	content.order("createDate",true)
	.limit(10)
	.order("createData", true)
	.fetchAll()
	.then(function(results){
		//console.log("Successfully retrieved " + results.length);
		var $element=[];
		for (var i = 0; i < results.length; i++) {
			var object = results[i];
			//document.write("<p>" + object.get("content") + "</p>");
		 	//document.getElementById("content").textContent= object.get("content");
		    var onscol = $('<ons-col class="itemshow"></ons-col>');
		    var spantitle = $('<span class="item-title">' + object.get("title") + '</span><br />');
		    var spanlabel = $('<span class="item-lavel">' + object.get("createDate") + '</span><br /><span class="userName">'+object.get("userName")+'</span>');
		    var content = $('<p class="item-desc">' + object.get("content") + '</p>');
		    var header = $('<header></header>').append(spantitle,spanlabel);
		    
		    onscol.append(header)
		    onscol.append(content);
		    
		    //userName = object.get("userName")
		    console.log(document.getElementsByClassName("userName"));
		    //showMyPage(userName);
		    
		    var div = $('<div><img class="item-thum"></div>');
		    var onsdiv = $('<ons-col width="60px"></ons-col>');
		    onsdiv.append(div);
		    var onsrow = $('<ons-row></ons-row>');;
		    
		    onsrow.append(onsdiv);
		    onsrow.append(onscol);
		    var item=$('<ons-list-item modifier="chevron" class="item"></ons-list-item>').append(onsrow);
		     $("ons-list.masterdetail").append(item);
		 	$element.push(item);      
		  	//console.log(object.score + " - " + object.get("content"));
		}
         $('img.item-thum').attr('src','b.jpg');
		ons.bootstrap();
	}
	);
	// var MyDelegate={createItemContent: function(index, oldContent) {
	//   if (oldContent) {
	//     return oldContent;
	//   }   
	//              // ons.compile(content);
	//              return $element[index];
	//     		console.log("done");
	//   		})
	//  		.catch(function(err){
	//     		console.log(err);
	//   		});
	//     ,
	//      calculateItemHeight: function(index) {
	//     return 50;
	//   },
	//   countItems: function() {
	//     return 10;
	//   },
	//     destroyItemContent: function(index, element) {
	//   // var request = $element.data('request');
	//   // request.abort();
	// }
	// 
	// };
	
	
	(function(){
		'use strict';
		var currentItem = {};
		$(document).on('pageinit', '#detail-page', function() {
	    	$('.item-title', this).text(currentItem.title);
	    	$('.item-desc', this).text(currentItem.desc);
	     	$('.item-label', this).text(currentItem.label);
            var a=$('<a></a>').attr('href','mailto:'+currentItem.userName);
            a.text(currentItem.userName);
            $('.userName', this).append(a);
    var appKey    = "5805ac8f06bca7f0177ae8c487349ee893c73b5a2bdc86541a28239d0fe5da5a";
    var clientKey = "4ff73be5a2614b6b9b170383487d7a4b65e692bd8d3936ad7d6db113cf8a7d67";
	var ncmb = new NCMB(appKey, clientKey);
			
	var content = ncmb.DataStore("Content");
	content.order("createDate",true)
	.limit(3)
	.order("createData", true)
    .equalTo("userName", currentItem.userName)
	.fetchAll()
	.then(function(results){
		//console.log("Successfully retrieved " + results.length);
		var $element=[];
		for (var i = 0; i < results.length; i++) {
			var object = results[i];
            
    $('.past-'+(i+1).toString()+'-item-title', this).text(object.get("title"));
    $('.past-'+(i+1).toString()+'-item-desc', this).text(object.get("content"));
    $('.past-'+(i+1).toString()+'-item-label', this).text(object.get("createDate")+'<br />'+object.get("userName"));

            
	//document.write("<p>" + object.get("content") + "</p>");
		 	// //document.getElementById("content").textContent= object.get("content");
		  //   var onscol = $('<ons-col class="itemshow"></ons-col>');
		  //   var spantitle = $('<span class="item-title">' + object.get("title") + '</span>');
		  //   var spanlabel = $('<span class="item-lavel">' + object.get("createDate") + '</span>|<span class="userName">'+object.get("userName")+'</span>');
		  //   var content = $('<p class="item-desc">' + object.get("content") + '</p>');
		  //   var header = $('<header></header>').append(spantitle,spanlabel);
		  //   
		  //   onscol.append(header)
		  //   onscol.append(content);
		  //   
		  //   //userName = object.get("userName")
		  //   console.log(document.getElementsByClassName("userName"));
		  //   //showMyPage(userName);
		  //   
		  //   var div = $('<div class="item-thum"></div>');
		  //   var onsdiv = $('<ons-col width="60px"></ons-col>');
		  //   onsdiv.append(div);
		  //   var onsrow = $('<ons-row></ons-row>');;
		  //   
		  //   onsrow.append(onsdiv);
		  //   onsrow.append(onscol);
		  //   var item=$('<ons-list-item modifier="chevron" class="item"></ons-list-item>').append(onsrow);
		  //    $("ons-list.masterdetail").append(item);
		 	// $element.push(item);      
		  // 	//console.log(object.score + " - " + object.get("content"));
		}  
         $('.add-note-action-item', this).click(function () {
                //alert('dummy message');
	    		//var userName = ncmb.User.getCurrentUser().get("userName")
	    		$.mobile.changePage('#MyPage');
                 
		});
            
	    	    
                
                
	    	});
	    });
	  $(document).on('pageinit', '#list-page', function() {
	    $('.item', this).on('click', function() {
	      currentItem = {
	        title : $('.item-title', this).text(),
	        desc : $('.item-desc', this).text(),
	        label : $('.item-label', this).text(),
            userName : $('.userName', this).text()
	      };
	      app.navi.pushPage('detail.html');
	    });
	  });
	})();
   
    
    
})();
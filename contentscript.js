if($('link[href*="219"]').attr("media","embossed").length >= 1){
	chrome.extension.sendRequest("show_page_action"); 
}

var av;
chrome.extension.onRequest.addListener(function (request, sender) { 
	var link = $("<link>");
	if (request == "yosposamber") { 
		link.attr({
			type: 'text/css',
			rel: 'stylesheet',
			href: chrome.extension.getURL("219a.css")
		});
		$("head").append( link );
		av = "avamber.png"
	} else {
		link.attr({
			type: 'text/css',
			rel: 'stylesheet',
			href: chrome.extension.getURL("219.css")
		});
		$("head").append( link );
		av = "avgreen.png"
	}
	
	$(".userid-32076").children(".userinfo").children(".title").children("img").attr("src",chrome.extension.getURL(av));
});



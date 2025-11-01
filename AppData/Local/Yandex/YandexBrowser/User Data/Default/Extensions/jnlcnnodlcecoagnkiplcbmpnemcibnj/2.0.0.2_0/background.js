chrome.runtime.onMessageExternal.addListener(function(request, sender,
		sendResponse) {	
	if (request.message === "isInstalled") {
		sendResponse({
			success : true
		});
		return;
	} else if (request.message === "uninstallExtension") {
		chrome.management.uninstallSelf({
			showConfirmDialog : true
		});
		return;
	} else if (request.message === "loginAuthenticator") {
		
		chrome.tabs.create({}, function(tab) {			
			
			chrome.tabs.query({}, function(tabs) {
				for (var i = 0; i < tabs.length; i++) {
					if (tabs[i].url.indexOf("/loginSAML/authenticator") > 0) {
						chrome.tabs.remove(tabs[i].id);
						break;
					}
				}
			});
			
			mainNavigationController.process(tab, request.data.instructions);
			
		});

		sendResponse({
			success : true
		});
		return;
	}

	sendResponse({
		success : false
	});

});
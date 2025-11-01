var ExecuteRemoveCookie = function() {
	this.execute = function(tab, data, instructions) {
		// remove cookies (avoid account chooser form)
		chrome.cookies.remove({
			url : data.url,
			name : data.name
		}, function() {
			if (instructions != null) {
				mainNavigationController.process(tab,  instructions);
			}

		});
		return true;
	}
}
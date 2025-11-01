var ExecutePopulateElement = function() {
	this.execute = function(tab, data, instructions) {
		
		// populate input fields
		setTimeout(function() {
			chrome.tabs.executeScript(tab.id, {
				code : data.code ,  runAt : "document_end"
			}, function() {
				if (instructions != null) {
					mainNavigationController.process(tab, instructions);
				}
			});
			return true;
		}, 500);
	}
}
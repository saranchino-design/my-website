var ExecuteSubmit = function() {
	this.execute = function(tab, data, instructions) {
		
		// click on button
		chrome.tabs.executeScript(tab.id, {
			code : data.code, runAt : "document_end"
		}, function() {
			if (instructions != null) {
				mainNavigationController.process(tab, instructions);
			}

		});
		return true;
	}
}
var ExecuteRememberMe = function() {
	this.execute = function(tab, data, istructions) {
          // uncheck "rememebr me" options
			chrome.tabs.executeScript(tab.id, {
				code : data.code,  runAt : "document_end"
			}, function() {
				if (istructions != null) {
					mainNavigationController.process(tab, istructions);
				}
			} );

		return true;
	}
}
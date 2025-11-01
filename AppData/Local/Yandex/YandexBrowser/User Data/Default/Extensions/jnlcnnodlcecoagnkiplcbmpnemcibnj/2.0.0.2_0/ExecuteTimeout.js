var ExecuteTimeout = function() {
	this.execute = function(tab, data, instructions) {
		// timer for waiting some seconds		
        setTimeout(function() {
        	if (instructions != null) {
				mainNavigationController.process(tab, instructions);
			}
        	return true;
        }, data.time
        );
	}
}
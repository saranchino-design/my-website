var InstructionExecutor = function(type, data) {
	this.type = type;
	this.data = data;
	this.executor = null;

	switch (type) {
	case "REDIRECT":
		this.executor = new ExecuteRedirect();
		break;
	case "REMOVE_COOKIE":
		this.executor = new ExecuteRemoveCookie();
		break;
	case "POPULATE_ELEMENT":
		this.executor = new ExecutePopulateElement();
		break;
	case "SUBMIT":
		this.executor = new ExecuteSubmit();
		break;
	case "REMEMBER_ME":
		this.executor = new ExecuteRememberMe();
		break;
	case "TIME_OUT":
		this.executor = new ExecuteTimeout();
		break;
	default:
		console.log("Unknown instruction type");
	}

	this.execute = function(tab, instructions) {
		this.executor.execute(tab, data, instructions);
	}

}
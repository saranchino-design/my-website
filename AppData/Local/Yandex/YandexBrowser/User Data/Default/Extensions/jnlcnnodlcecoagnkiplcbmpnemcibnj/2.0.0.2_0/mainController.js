/**
 * 
 */
var mainNavigationController = function() {

	return {
		process : function(tab, instructions) {
			if (instructions.length == 0){
				return;
			}
				
			var executedInstruction = false;
			var currentInstruction = instructions[0];
			
			var executor = new InstructionExecutor(currentInstruction.type,
					currentInstruction.data);
			var instructionCount = instructions.length;
			
			var remainingInstructions = null;
			if (instructionCount > 0) {
				remainingInstructions = instructions.slice(1, instructionCount);
			}
			executedInstruction = executor.execute(tab, remainingInstructions);
			return null;
		}
	};
	
}();
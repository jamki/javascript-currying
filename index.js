/* ======================================
** JK - Attempt at test
** ====================================*/

/* (function () {

	vars = {
		subtotal: 0
	};
	
	// add
	add = function() {
		var i = 0;
		var sum = 0;

		while (i < arguments.length) {
			sum += arguments[i];
			i++;
		}
		vars.subtotal = sum;
		return sum;
	};
}()); */

// attempting to get chaining working

	var add = function () {

        this.subtotal;

		this.init = function(args) {

			var i = 0;
			var sum = 0;

			while (i < args.length) {
				sum += args[i];
				i++;
			}
			
			// return sum;
			this.subtotal = sum;
			return this;
		};

		this.value = function(subtotal) {
			this.subtotal = subtotal;
			return this;
		};

        init(arguments);

        return this.subtotal;
	};
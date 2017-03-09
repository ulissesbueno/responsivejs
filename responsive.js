// JavaScript Document
(function($){
	// Cria um form dinamicamete
	$.fn.responsive = function(settings){

		var Element = $(this);
		var me = this;
		var config = {
			padding : [0,0,0,0] // top, right, bottom, left
		};		

		this.expands = function(){
			var parent = Element.parent();

			parent.css('position','relative');

			var T = config.padding[0];
			var R = config.padding[1];
			var B = config.padding[2];
			var L = config.padding[3];

			Element.css({
				position 	: 'absolute',
				top			: T,
				left		: L,
				'box-sizing' : 'border-box'
 			})
			Element.width( parent.innerWidth() - (R + L ) );			
			Element.height( parent.innerHeight() - (B + T ));
		}

		// pegas as propriedades da função e transfere para o objeto
		if (typeof settings === 'object' || !settings){

			this.filter('*').each(function(){
				$.extend(config, settings);
				Element = $( this );		

				$( window ).unbind('resize').resize(function() {
					me.expands();
				});
				$( window ).resize();		 	
			})			
			
	        return this;
		}


		if (typeof settings === 'string') {
			var fun = eval(settings);
			fun.apply()
		}
		
		
		
	}


})(jQuery);
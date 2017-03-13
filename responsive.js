// JavaScript Document
(function($){
	// Cria um form dinamicamete
	$.fn.responsive = function(settings){

		//var Element = null;
		var me = this;
		var config = {
			padding : [0,0,0,0], // top, right, bottom, left,
			direction : "all",
			size : [100,100],
			align : ""
		};		

		this.expands = function( settings, Element ){
			var parent = Element.parent();

			//parent.css('position','relative');
			var pad_T = settings.padding[0];
			var pad_R = settings.padding[1];
			var pad_B = settings.padding[2];
			var pad_L = settings.padding[3];

			var top = pad_T;
			var right = 0;
			var left = pad_L;
			var bottom = 0;

			var sizeW = settings.size[0]; 
			var sizeH = settings.size[1];

			if( typeof sizeW === 'string' ){
				sizeW = (this.extract_perc( sizeW ) * parent.innerWidth() / 100);
			}

			if( typeof sizeH === 'string' ){
				sizeH = (this.extract_perc( sizeH ) * parent.innerHeight() / 100);
			} else {

				switch( settings.align ){
					case 'bottom':

						top = 'none';
						
						break;

					case 'right':

						left = 'none';

						break;
				}
			}

 			var w = sizeW - (pad_R + pad_L);
 			var h = sizeH - (pad_B + pad_T);

			if( settings.direction == 'all' || settings.direction == 'horizontal' ) Element.width( w );			
			if( settings.direction == 'all' || settings.direction == 'vertical' ) Element.height( h );

			Element.css({
				position 		: 'absolute',
				top				: top,
				bottom			: bottom,
				right			: right,
				left			: left,
				'box-sizing' 	: 'border-box'
 			})

			Element.html( "<span> " +  parent.innerWidth() + " x " + parent.innerHeight() + " <BR>  "+ sizeW+" x "+ sizeH +" </span>" )
		}

		this.extract_perc = function( str ){
			var regex = /([0-9]+)\%/;
			var m;
			while ((m = regex.exec(str)) !== null) {
			    return Number(m[1]);
			}
		}

		// pegas as propriedades da função e transfere para o objeto
		if (typeof settings === 'object' || !settings){

			this.filter('*').each(function(){
				me.expands( $.extend(config, settings), $( this ) );
			})			
			
	        return this;
		}


		if (typeof settings === 'string') {
			var fun = eval(settings);
			fun.apply()
		}
		
		
		
	}


})(jQuery);
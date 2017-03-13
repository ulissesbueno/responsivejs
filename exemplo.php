<style type="text/css">


	*{
		font-family: arial;
		font-size: 12px;
	}

	html, body, #main{
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;
	}

	body{
		overflow: hidden;
	}


	#main{
		max-width: 100%;
		margin: auto;
		background: #fff;
	}

	.header, .footer, .body{
		text-align: center;		
	}

	.footer{
		background: #ccc;	
	}

	.header{
		background: #ccc;		
	}

	span{
		margin: auto;
		vertical-align: middle;
		text-align: center;
		height: 100%;
	}

</style>


<div id='main' >
	<div class="header"> Title </div>
	<div class="body"> Body </div>
	<div class="footer"> Footer </div>
</div>

<script type="text/javascript" src='https://code.jquery.com/jquery-3.1.1.min.js'></script>
<script type="text/javascript" src='responsive.js?<?=uniqid()?>'></script>
<script type="text/javascript">
	$(function(){
		
		Addapt()

		$( window ).resize(function(){
			Addapt();
		});
	})

	function Addapt(){
		$('#main .header').responsive({ size : ['100%',100], padding : [0,0,0,0] });
		$('#main .body').responsive({ size : ['100%',''], padding : [100,0,0,0] });
		$('#main .footer').responsive({ size : ['100%',100], padding : [0,0,0,0] , align: 'bottom'});
	}

</script>
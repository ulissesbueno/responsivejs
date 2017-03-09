

<style type="text/css">
	html, body{
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;

	}

	.block{
		border: solid 1px;
		box-sizing: border-box;
	}

	.responsive{
		background: #555;
		height: 10px;
		width: 10px;
	}

</style>


<div class="block" style="width: 300px; height: 200px; ">
	<div class="responsive"></div>
</div>

<div class="block" style="width: 100%; height: 50px;">
	<div class="responsive"></div>
</div>

<script type="text/javascript" src='https://code.jquery.com/jquery-3.1.1.min.js'></script>
<script type="text/javascript" src='responsive.js?<?=uniqid()?>'></script>
<script type="text/javascript">
	$(function(){
		$('.responsive').responsive({	padding:[0,0,0,5],
										direction:"all",
										size: [20,100]
									});
	})
</script>
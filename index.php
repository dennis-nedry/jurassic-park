<?php

if( !strstr($_SERVER['HTTP_USER_AGENT'],'iPhone') && !strstr($_SERVER['HTTP_USER_AGENT'],'Android') ) 
{
    include('mobilerequired.php');
    exit();
}

?>
<!DOCTYPE html><!--HTML5 doctype-->
<html>
<head>
<title>Jurassic Park</title>
<meta http-equiv="Content-type" content="text/html; charset=utf-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<link rel="apple-touch-icon" href="/assets/appicon57.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/assets/appicon114.png" /> <!-- iPhone retina uses this -->
<link rel="apple-touch-startup-image" href="/assets/apploading.png" />

<meta name="apple-mobile-web-app-capable" content="yes" />
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<link rel="stylesheet" type="text/css" href="css/seetoday/jq.ui.css" />
<link rel="stylesheet" type="text/css" href="css/seetoday/seetoday.css" />
<script type="text/javascript" charset="utf-8" src="js/jq.mobi.js"></script>
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.swipe.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.template.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.carousel.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.css3animate.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.drawer.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.passwordBox.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.scroller.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.shake.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/plugins/jq.selectBox.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/jq.ui.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/st-events.js"></script> 
<script type="text/javascript" charset="utf-8" src="js/st-models.js"></script> 

<script type="text/javascript">
    
	var webRoot="./";
    var init = function(){
	   $.ui.backButtonText="Back";  
	   $.useViewport(320,480);
	   init_Loading();
    };
    window.addEventListener("load",init,false); 
	
    /* This code prevents users from dragging the page */
    var preventDefaultScroll = function(event) {
        event.preventDefault();
        window.scroll(0,0);
        return false;
    };
    document.addEventListener('touchmove', preventDefaultScroll, false);

    /* This code is used to run as soon as appMobi activates */
    var onDeviceReady=function(){
		webRoot=AppMobi.webRoot;
	    AppMobi.device.hideSplashScreen();
	    
    };
    document.addEventListener("appMobi.device.ready",onDeviceReady,false);    
</script>
</head>

<body>

<div id="content">
	<div title='Jurassic Park' id="loading" class="panel" selected="true">
		<div id="pbar" class="pbar_fullwidth">
			<span id="pbar_expand"></span>
		</div>
	</div> 

	<div title='Jurassic Park' id="main" class="panel">
		<ul>
		 <li><a href="#webcarousel" >See today</a></li>
		</ul>
		<div id="homescreen-mainimage" class="fullimage" style="background: url('assets/img/raptorpen.jpg');">
			<div class="fullimage-hint-overlay alpha60">Velcoraptor pen - feeding time</div>
		</div>
		<ul>
		 <li><a href="#map" >Map</a></li>
		 <li><a href="#news" >News</a></li>
		 <li><a href="#info" >Park Info</a></li>
		 <li><a href="#gallery" >Gallery</a></li>
		</ul>
		<input type="button" value="load" onclick="window.location = '/app.html';" />
	</div> 

	<!-- ------------------------------------------ -->
	<!-- See today -->
	<div title="See today" id="webcarousel" scrolling="no" class="panel">
		<div id="carousel" style="overflow: hidden; height: 350px; width: 318px; float: left;">
		</div>
	</div>
	<!-- end see today -->

	<!-- News -->
	<div title="News" id="news" class="panel">
		<p id="news-header"></p>		
		<div id="news-items"></div>
	</div>

	<!-- Info -->
	<div title="Park Info" id="info" class="panel">
		<div style="background-color:#e4e4e4; color:#000;">
			<table id="park-info" style="width:100%;" cellspacing="8" cellpadding="8">
			</table>
		</div>
	</div>

	<!-- Gallery -->
	<div title="Gallery" id="gallery" class="panel">
		<p class="gallery-row-text">Back in time at Jurassic Park</p>
		<div class="gallery-row">
			<div class="halfimage-l" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 1</div>
			</div>
			<div class="halfimage-r" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 2</div>
			</div>
			<div style="clear:both;"></div>
		</div>
		<p class="gallery-row-text">When dinosaurs ruled the earth</p>
		<div class="gallery-row">
			<div class="halfimage-l" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 1</div>
			</div>
			<div class="halfimage-r" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 2</div>
			</div>
			<div style="clear:both;"></div>			
		</div>
		<p class="gallery-row-text">The lab</p>
		<div class="gallery-row">
			<div class="halfimage-l" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 1</div>
			</div>
			<div class="halfimage-r" style="background: url('http://lorempixel.com/370/300/');">
				<div class="halfimage-hint-overlay alpha60">Gallery 2</div>
			</div>
			<div style="clear:both;"></div>			
		</div>
	</div>

	<!-- Map -->
	<div title="Map" id="map" class="panel">
		<p>Map</p>
	</div>

	<!-- Gallery Detl -->
	<div title="Gallery Name" id="gallerydetl" class="panel">
		<p>gallery detl</p>
	</div>
	
	<!-- Node -->
	<div title="Node Name" id="nodedetl" class="panel">
		<p>node detl</p>
	</div>
	
	<!-- News detl -->
	<div title="News Name" id="nodedetl" class="panel">
		<p>node detl</p>
	</div>
	
</div>

</body>

</html>
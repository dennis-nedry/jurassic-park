
/* Global Variables */
var appConfig = null;
var loading = 0;

function init_Loading()
{
	if( loading == 110 )
	{
		/* Init global config */
		appConfig = getApplicationData();

		buildScreenSeeToday( appConfig );
		buildInfoScreen( appConfig );
		buildScreenMap( appConfig );
		buildScreenNews( appConfig );

		$.ui.loadContent('main',false,false,'fade');
		$.ui.clearHistory();
	}	
	else
	{
		loading += 10;
		setTimeout( load_callback, 400 * Math.random() );
	}
}

function load_callback()
{
	$('#pbar_expand').css('width',loading + '%');
	init_Loading();
}

function buildInfoScreen(appcfg)
{
	if( appcfg.park_info.length == 0 )
	{
		$('#park-info').html('<tr><td colspan="2" align="center">No Park Info</td></tr>');
		return;
	}
	
	for( var i = 0; i < appcfg.park_info.length; i++ )
	{
		var html = '';
		html += '<tr>';
		html += '<td class="info-table-l">' + appcfg.park_info[i].title + '</td>';
		html += '<td class="info-table-r">';
		html += appcfg.park_info[i].content;
		html += '</td>';
		html += '</tr>';
		$('#park-info').append(html);
	}
}

function buildScreenSeeToday(appcfg)
{
	if( appcfg.see_today.length == 0 )
	{
		$('#carousel').html('<p>No items!</p>');
		return;
	}
	
	for( var i = 0; i < appcfg.see_today.length; i++)
	{
		var node = getNodeById(appcfg, appcfg.see_today[i]);
		console.log(node);
		var html = '';
		html += '<div class="carousel-image" style="background: url(\'' + node.img_main.url +'\') no-repeat; background-position: center center;">';
		html += '  <div class="fullimage-hint-overlay alpha60">' + node.title + '</div>';
		html += '  <div style="position: absolute; top:245px; width: 318px;">' + node.article + '</div>';
	    html += '</div>';
	    $('#carousel').append(html);		
	}
	
	$("#carousel").carousel({
		pagingDiv: "carousel_dots",
		totalPages: 4,
		pagingCssName: "carousel_paging2",
		pagingCssNameSelected: "carousel_paging2_selected"
	});
}

function buildScreenMap(appcfg)
{
	
}

function buildScreenNews(appcfg)
{
	if( appcfg.news.length == 0 )
	{
		$('#news-header').html('No news items yet!');
		return;
	}

	$('#news-header').html('Get the latest news from ' + appcfg.site_name );
	
	for(var i = 0; i < appcfg.news.length; i++)
	{
		var news = appcfg.news[i];
		var html = '';
		html =  '<div class="news-menu">';
		html +=	'   <div style="float:left; margin: 0px 12px 4px 0px; width:64px; height:64px;">';
		html +=	'     <img class="dropshadow" src="' + news.thumbnail + '" width="64" height="64" />';
		html += '   </div>';
		html +=	'   <div>';
		html +=	'     <h3>' + news.title + '</h3>';
		html += '     <div class="news-menu-preview">' + news.article + '</div>';
		html += '     <div>';
		html += '       <div style="float:left;" class="news-menu-hint">' + news.timestamp + '</div>';
		html += '       <div style="float:right;" class="news-menu-hint">By ' + news.author + '</div>';
		html += '       <div style="clear:both;"></div>';
		html += '     </div>';
		html +=	'   </div>';
		html += '</div>';
		
		$('#news-items').append(html);
	}
}

function getNodeById(appcfg, id)
{
	if( appcfg.nodes.length == 0 )
		return null;
	
	for( var j = 0; j < appcfg.nodes.length; j++ )
	{
		if( appcfg.nodes[j].id == id )
			return appcfg.nodes[j];
	}
	
	return null;
}

function getApplicationData()
{
	var appcfg = new AppConfig();
	
	appcfg.site_name = 'Jurassic Park';
	
	/* Init the Map data */
	appcfg.map = new Map( 14.397721, 122.814643, 14 );
	
	/* Init all the nodes */
	var nodes = Array();
	nodes[0] = new Node();
	nodes[0].id = 'VELOC'; nodes[0].lat = 14.408861; nodes[0].lng = 122.807777;
	nodes[0].title = 'Velcoraptor Pen';
	nodes[0].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[0].img_main = new SImage(null,null, 'assets/img/raptorpen.jpg','Raptor Pen - feeding time');
	
	nodes[1] = new Node();
	nodes[1].id = 'TREX'; nodes[0].lat = 14.401545; nodes[0].lng = 122.816703;
	nodes[1].title = 'Tyrannosaurus Paddock';
	nodes[1].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[1].img_main = new SImage(null,null, 'assets/img/rex1.jpg', 'T-Rex, welcoming some visitors!');
	
	nodes[2] = new Node();
	nodes[2].id = 'BRACHIO'; nodes[0].lat = 14.388077; nodes[0].lng = 122.817561;
	nodes[2].title = 'Brachiosaurus Herd';
	nodes[2].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[2].img_main = new SImage(null,null, 'assets/img/brachio.jpg','Herd of brachiosaurs');

	nodes[3] = new Node();
	nodes[3].id = 'DILOP'; nodes[0].lat = 14.41077; nodes[0].lng = 122.816000;
	nodes[3].title = 'Dilophasaurus';
	nodes[3].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[3].img_main = new SImage(null,null, 'assets/img/dilopho.jpg','Vera the cuddly dilophosaurus');

	nodes[4] = new Node();
	nodes[4].id = 'TRICER'; nodes[0].lat = 14.41077; nodes[0].lng = 122.816000;
	nodes[4].title = 'Tricerotops';
	nodes[4].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[4].img_main = new SImage(null,null, 'assets/img/tricero.jpg','Goodnight Tricerotops!');
	
	nodes[5] = new Node();
	nodes[5].id = 'CERATO'; nodes[0].lat = 14.41077; nodes[0].lng = 122.816000;
	nodes[5].title = 'Ceratosaurus';
	nodes[5].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	nodes[5].img_main = new SImage(null,null, 'assets/img/ceratosaurus.jpg','Ceratosaurus is a violent carnivore');
	
	appcfg.nodes = nodes;

	/* SeeToday nodes */
	appcfg.see_today = Array('TREX','DILOP','CERATO');
	
	/* News Items */
	var news = Array();
	news[0] = new News();
    news[0].id = '1';
	news[0].thumbnail = '/assets/news/boat-thumb.jpg';
	news[0].image = null;
	news[0].title = 'Boat Ride';
	news[0].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	news[0].timestamp = '20/12/2012';
	news[0].author = 'John Hammond';

	news[1] = new News();
	news[1].id = '2';
	news[1].thumbnail = '/assets/news/baby-thumb.jpg';
	news[1].image = null;
	news[1].title = 'Baby Boom';
	news[1].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	news[1].timestamp = '20/12/2012';
	news[1].author = 'Ian Malcolm';

	news[2] = new News();
	news[2].id = '3';
	news[2].thumbnail = '/assets/news/trex-thumb.jpg';
	news[2].image = null;
	news[2].title = 'Tyrant Lizard';
	news[2].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	news[2].timestamp = '20/12/2012';
	news[2].author = 'Alan Grant';

	news[3] = new News();
	news[3].id = '4';
	news[3].thumbnail = '/assets/news/dna-thumb.jpg';
	news[3].image = null;
	news[3].title = 'Dino DNA';
	news[3].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	news[3].timestamp = '20/12/2012';
	news[3].author = 'Henry Wu';

	news[4] = new News();
	news[4].id = '5';
	news[4].thumbnail = '/assets/news/amber-thumb.jpg';
	news[4].image = null;
	news[4].title = 'Amber - Ancient Blood';
	news[4].article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	news[4].timestamp = '20/12/2012';
	news[4].author = 'Henry Wu';
	
	appcfg.news = news;
	
	/* Park Info */
	var p_info = Array();
	p_info[0] = new ParkInfo();
	p_info[0].id = '1';
	p_info[0].title = 'Opening Times';
	p_info[0].content = 'Mon - Fri ... 8am - 6pm<br/>Sat - Sun ... 8am - 3pm';

	p_info[1] = new ParkInfo();
	p_info[1].id = '2';
	p_info[1].title = 'Ticket Prices';
	p_info[1].content = 'Adult: £12.00<br/>Child: £8.00<br/>Senior: £8.00';

	p_info[2] = new ParkInfo();
	p_info[2].id = '3';
	p_info[2].title = 'Contact';
	p_info[2].content = 'sales: sales@jurassicpark.com<br/>marketing: marketing@jurassicpark.com</br>phone: +43 3455 34453<br/>';

	appcfg.park_info = p_info;
	
	return appcfg;	
}

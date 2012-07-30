
function Node()
{
	this.id = null;
	
	this.lat = null;
	this.lng = null;
	this.map_icon = null;
	
	this.title = null;
	this.article = null;
	this.img_main = null;
	this.img_title = null;
	
}

function ParkInfo()
{
	this.id = null;
	this.title = null;
	this.content = null;
}

function News()
{
	this.id = null
	this.thumbnail = null;
	this.image = null;
	this.title = null;
	this.article = null;
	this.timestamp = null;
	this.author = null;
}

function Map( lat, lng, zoom )
{
	
}

function SImage( width, height, url, short_desc )
{
	this.width = width;
	this.height = height;
	this.url = url;
	this.short_desc = short_desc;
}

function AppConfig()
{
	this.site_name = null;
	
	/* Map object */
	this.map = null;
	
	/* Array of node objects */
	this.nodes = null;

	/* Park Info */
	this.park_info = Array();

	/* Array of node_ids for see today screen */
	this.see_today = Array();
	
	/* Array of node_ids for news */
	this.news = Array();
}

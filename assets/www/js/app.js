var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

$('#tab-bar a').on('click', function(e){
    e.preventDefault();
    var nextPage = $(e.target.hash);
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

function page(toPage) {
    var toPage = $(toPage),
    fromPage = $("#pages .current");
    if(toPage.hasClass("current") || toPage === fromPage) {
        return;
    };
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}


//function initialize() {
//		var mapOptions ={
//			center: new google.maps.LatLng(39.08, -108.52),
//			zoom: 13,
//			mapTypeId: google.maps.MapTypeId.ROADMAP
//		};
//		var map= new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//	}

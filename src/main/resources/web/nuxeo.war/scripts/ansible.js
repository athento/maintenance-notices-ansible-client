// Add Ansible notifications

jQuery(window).ready( function() {
	
	// localhost:8080
	var domain = jQuery(location).attr('host');
	
	// nuxeo/nxpath/default/Default Domain 2@view_documents
	var y = jQuery(location).attr('pathname').split("@")[0].split("/")[4];
	
	if(typeof y != 'undefined') {
		domain += "$" + y;
	}
	
	jQuery.ajax({
		type : 'GET',
		"url" : "http://localhost:8000/index/get/"+domain+"/",
		"dataType" : "jsonp",
		jsonpCallback : 'ansibleResponse'
	});
});

function ansibleResponse(data) {
	if(data['html'] != ""){
	jQuery(window).ready( function() {
		jQuery('body').append('<div class="cd-popup" role="alert">'+
                '<div class="cd-popup-container">'+
                data['html']+
                '<a href="#0" class="cd-popup-close img-replace"></a>'+
                '</div> <!-- cd-popup-container -->'+
                '</div> <!-- cd-popup -->');
	jQuery('head').append('<style>.cd-popup {'+
			'position: fixed;'+
			  'left: 0;'+
			  'top: 0;'+
			  'z-index: 10000000;'+
			  'height: 100%;'+
			  'width: 100%;'+
			  'background-color: rgba(94, 110, 141, 0.9);'+
			  'opacity: 0;'+
			  'visibility: hidden;'+
			  '-webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;'+
			  '-moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;'+
			  'transition: opacity 0.3s 0s, visibility 0s 0.3s;'+
			'}'+
			'.cd-popup.is-visible {'+
			  'opacity: 1;'+
			  'visibility: visible;'+
			  '-webkit-transition: opacity 0.3s 0s, visibility 0s 0s;'+
			  '-moz-transition: opacity 0.3s 0s, visibility 0s 0s;'+
			  'transition: opacity 0.3s 0s, visibility 0s 0s;'+
			'}'+
			'.cd-popup-container {'+
			  'position: relative;'+
			  'width: 90%;'+
			  'max-width: 400px;'+
			  'margin: 4em auto!important;'+
			  'background: #FFF;'+
			  'border-radius: .25em .25em .4em .4em;'+
			  'text-align: center;'+
			  'box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);'+
			  '-webkit-transform: translateY(-40px);'+
			  '-moz-transform: translateY(-40px);'+
			  '-ms-transform: translateY(-40px);'+
			  '-o-transform: translateY(-40px);'+
			  'transform: translateY(-40px);'+
			  '/* Force Hardware Acceleration in WebKit */'+
			  '-webkit-backface-visibility: hidden;'+
			  '-webkit-transition-property: -webkit-transform;'+
			  '-moz-transition-property: -moz-transform;'+
			  'transition-property: transform;'+
			  '-webkit-transition-duration: 0.3s;'+
			  '-moz-transition-duration: 0.3s;'+
			  'transition-duration: 0.3s;'+
			'}'+
			'.cd-popup-container p {'+
			  'padding: 3em 1em;'+
			'}'+
			'.cd-popup-container .cd-buttons:after {'+
			  'content: "";'+
			  'display: table;'+
			  'clear: both;'+
			'}'+
			'.cd-popup-container .cd-buttons li {'+
			  'float: left;'+
			  'width: 50%;'+
			'}'+
			'.cd-popup-container .cd-buttons a {'+
			  'display: block;'+
			  'height: 60px;'+
			  'line-height: 60px;'+
			  'text-transform: uppercase;'+
			  'color: #FFF;'+
			  '-webkit-transition: background-color 0.2s;'+
			  '-moz-transition: background-color 0.2s;'+
			  'transition: background-color 0.2s;'+
			'}'+
			'.cd-popup-container .cd-buttons li:first-child a {'+
			  'background: #fc7169;'+
			  'border-radius: 0 0 0 .25em;'+
			'}'+
			'.no-touch .cd-popup-container .cd-buttons li:first-child a:hover {'+
			  'background-color: #fc8982;'+
			'}'+
			'.cd-popup-container .cd-buttons li:last-child a {'+
			  'background: #b6bece;'+
			  'border-radius: 0 0 .25em 0;'+
			'}'+
			'.no-touch .cd-popup-container .cd-buttons li:last-child a:hover {'+
			  'background-color: #c5ccd8;'+
			'}'+
			'.cd-popup-container .cd-popup-close {'+
			  'position: absolute;'+
			  'top: 8px;'+
			  'right: 8px;'+
			  'width: 30px;'+
			  'height: 30px;'+
			'}'+
			'.cd-popup-container .cd-popup-close::before, .cd-popup-container .cd-popup-close::after {'+
			  'content: "";'+
			  'position: absolute;'+
			  'top: 12px;'+
			  'width: 14px;'+
			  'height: 3px;'+
			  'background-color: #8f9cb5;'+
			'}'+
			'.cd-popup-container .cd-popup-close::before {'+
			  '-webkit-transform: rotate(45deg);'+
			  '-moz-transform: rotate(45deg);'+
			  '-ms-transform: rotate(45deg);'+
			  '-o-transform: rotate(45deg);'+
			  'transform: rotate(45deg);'+
			  'left: 8px;'+
			'}'+
			'.cd-popup-container .cd-popup-close::after {'+
			  '-webkit-transform: rotate(-45deg);'+
			  '-moz-transform: rotate(-45deg);'+
			  '-ms-transform: rotate(-45deg);'+
			  '-o-transform: rotate(-45deg);'+
			  'transform: rotate(-45deg);'+
			  'right: 8px;'+
			'}'+
			'.is-visible .cd-popup-container {'+
			  '-webkit-transform: translateY(0);'+
			  '-moz-transform: translateY(0);'+
			  '-ms-transform: translateY(0);'+
			  '-o-transform: translateY(0);'+
			  'transform: translateY(0);'+
			'}'+
			'@media only screen and (min-width: 1170px) {'+
			  '.cd-popup-container {'+
			    'margin: 8em auto!important;'+
			  '}'+
			'}</style>');
	
		jQuery('.cd-popup').addClass('is-visible');
	});
	//close popup
	jQuery('.cd-popup').on('click', function(event){
		if( jQuery(event.target).is('.cd-popup-close') || jQuery(event.target).is('.cd-popup') ) {
			event.preventDefault();
			jQuery(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	jQuery(document).keyup(function(event){
    	if(event.which=='27'){
    		jQuery('.cd-popup').removeClass('is-visible');
	    }
    });
	}
}
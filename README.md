# maintenance-notices-ansible-client
## Synopsis

This Nuxeo plugin ask a [Maintenance notices server](https://github.com/athento/maintenance-notices-server) for new messages and displays them if needed.

## Code Example

``` javascript
// cloud.athento.com
var domain = jQuery(location).attr('host');
// nuxeo/nxpath/default/default-domain@view_documents
var y = jQuery(location).attr('pathname').split("@")[0].split("/")[4];
if(typeof y != 'undefined') {
	domain += "$" + y;
}
var msgServer = "http://localhost:8000"
jQuery.ajax({
	type : 'GET',
	"url" : msgServer+"/index/get/"+domain+"/",
	"dataType" : "jsonp",
	jsonpCallback : 'ansibleResponse'
});
```

## Motivation

This is the client for our [Maintenance notices server](https://github.com/athento/maintenance-notices-server) and we created it to show personal messages to users the easy way.

## Installation

In order to use this plugin, you must deploy it along with [nuxeo-js-addon-enabler](https://github.com/athento/nuxeo-js-addons-enabler) and add **ansible.js** to the **custom-includes.xhtml** file.

``` javascript
...
var source = "#{baseURL}js/?scripts=";
// Include your own js file here from other plug-ins
var scripts = [ "ansible.js", "other.js", "plugins.js" ];
var scriptsLength = scripts.length;
...
```

Finally, you should just moddify this var with your own [Maintenance notices server](https://github.com/athento/maintenance-notices-server) instance address:
``` javascript
var msgServer = "http://localhost:8080"
```

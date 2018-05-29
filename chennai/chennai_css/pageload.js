// JavaScript Document
function pageload(url,target) {
    // native XMLHttpRequest object
    document.getElementById(target).innerHTML = '<img src="images/loader.gif" width="126" height="22" />';
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        req.onreadystatechange = function() {jahDone(target);};
        req.open("GET", url, true);
        req.send(null);
    // IE/Windows ActiveX version
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.onreadystatechange = function() {jahDone(target);};
            req.open("GET", url, true);
            req.send();
        }
    }
}    

function jahDone(target) {
    // only if req is "loaded"
    if (req.readyState == 4) {
        // only if "OK"
        if (req.status == 200) {
            results = req.responseText;
			var results_array=results.split("&&&");
					
            document.getElementById(target).innerHTML = results_array[0];
			document.getElementById('global1').innerHTML = results_array[1];
			//var rst = results_array[0].indexOf("Successfully");
			//if(rst > -1){document.getElementById(target).innerHTML = ''; }
			
			
			
        } else {
            document.getElementById(target).innerHTML="error:\n" +
                req.statusText;
        }
    }
}
function pageload2(target) 
	{
	document.getElementById(target).innerHTML = '';
	var url = window.location.toString();
			var rst1 = url.indexOf("result_residential.php");
			var rst2 = url.indexOf("properties.php");
			if(rst1 > -1 || rst2 > -1){history.go(0); }
	}
	function pageload1(target) 
	{
	document.getElementById(target).innerHTML = '';
	}

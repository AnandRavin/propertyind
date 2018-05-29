// JScript File
var m_redirect;
var m_DefaultControl;
var resultsUrl = null;
var browserAgent = '';

function IsIE7() {
	var nua = navigator.userAgent;
	var op = (nua.indexOf('Opera') != -1);
	if ((nua.indexOf('MSIE') != -1) && !op)
	{	
		var str_pos = nua.indexOf('MSIE');
		var nu = nua.substr(str_pos+5, 3);		
		return (nu.substring(0,1)==7);
	}
	return false;			
}

var agentstring = navigator.userAgent;
if (IsIE7()) {
	document.documentElement.className+= " IE7";
	browserAgent = 'IE7';
}
else if ( (agentstring.indexOf("Mozilla")>=0 || agentstring.indexOf("Opera")>=0) && agentstring.indexOf("MSIE")==-1 ) {
    document.documentElement.className+= " Mozilla";
	browserAgent = 'FF';
} else {
    document.documentElement.className+= " NotIE7FF";
	browserAgent = 'IE6';
} 


/*contact broker*/
function docb(id, link, linkCb) { 
	if (id) {
		var form = document.createElement("form");
		form.id = "formCb" + id;
		form.action = link;
		form.method = "post";
		form.innerHTML = "<input type=\"hidden\" name=\"raw\" value=\"" + linkCb + "\" />";
		document.body.appendChild(form);
		form.submit();
	}
	else if (_setdocb) {
		_setdocb();
	}
}

var _setdocb = null;
function setdocb(delegate) {
	_setdocb = delegate;
}

var images;
var captions;
var activitynumber;
var currentactivity = 0;
var iteration = 0;
function updateactivity(direction) {
	activitynumber  = images.length;
	var oldimage = currentactivity;

	if (direction == "prev") {
		currentactivity = (currentactivity == 0) ? (activitynumber - 1) : (currentactivity - 1);
	}
	else {
		currentactivity = (currentactivity == (activitynumber - 1)) ? 0 : (currentactivity + 1);
	}

	document.getElementById(images[oldimage]).style.display = "none";
	document.getElementById(images[currentactivity]).style.display = "";

	if (captions) {
		document.getElementById(captions[oldimage]).style.display = "none";
		document.getElementById(captions[currentactivity]).style.display = "";
	}
}

function startactivity() {
	updateactivity('next') ;
}   

function docompare(addhistory) {
    var cItems = getCookie("compare");
    if (cItems != null) {
        if (addhistory) setCookie("pnDetails", resultsUrl);
        deleteCookie("compare");

        var checkboxIdList=cItems.split("|");
        var index;
        for (index=0;index<checkboxIdList.length;index++)
        {
            document.getElementById(checkboxIdList[index]).checked=false;
        }
        document.location.href = '/default.aspx?ct=m&cpid='+cItems.replace(/[|]/g, ",");
   }
}

function WC(pid, preserveUserPrice) {
	if (resultsUrl && resultsUrl != null && resultsUrl.length > 0 && pid != null)
		setCookie("pnDetails", resultsUrl + "|" + pid + "|" + preserveUserPrice);
	return true;
}

function restorecompare(properties, redirect){
    setCookie("compare", properties);
    document.location.href = redirect;
    return true;
}

function removecompareitem(properties, property){
    var cItems = properties.split('|');
    var cItemsNew = '';
    for (var i = 0; i < cItems.length; i++)
    {
        if (cItems[i] != property) cItemsNew += cItems[i] + ',';
    }
    document.location.href = '/default.aspx?ct=m&cpid='+cItemsNew.substring(0 ,cItemsNew.length-1);
}

function addcompare(obj) {
    //deleteCookie("pnDetails", "/");
    //deleteCookie("compare", "/");
    if(obj.checked) {
        var cItems = getCookie("compare");
        if (cItems!=null && cItems.indexOf(obj.id) > -1) 
            return true; // do nothing
        else if (cItems != null) 
            cItems += "|" + obj.id;
        else
            cItems = obj.id;
        setCookie("compare", cItems);
    } else {
        var cItems = deleteCookieValue("compare", obj.id);
        if (cItems != '') setCookie("compare", cItems);
    }
    return true;
}

function removecompare(pid) {
    var cItems = deleteCookieValue("compare", pid);
    if (cItems != '') setCookie("compare", cItems);
}

function deleteCookieValue(name, pid) {
    var cItems = getCookie(name);
    if (cItems == pid) {
        deleteCookie(name);
        return '';
    }
    else if (cItems != null) {
        var begin = cItems.indexOf(pid);
        var end = cItems.indexOf("|", begin);
        if (end == -1) // last item
            cItems = cItems.substring(0, begin -1);
        else { 
            cItems = cItems.substring(0, begin) + cItems.substring(end+1);
        }
        return cItems;
    }
    else
        return '';
}

function setCookie(name,value,days) {
    if(!days)
        days = 1000;
    var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	if(location.host.indexOf('.') == -1 || location.host.indexOf('www.') == 0)
	    document.cookie = name+"="+value+"; expires="+date.toGMTString()+"; path=/";
	else
		document.cookie = name+"="+value+"; expires="+date.toGMTString()+"; domain="+location.host+"; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function deleteCookie(name) {
	setCookie(name,"",-1);
}

function ms(map) 
{
    if(self == top)
	    window.location = "/default.aspx?ct=r&type=STAT," + map;
    else 
        top.location  = "/default.aspx?ct=r&type=STAT," + map;
}

function Search(url) 
{
	var state = document.getElementById("SearchState");
	var county = document.getElementById("SearchCounty");
	var price = document.getElementById("SearchPrice");
	var size = document.getElementById("SearchSize");
	var lifestyle = document.getElementById("SearchLifestyle");
	var type = document.getElementById("SearchType");
	
	var atts = "";
	if (state && state.selectedIndex != 0) {
		if (state.options[state.selectedIndex].getAttribute("atid") && state.options[state.selectedIndex].getAttribute("avid")) {
			atts += state.options[state.selectedIndex].getAttribute("atid") + "," + state.options[state.selectedIndex].getAttribute("avid") + ";";
		}
	}
	if (county && county.selectedIndex != 0) {
		atts += county.options[county.selectedIndex].getAttribute("atid") + "," + county.options[county.selectedIndex].getAttribute("avid") + ";";
	}
	if (size && size.selectedIndex != 0) {
		atts += size.options[size.selectedIndex].getAttribute("atid") + "," + size.options[size.selectedIndex].getAttribute("avid") + ";";
	}
	if (type && type.selectedIndex != 0) {
		atts += type.options[type.selectedIndex].getAttribute("atid") + "," + type.options[type.selectedIndex].getAttribute("avid") + ";";
	}
	if (lifestyle && lifestyle.selectedIndex != 0) {
		atts += lifestyle.options[lifestyle.selectedIndex].getAttribute("atid") + "," + lifestyle.options[lifestyle.selectedIndex].getAttribute("avid") + ";";
	}

	if (atts != "") {
		atts = atts.substring(0, atts.length - 1);
	}

	var param = "";
	if (price && price.selectedIndex != 0) {
		param += "&pn=" + price.options[price.selectedIndex].getAttribute("min") + "&px=" + price.options[price.selectedIndex].getAttribute("max");
	}
	
	url += atts + param;
	parent.document.location.href = url;
}

function RefineByPrice(url, min, max) {
	min = min.replace(",", "");
	max = max.replace(",", "");
	if (min && parseInt(min) >= 0) {
		url += "&pn=" + min;
	}

	if (max && parseInt(max) > 0) {
		url += "&px=" + max;
	}
	window.location = url;
}

function seeMore(hide, display)
{
    document.getElementById(hide).style.display = "none";
    document.getElementById(display).style.display = "";
}

var loadCallbackFn = null;
function addScript(url, callbackFn) {
	loadCallbackFn = callbackFn;

	var veScript = document.createElement("script");
	veScript.src = url;
	veScript.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(veScript);
}

function addEvent(obj, evType, fn)
{
  if (obj.addEventListener)
  {
    obj.addEventListener(evType, fn, false);
    return true;
  }
  else if (obj.attachEvent)
  {
  var r = obj.attachEvent("on"+evType, fn);
    return r;
  }
  else
  {
    return false;
  }
}

function removeEvent(obj, evType, fn)
{
  if (!obj) return;
  
  if (obj.removeEventListener)
  {
    obj.removeEventListener(evType, fn, false);
    return true;
  }
  else if (obj.detachEvent)
  {
  var r = detachEvent("on"+evType, fn);
    return r;
  }
  else
  {
    return false;
  }
}
    
/******************************************************************
 * function: doPopup
 * purpose: Generic popup function that creates a container div,
 *          title bar, close button w/attached event, and a 
 *          dialog body.
 * args: id         - the name of the container div           
 *       width      - the width of the container div
 *       height     - the height of the container div
 *       closeEvent - the event to attach the close click event to
 * output: a reference to the container div
 ******************************************************************/
function doPopup(id, width, height, closeEvent, imagepath, showtitle, title)
{
	var myDiv = document.getElementById(id);
	if (myDiv) 
	{	
	    myDiv.style.width = width + 10 + "px";
	    myDiv.style.height = height + 10 + "px";
	}	
	else
	{
        // create container
        myDiv = document.createElement("div");
	    myDiv.id = id;
	    myDiv.className = "popup_dialog";
	    myDiv.style.width = width + 10 + "px";
	    myDiv.style.height = height + 10 + "px";
    	
	    if (showtitle == true)
	    {
	        // create titlebar
	        var divTitleBar = document.createElement("div");
	        divTitleBar.className = "popup_title";
	        divTitleBar.id = "popup_title";
        	if(title)
        	    divTitleBar.innerHTML = '<div style="float:left;color:#fff;font-size:1.2em;margin:10px;">'+title+'</div>';
        	    
	        // create close button
	        divClose = document.createElement("div");
	        divClose.className = "popup_close";
	        var img = document.createElement("img");
	        img.src = imagepath;
	        //img.width ="12";
	        //img.height = "12";
	        img.border = "0";
	        img.style.cursor = "pointer";
	        img.style.paddingTop = "4px";
	        img.id = "close_event_" + id;
	        addEvent(img, "click", closeEvent);
	        divClose.appendChild(img);
	        divTitleBar.appendChild(divClose);
	        myDiv.appendChild(divTitleBar); 
        }
        
	    // create dialog body
	    var divDialogBody = document.createElement("div");
	    divDialogBody.className = "popup_body";
	    divDialogBody.id = "popup_body_" + id;
    	
	    myDiv.appendChild(divDialogBody);
	    document.body.appendChild(myDiv);
	}
	CenterPopup(myDiv);

    return myDiv;
}

/******************************************************************
 * function:    imagePopup
 * purpose:     Map popup (Parcel Map, Location Map, Site Map)
 * args:        id         - the name of the container div           
 *              width      - the width of the container div
 *              height     - the height of the container div
 * comments:    calls doPopup to create the popup structure
 * output:      none
 ******************************************************************/
 function imagePopup(image, width, height, link, title, imagepath)
{
	var m_image = image;
	var m_loaded = false;
	var m_error = false;
	var m_Interval;
	var m_this = this;
    var m_width = width;
    var m_height = height;
    var m_id = "popupImageDialog";
    var m_title = title;
    var m_link = link;
    
    ShowImage();
    
	function ShowImage()
	{
		var img = document.getElementById("PopupImage");
		if (img)
		{
		    if (img.src == m_image)
		    {
		        Render();
		        return;
		    }
		}
		
		m_img = document.getElementById("PopupImage");
		if (m_img)
		{
		    m_img.src = m_image;
		    m_img.onerror = imageError;
		    m_img.border = "0";
		    m_img.style.width = width + "px";
		    m_img.style.height = height + "px";
		}
		else
		{
		    m_img = document.createElement("img");
		    m_img.src = m_image;
		    m_img.onerror = imageError;
		    m_img.border = "0";
		    m_img.id = "PopupImage";
		    m_img.style.width = width + "px";
		    m_img.style.height = height + "px";
        }
		Render();
	}
	
	function Render()
	{	
	    var exists;
	    var myDiv;
	    var body = document.getElementById("popup_body_" + m_id);
	    if (body) exists = true;
	    
        if (exists)
        {
            myDiv = document.getElementById(m_id);
            var link = document.getElementById("popup_image_link");
            link.href = m_link;
            link.innerHTML = title;
        }
        else
        {
    		myDiv = doPopup(m_id, m_width, m_height + 70, closeDivDialog, imagepath, true);
    		myDiv.style.display = "none";
            body = document.getElementById("popup_body_" + m_id);
            			
            var link = document.createElement("div");
            link.className = "popup_image_link";
            var anchorHTML = "<div><a id='popup_image_link' href='" + m_link + "' target='_blank'>Click here for a printable version</a>&nbsp;&nbsp;" +
							 "<span class='blueresultssmall'>(Requires Adobe Reader)</span>" + 
							 "&nbsp;<a href='http://www.adobe.com/products/acrobat/readstep2.html' target='_blank'>" +
							 "<img src='" + g_imagePath + "pdf.gif" + "' border='0' style=padding-top:5px;></a><div>";
            link.innerHTML = anchorHTML;
            body.appendChild(link);

		    var divImageWrapper = document.createElement("div");
		    divImageWrapper.style.paddingBottom = "10px";
		    divImageWrapper.id = "LI_Container";
		    if (!m_error) {
			    divImageWrapper.style.width = "";
			    divImageWrapper.innerHTML = "";
			    divImageWrapper.appendChild(m_img);
		    } else {
			    //myDiv.style.width = m_width + "px";
			    divImageWrapper.innerHTML = "We're sorry this image is not available.";
			    divImageWrapper.style.width = "100%";
			    divImageWrapper.style.textAlign = "center";
			    divImageWrapper.style.paddingLeft = "0px";
			    divImageWrapper.style.paddingRight = "0px";
		    }
		    body.appendChild(divImageWrapper);

		    myDiv.appendChild(body);
		}
        
        CreatePlaceHolder();
        var placeholder = document.getElementById("zippyplaceholder");
        placeholder.style.display = "";
        CenterPopup(placeholder);

        expandpopup(width, height, placeholder, myDiv, m_id + "_shadow", true)
		
	}
	
	function imageLoaded(evt)
	{
		m_loaded = true;
	}

	function imageError(evt)
	{
		m_error = true;
		m_loaded = true;
	}
	
	function closeDivDialog(evt)
	{
		var dialog = document.getElementById(m_id);
        var placeholder = document.getElementById("zippyplaceholder");
	    placeholder.style.width = dialog.style.width;
	    placeholder.style.top = dialog.style.top;
	    placeholder.style.left = dialog.style.left;
	    placeholder.style.height = dialog.style.height;
	    var m_gwidth = dialog.style.width.replace("px", "");
	    var m_gheight = dialog.style.height.replace("px", "");
	    placeholder.style.display = "";
        dialog.style.display = "none";
        disposePopupObjects("PopupCover", "ShadowCover", m_id + "_shadow");
        collapsepopup(m_gwidth, m_gheight, placeholder);        
		var img = document.getElementById("close_event_" + m_id);
		removeEvent(img, "click", this);
		m_Interval = null;
		return false;
	}	

}

function disposePopupObjects(popupcover, shadowcover, shadowid)
{
	var cover = document.getElementById(popupcover);
	if (cover) {
		cover.style.display = "none";
		cover = null;
	}
	var cover = document.getElementById(shadowcover);
	if (cover) {
		cover.style.display = "none";
		cover = null;
	}
	var shadow = document.getElementById(shadowid);
	if (shadow) {
		shadow.style.display = "none";
		shadow = null;
	}
}

function imageViewerPopup(messagetext, linkhref)
{
    var m_id = "imageViewerPop";
    var m_width = 200;
    var m_height = 150;
    
    var divBody = document.getElementById(m_id);
    if (divBody)
    {
        var link = document.getElementById("imageViewerLink");
        if (linkhref) 
        {
            link.href = 'http://' + linkhref;
            link.style.display = "";
        }
        else
            link.style.display = "none";
        var message = document.getElementById("imageViewerMsg");
        message.innerHTML = messagetext;
        divBody.style.display = "";
    }
    else
    {
        divBody = doPopup(m_id, m_width, m_height, closeDialog, g_imagePath, true);
        divBody.appendChild(document.createElement("br"));
        var message = document.createElement("div");
        message.id = "imageViewerMsg";
        message.innerHTML = messagetext;
        message.className = "grayresults";
        message.style.textAlign = "center";
        divBody.appendChild(message);
        divBody.appendChild(document.createElement("br"));
        
        var linkdiv = document.createElement("div");
        linkdiv.style.textAlign = "center";
        var link = document.createElement("a");
        link.id = "imageViewerLink";
        link.target = "_blank";
        if (linkhref)
        {
            link.href = 'http://' + linkhref;
        }
        else
            link.style.display = "none";
        link.innerHTML = "View";
        linkdiv.appendChild(link);
        divBody.appendChild(linkdiv);

        divBody.appendChild(document.createElement("br"));
        var popupcontainer = document.createElement("div");
        popupcontainer.style.width = "100%";
        popupcontainer.style.textAlign = "center";
        var btn = document.createElement("button");
        btn.className = "button1";
        btn.innerHTML = "OK";
        addEvent(btn, "click", closeDialog);
        popupcontainer.appendChild(btn);
        divBody.appendChild(popupcontainer);
        
    }
    
    createLayer(divBody, "PopupCover", 4);    
    createShadow(divBody, m_id + "_shadow");

	function closeDialog(evt)
	{
		var dialog = document.getElementById(m_id);
		dialog.style.display = "none";
        disposePopupObjects("PopupCover", "ShadowCover", m_id + "_shadow");
		var img = document.getElementById("close_event_" + m_id);
		removeEvent(img, "click", this);
		return false;
	}	
}

function messagePopup(messagetext, height, width, title)
{
    var m_id = "messagePop";
    var m_width = (width==undefined) ? 300 : width;
    var m_height = (height==undefined) ? 300 : height;
    
    var divBody = document.getElementById(m_id);
    if (divBody)
    {
        document.getElementById("messagePopup_msg").innerHTML = messagetext;
        divBody.style.display = "";
    }
    else
    {
        divBody = doPopup(m_id, m_width, m_height, closeDialog, g_imagePath + "x.gif", true, title);
        
        var message = document.createElement("div");
        message.innerHTML = messagetext;
        message.id = "messagePopup_msg";
        divBody.appendChild(message);

        divBody.appendChild(document.createElement("br"));
        var container = document.createElement("div");
        container.style.width = "100%";
        container.style.textAlign = "center";
        var btn = document.createElement("A");
        btn.innerHTML = "OK";
        addEvent(btn, "click", closeDialog);
        container.appendChild(btn);
        divBody.appendChild(container);
    }
    
    createLayer(divBody, "PopupCover", 0);
    createShadow(divBody, m_id + "_shadow");
    
	function closeDialog(evt)
	{
		var dialog = document.getElementById(m_id);
		dialog.style.display = "none";
        disposePopupObjects("PopupCover", "ShadowCover", m_id + "_shadow");
		var img = document.getElementById("close_event_" + m_id);
		removeEvent(img, "click", this);
		return false;
	}	    
}

function getScrollTop() {
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    return window.pageYOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    return document.body.scrollTop;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    return document.documentElement.scrollTop;
  } else return "0px";
}

function CenterPopup(popup) {
      if(document.documentElement.clientHeight) {
            if (document.documentElement.clientHeight<popup.offsetHeight)
            {
                popup.style.top = parseInt(getScrollTop()) + 5 + "px";
                popup.style.left = ((document.documentElement.clientWidth - popup.offsetWidth)/2 + document.documentElement.scrollLeft)+'px';
            }
            else
            {
                popup.style.top = ((document.documentElement.clientHeight - popup.offsetHeight)/2 + document.documentElement.scrollTop)+'px';
                popup.style.left = ((document.documentElement.clientWidth - popup.offsetWidth)/2 + document.documentElement.scrollLeft)+'px';
            }
      } else {
            if (document.body.clientHeight<popup.offsetHeight)
            {
                popup.style.top = parseInt(getScrollTop()) + 5 + "px";
                popup.style.left = ((document.body.clientWidth - popup.offsetWidth)/2 + document.body.scrollLeft)+'px';
            }
            else
            {
                popup.style.top = ((document.body.clientHeight - popup.offsetHeight)/2 + document.body.scrollTop)+'px';
                popup.style.left = ((document.body.clientWidth - popup.offsetWidth)/2 + document.body.scrollLeft)+'px';
            }
      }
}

function createLayer(popup, layerid, extraborder)
{
    var extrawidth = 0;
    var xyadjust = 0;
    
    if (extraborder != 0)
    {
        extrawidth = extraborder;
        xyadjust = extraborder / 2;
    }
    
    // create background iframe to block select elements
	var cover = document.getElementById(layerid);
	if (cover)
	{
	    cover.style.width = (parseInt(popup.style.width.replace("px", "")) + extrawidth) + "px";
	    cover.style.height = (parseInt(popup.style.height.replace("px", "")) + extrawidth) + "px";
	    cover.style.top = (parseInt(popup.style.top.replace("px", "")) - xyadjust) + "px";
	    cover.style.left = (parseInt(popup.style.left.replace("px", "")) - xyadjust) + "px";
	    cover.style.display = "";
    }
    else
    {
	    cover=document.createElement('iframe');
	    if(document.location.protocol == "https:")
		    cover.src="//0";
	    else if(window.opera != "undefined")
		    cover.src="";
	    else
		    cover.src="javascript:false";
	    cover.style.width = (parseInt(popup.style.width.replace("px", "")) + extrawidth) + "px";
	    cover.style.height = (parseInt(popup.style.height.replace("px", "")) + extrawidth) + "px";
	    cover.style.top = (parseInt(popup.style.top.replace("px", "")) - xyadjust) + "px";
	    cover.style.left = (parseInt(popup.style.left.replace("px", "")) - xyadjust) + "px";
	    cover.scrolling="no";
	    cover.frameBorder="0";
	    cover.style.position = "absolute";
	    cover.id = layerid;
	    document.body.appendChild(cover);
	}

    //setShading(cover, 70);
	
}

function hideShadow(id)
{
   var shadow = document.getElementById(id);
   if (shadow && shadow.style.display == "") shadow.style.display = "none";
}

function createShadow(popup, id)
{
	var shadowDiv;
	shadowDiv = document.getElementById(id);
	if (!shadowDiv) 
	{
	    shadowDiv = document.createElement("div");
	    document.body.appendChild(shadowDiv);
	    shadowDiv.className = "dropShadow";
	    shadowDiv.id = id;
    }
	if (popup.tagName == "IFRAME")
	{
	    shadowDiv.style.width = popup.style.width;
	    shadowDiv.style.height = popup.style.height;
	    shadowDiv.style.top = popup.style.top;
	    shadowDiv.style.left = popup.style.left;
	}
	else
	{
	    var suffix = "";
	    if (document.documentElement.className == "Mozilla")
	    {
	        var suffix = "px";
	        shadowDiv.style.marginLeft = "4px";
	        shadowDiv.style.marginTop = "4px";
	    }
	    shadowDiv.style.width = popup.offsetWidth + suffix;
	    shadowDiv.style.height = popup.offsetHeight + suffix;
	    shadowDiv.style.top =  popup.offsetTop + "px";
	    shadowDiv.style.left = popup.offsetLeft + "px";
	}
	shadowDiv.style.display = "";
	return shadowDiv;
}

var si_timeout;
function doIFramePopup(width, height, uri)
{
	var m_interval;
	var m_height = height;
	var m_width = width;
	var m_iFrameShadowID = "iFrameShadow";
	var m_iFrameID = "iFramePopup";
	var m_iFrameContainerID = "iframecontainer";
	
	hideShadow(m_iFrameShadowID);
	
    var m_iFrm = document.getElementById(m_iFrameID);
    if (uri.indexOf('rand') > -1)
    {
        uri +=  Math.random()*5;
    }

	clearTimeout(si_timeout);
    if (!m_iFrm) {
		si_timeout = setTimeout(function() {doIFramePopup(width, height, uri);}, 10);
		return;
    }
    m_iFrm.setAttribute("src", uri);
        
    var iFrm = document.getElementById(m_iFrameID);
    iFrm.style.width = m_width + "px";
    iFrm.style.height = m_height + "px";

    var iFrmContainer = document.getElementById(m_iFrameContainerID);
    iFrmContainer.style.width = m_width + "px";
    iFrmContainer.style.height = m_height + "px";
    
	//setShading(iFrmContainer, 70);
	//iFrmContainer.style.opacity = ".7";
	//iFrmContainer.style.filter = "alpha(opacity=70)";
    
    m_interval = setInterval(showIFrame, 200);
    
    function showIFrame()
    {
        clearInterval(m_interval);

        CreatePlaceHolder();
        var placeholder = document.getElementById("zippyplaceholder");
        placeholder.style.display = "";
        CenterPopup(placeholder);

        expandpopup(m_width, m_height, placeholder, iFrmContainer, m_iFrameShadowID, false);
    }
    
}

function expandpopup(maxwidth, maxheight, placeholder, obj, shadowid, divpopup)
{
    
    var m_width = maxwidth;
    var m_height = maxheight;
    var m_placeholder = placeholder;
    var m_gwidth = 0;
    var m_gheight = 0;
    var m_obj = obj;
    var m_ShadowID = shadowid;
    var m_divpopup = divpopup;

    var m_interval = setInterval(doexpand, 1);        
    
    function doexpand()
    {
        m_gwidth = (m_gwidth + 50 > m_width ? m_width : m_gwidth + 50);
        m_gheight = (m_gheight + 50 > m_height ? m_height : m_gheight + 50);
        m_placeholder.style.width = m_gwidth + "px";
        m_placeholder.style.height = m_gheight + "px";
        CenterPopup(m_placeholder);
        
        if (m_gwidth == m_width && m_gheight == m_height)
        {
            clearInterval(m_interval);
            
            m_obj.style.left = m_placeholder.style.left;
            m_obj.style.top = m_placeholder.style.top;
    	    m_obj.style.display = "";
    	    createLayer(m_obj, "PopupCover", 2);
            
            var shadow = createShadow(m_obj, m_ShadowID);
            m_placeholder.style.zIndex = 1;
            //m_placeholder = null;
            
            if (m_DefaultControl != "")
            {
                if (top.frames.iFramePopup.setFocus != undefined)
                    top.frames.iFramePopup.setFocus(m_DefaultControl);
                m_DefaultControl = "";
            }
        }
    }
}      

function CreatePlaceHolder()
{
    if (!document.getElementById("zippyplaceholder"))
    {
        var placeholder = document.createElement("div");
        placeholder.style.display = "none";
        placeholder.style.border = "solid 1px black";
        placeholder.style.position = "absolute";
        placeholder.style.zIndex = "200";
        placeholder.id = "zippyplaceholder";
        placeholder.style.display = "none";
        document.body.appendChild(placeholder);
    }
}

function setShading(obj, opacity)
{
	obj.style.opacity = opacity * .01;
	obj.style.filter = "alpha(opacity=" + opacity + ")";
}

function collapsepopup(maxwidth, maxheight, placeholder)
{
    
    var m_placeholder = placeholder;
    var m_gwidth = maxwidth;
    var m_gheight = maxheight;

    var m_interval = setInterval(docollapse, 1);        
    
    function docollapse()
    {
        m_gwidth = (m_gwidth - 50 < 0 ? 0 : m_gwidth - 50);
        m_gheight = (m_gheight - 50 < 0 ? 0 : m_gheight - 50);
        m_placeholder.style.width = m_gwidth + "px";
        m_placeholder.style.height = m_gheight + "px";
        CenterPopup(m_placeholder);
        
        if (m_gwidth == 0 && m_gheight == 0)
        {
            clearInterval(m_interval);

            m_placeholder.style.display = "none";
            m_placeholder = null;
        }
    }
}      

function displayReminder()
{
    var forgotpassword = document.getElementById("forgotpassword");
    var signin = document.getElementById("signin");

    if (forgotpassword && signin)
    {
        forgotpassword.style.width= signin.style.width;
        forgotpassword.style.display = "";
        signin.style.display = "none";
    }

    document.getElementById("errormessage").innerHTML = "";
    document.forms[0].submitaction.value = "emailreminder";
}

function cancelReminder()
{
    var signin = document.getElementById("signin");
    var forgotpassword = document.getElementById("forgotpassword");

    if (forgotpassword && signin)
    {
        signin.style.width= forgotpassword.style.width;
        signin.style.display = "";
        forgotpassword.style.display = "none";
    }
    
    document.getElementById("errormessage").innerHTML = "";
    document.forms[0].submitaction.value = "signin";
    return false;
}

function resetSignin()
{
    var section = document.getElementById("signin");
    if (section)
    {
        section.style.display = "";
    }

    var section = document.getElementById("forgotpassword");
    if (section)
    {
        section.style.display = "none";
    }

    var section = document.getElementById("emaildisclaimer");
    if (section)
    {
        section.style.display = "none";
    }
    
    document.getElementById("errormessage").innerHTML = "";
    document.forms[0].submitaction.value = "signin";
}

function closeIFrame()
{
    var m_gwidth, m_gheight;
    iFrm = document.getElementById("iframecontainer");
	var m_placeholder = document.getElementById("zippyplaceholder");
	m_placeholder.style.width = iFrm.style.width;
	m_placeholder.style.top = iFrm.style.top;
	m_placeholder.style.left = iFrm.style.left;
	m_gwidth = iFrm.style.width.replace("px", "");
	m_placeholder.style.height = iFrm.style.height;
	m_gheight = iFrm.style.height.replace("px", "");
	m_placeholder.style.display = "";

    iFrm.style.display = "none";

    var shadow = document.getElementById("iFrameShadow");
    if (shadow) shadow.style.display = "none";

    disposePopupObjects("PopupCover", "ShadowCover", "bogus");
    
    collapsepopup(m_gwidth, m_gheight, m_placeholder);        

    if (m_redirect && m_redirect != "")
    {
        document.location.href = m_redirect;
        m_redirect = null;
    }
    
}

function thankyou(uri, width, height)
{
    doIFramePopup(width, height, uri);
}

function thankyoudiv(messagetext)
{
    var m_id = "typopup";
    var m_width = 325;
    var m_height = 175;
    
    var divBody = document.getElementById(m_id);
    if (divBody)
    {
        document.getElementById("ty_msg").innerHTML = messagetext;
        divBody.style.display = "";
    }
    else
    {
        divBody = doPopup(m_id, m_width, m_height, closeDialog, null, false);
        divBody.style.backgroundColor = "#f0f0f0";
        
        var message = document.createElement("div");
        message.innerHTML = messagetext;
        message.id = "ty_msg";
        divBody.appendChild(message);

        divBody.appendChild(document.createElement("br"));
        var container = document.createElement("div");
        container.style.width = "100%";
        container.style.textAlign = "center";
        var btn = document.createElement("button");
        btn.className = "button1";
        btn.innerHTML = "OK";
        addEvent(btn, "click", closeDialog);
        container.appendChild(btn);
        divBody.appendChild(container);
    }
    
    createLayer(divBody, "PopupCover", 8);
    
	function closeDialog(evt)
	{
		var dialog = document.getElementById(m_id);
		dialog.style.display = "none";
		parent.closeIFrame();
        disposePopupObjects("PopupCover", "ShadowCover", m_id + "_shadow");
		var img = document.getElementById("close_event_" + m_id);
		removeEvent(img, "click", this);
		return false;
	}	    
}

function signUp(uri, width, height)
{
    doIFramePopup(width, height, uri);
}

function searchByMap(uri)
{
    var width = "360";
    var height = "325";

	var qsclosediv = document.getElementById("qsclosediv");
	if (qsclosediv) {
		qsclosediv.onclick();
	}

    doIFramePopup(width, height, uri);
}

function signIn(uri)
{
    closePopup();
    
    var width = "400";
    var height = "225";
    
    if (uri.indexOf('rand') == -1)
    {
        uri += "&rand=" + Math.random()*5;
    }
    
    m_DefaultControl = "signup_email";
    
    doIFramePopup(width, height, uri);
}

function setFocus(controlname)
{
    if (document.getElementById(controlname)) document.getElementById(controlname).focus();
}

function validateSignIn()
{
    var frm = document.forms[0];
    
    if (frm.signup_email.value =='')
    {
        document.getElementById("errormessage").innerHTML = "Please enter a valid email address.<br/>";
        return;
    }
    if (frm.signup_password.value == '') 
    {
        document.getElementById("errormessage").innerHTML = "Please enter a valid password.<br/>";
        return;
    }

    frm.submit();
    return;
}

function validateReminder()
{
    var frm = document.forms[0];
    if (frm.signin_emailreminder.value =='')
    {
        document.getElementById("errormessage").innerHTML = "Please enter a valid email address.<br/>";
        return false;
    }

    frm.submit();
    return;
}

function highlightError(control)
{
    var m_control = document.getElementById("lbl_" + control.id);
    if (!m_control) return;
    var m_field = control;
    var show = true;
    var count = 0
    var m_Interval = setInterval(highlight, 300);
        
    function highlight()
    {
        count++;
        if (show)
        {
            m_control.className += " invalid_label";
            show = false;
        }
        else
        {
            m_control.className = m_control.className.replace("invalid_label", "");
            show = true;
        }
        
        if (count == 5) 
        {
            clearInterval(m_Interval);
            m_field.focus();
        }
    }
}

function IsValidEmail(email, msg){
	var exp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(email.match(exp))
    {
        //document.getElementById("errormessage").innerHTML = '';
        return true;
    }
	else
	{
        document.getElementById("errormessage").innerHTML = msg + '<br/>';
	    return false;
	}
}

function IsValidMultiEmail(control, msg){
	var exp = /^\s*[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}\s*$/;
	var label = document.getElementById("lbl_"+control.id);
    var errordiv = document.getElementById("errormessage");
    var cEmails = control.value.split(',');
    for (var i = 0; i < cEmails.length; i++)
    {
	    if(!cEmails[i].match(exp))
	    {
            errordiv.innerHTML = msg + '<br/>';
            highlightError(control);
	        return false;
	    }
    }
    errordiv.innerHTML = '';
    if (label) label.className = label.className.replace("invalid_label", "");
    return true;
}

function IsValidLength(control, minlength, maxlength, msg)
{
    var m_minlength = (minlength) ? minlength : 0;
    var m_maxlength = (maxlength) ? maxlength : 0;
    
    var label = document.getElementById("lbl_"+control.id);
    if ((minlength != 0 && control.value.length < minlength) || (maxlength != 0 && control.value.length > maxlength))
    {
        var errordiv = document.getElementById("errormessage");
        errordiv.innerHTML = msg + '<br/>';
        highlightError(control);
        return false;
    }
    else
    {
        var errordiv = document.getElementById("errormessage");
        errordiv.innerHTML = '';
        if (label) label.className = label.className.replace("invalid_label", "");
        return true;
    }
    
    return true;
}

function IsValid(control, type, msg)
{
    var label = document.getElementById("lbl_"+control.id);
    switch (type)
    {
        case "textbox":
        {
            if (control.value == '')
            {
                var errordiv = document.getElementById("errormessage");
                errordiv.innerHTML = msg + '<br/>';

                highlightError(control);
                return false;
            }
            else
            {
                var errordiv = document.getElementById("errormessage");
                errordiv.innerHTML = '';
                if (label) label.className = label.className.replace("invalid_label", "");
                return true;
            }
        break;
       }
       case "select":
       {
            if (control.selectedIndex == 0 || control.options[control.selectedIndex].value == '')
            {
                var errordiv = document.getElementById("errormessage");
                errordiv.innerHTML = msg;

                highlightError(control);
                return false;
            }
            else
            {
                var errordiv = document.getElementById("errormessage");
                errordiv.innerHTML = '';
                if (label) label.className = label.className.replace("invalid_label", "");
                return true;
            }
       }
    }
    
    return true;
}

function signOut()
{
    //document.cookie="compare=;";
    deleteCookie("compare");
    document.location.href = "http://" + document.location.host + "/postback.aspx?submitaction=signout&src=" + escape(document.location.href);
    //to always go to homepage use this line:
    //document.location.href = "http://" + document.location.host + "/postback.aspx?submitaction=signout&src=/";
}

function trackclick(cachekey, anchor) {
    if (anchor)
    {
        var aid = anchor.id;
        if(document.images){ 
            (new Image()).src="/ws/trackclick.aspx?cachekey="+cachekey+"&aid="+aid+"&rand="+Math.random()*5;
        } 
    }
    return true;
}

function trackclick(cachekey) {
    if(document.images){ 
        (new Image()).src="/ws/trackclick.aspx?cachekey="+cachekey+"&aid="+cachekey+"&rand="+Math.random()*5;
    }
    return true;
}

/*top level*/
var IE = document.all ? true : false;
   
/*searchbox*/
function doSS(inputid) {
	var input = document.getElementById(inputid);
	if (input) {
		if(input.getAttribute("clear")) { 
			window.location = '/default.aspx?ct=r&q=' + encodeURIComponent(input.value);
		}
		else window.location = '/default.aspx?ct=r&q=';
	}
}

function doSSFocus(input, initialValue) {
	input.setAttribute("clear", true);
	input.value = '';
	input.style.color = '#000000';
}

function doSavedSearchFocus(input, initialValue) {
	input.setAttribute("clear", true);
	
	// Only clear the value if it was the initial value
	// (this avoids the case of somebody's value getting cleared if they
	//  click on the text box a second time)
	if(input.value == initialValue) {
	    input.value = '';
	}
	input.style.color = '#000000';
}
        
/*property image gallery*/
var selectedImage = null;
function GrowImage(img) {
	UnselectImage(selectedImage);
    SwapImage(img);
	UnselectImage(img);
}

function SwapImage(img) {
	document.getElementById("mainImg").src = img.getAttribute("largeSrc");
    selectedImage = img;
    return false;
}
function GrowImageResale(img,ID) {
//	alert(ID);
	UnselectImage(selectedImage);
    SwapImageResale(img,ID);
	UnselectImage(img);
}

function SwapImageResale(img,ID){
	document.getElementById("resaleImg"+ID).src = img.getAttribute("largeSrc");
    selectedImage = img;
    return false;
}

function UnselectImage(img) {
    if (!img) {
		return;
    }
    
    if (img.style.borderTopColor == "gray") {
		img.style.border = "solid 2px #CD4818";
		if (img.width == 0) {
			img.width = "48";
			img.height = "37";
		}
		else {
			img.width -= 2;
			img.height -= 2;
		}
	}
	else {
		img.style.border = "solid 1px gray";
		img.width += 2;
		img.height += 2;
	}
}

var slider;
var sliderParent;
var cancel = false;
var interval;
var marginLeft;
var offsetWidth;
var imageCount = 0;

function MoveLeft(img) {
	InitSlider();
	cancel = false;

	interval = window.setInterval("DoMoveLeft()", 20);
}

function MoveRight(img) {
	InitSlider();
	cancel = false;

	interval = window.setInterval("DoMoveRight()", 20);
}

function DoMoveLeft() {
	var margin = parseInt(slider.style.marginLeft);
	if (!cancel && margin <= marginLeft) {
		slider.style.marginLeft = (margin + 3) + "px";
		document.getElementById("rightimg").src = document.getElementById("rightimg").src.replace("right_scroll_rest.gif", "right_scroll_live.gif"); 
	}
	else if (cancel) {
		window.clearInterval(interval);
	}
	else {
		document.getElementById("leftimg").src = document.getElementById("leftimg").src.replace("left_scroll_live.gif", "left_scroll_rest.gif"); 
	}
}

function DoMoveRight() {
	var margin = parseInt(slider.style.marginLeft);
	if (!cancel && ((imageCount * 76.5) + margin) >= offsetWidth) {
		slider.style.marginLeft = (margin - 3) + "px";
		document.getElementById("leftimg").src = document.getElementById("leftimg").src.replace("left_scroll_rest.gif", "left_scroll_live.gif"); 
	}
	else if (cancel) {
		window.clearInterval(interval);
	}
	else {
		document.getElementById("rightimg").src = document.getElementById("rightimg").src.replace("right_scroll_live.gif", "right_scroll_rest.gif"); 
	}
}

function Cancel() {
	cancel = true;
}

function InitSlider() {
	if (!slider) {
		slider = document.getElementById("slider");
		slider.style.marginLeft = "0px";
		if (!sliderParent) {
			sliderParent = slider.parentElement;
			if (!sliderParent) {
				sliderParent = slider.parentNode;
			}
		}
		
		imageCount = parseInt(slider.getAttribute("count"));
		
		if (!marginLeft) {
			marginLeft = parseInt(slider.style.marginLeft);
		}

		if (!offsetWidth) {
			offsetWidth = 425;
		}
	}
}

/*popup*/
var popup = document.createElement("div");
var delegate_to;
var closediv = null;
var puframe = document.createElement("iframe");
var useIframeOnPopup = false;
function doShowPopup(div, htmlDiv, confirmCallback) {
	if (delegate_to) {
		clearTimeout(delegate_to);
	}
	if (closediv) {
		closediv.onclick();
	}
	
	div.appendChild(popup);
	puframe.style.display = "none";
	div.appendChild(puframe);
	div.delegate = div.onclick;
	div.onclick = null;
	popup.className = "popup regular left";
	popup.innerHTML = "";
	popup.style.display = "";

	var cdiv = document.createElement("div");
	cdiv.className = "right marginbottom"
	//cdiv.width = "70px";
	var close = document.createElement("div");
	close.style.marginTop = "5px";
	//close.style.width = "50px";
	close.className = "left"
	var link = document.createElement("a");
	link.href = "#";
	link.innerHTML = "CLOSE";
	link.style.paddingRight = "10px";
	link.onclick = function() {return false;};
	close.appendChild(link);
	cdiv.appendChild(close);
	var xdiv = document.createElement("div");
	var ximg = document.createElement("img");
	ximg.src = g_imagePath + "x.gif";
	ximg.style.marginTop = "5px";
	ximg.className = "marginright";
	ximg.style.width = "13px";
	ximg.style.height = "15px";
	//xdiv.style.width = "20px";
	xdiv.appendChild(ximg);
	cdiv.appendChild(xdiv);
	cdiv.onclick = function() {
						closePopup(this, setTimeout(function() {div.onclick = div.delegate;}, 50));
					}
	closediv = cdiv;
	popup.appendChild(cdiv);

	//append html here
	popup.appendChild(htmlDiv);

	popup.style.width = "275px";
	
	var tweak = 0;
	if (div.style.width && !document.all) {
		tweak = parseInt(div.style.width);
	}
	else if (!div.style.width) {
		alert("You need to add width to the div in order for the popup to work correctly in FF");
	}
	popup.style.marginLeft = -parseInt(popup.style.width) + tweak + "px";

	//use an iframe on the mylandwatch page for ie6 so the dropdowns don't show through the popup
	if (useIframeOnPopup && document.documentElement.className.indexOf("NotIE7FF") > -1) {
		puframe.style.width = (parseInt(popup.style.width.replace("px", "")) + 2) + "px";
		puframe.style.height = popup.offsetHeight + "px";
		popup.style.height = popup.offsetHeight + "px";
		puframe.style.position = "absolute";
		puframe.style.marginLeft = popup.style.marginLeft;
		puframe.style.marginTop = "17px";
		puframe.style.display = "";
	}
}

function closePopup(div, delegate) {
	popup.style.display = "none";
	puframe.style.display = "none";
	
	if (div) {
		div.style.display = "none";
	}
	if (delegate) {
		delegate_to = delegate;
	}
	else delegate_to = null;
	closediv = null;
	return false;
}

function showPopup(div, title, text, confirmCallback) {
	var container = document.createElement("div");
	if (title) {
		var titleDiv = document.createElement("div");
		titleDiv.className = "clear margin medium bold marginbottom";
		titleDiv.innerHTML= title;
		container.appendChild(titleDiv);
	}
	if (text) {
		var textDiv = document.createElement("div");
		textDiv.innerHTML = text;
		textDiv.className = "clear margin marginright marginbottom";
		container.appendChild(textDiv);
	}
	if (confirmCallback) {
		var confirm = document.createElement("div");
		confirm.className = "margin marginbottom";
		confirm.style.textAlign = "center";
		var yes = document.createElement("img");
		yes.src = g_imagePath + "btn_yes.gif";
		yes.className = "pointer marginright";
		yes.onclick = confirmCallback;
		//yes.style.width = "62px";
		//yes.style.height = "22px";
		var no = document.createElement("img");
		no.className = "pointer";
		no.src = g_imagePath + "btn_no.gif";
		//no.style.width = "62px";
		//no.style.height = "22px";
		no.onclick = function() {
							closePopup(this, setTimeout(function() {div.onclick = div.delegate;}, 50));
						}
		confirm.appendChild(yes);
		//confirm.innerHTML += "&nbsp;";
		confirm.appendChild(no);
		container.appendChild(confirm);
	}
	doShowPopup(div, container, confirmCallback);
}

function showCreditPopup(div, title, link) {
	div.style.width = "41px";
	var container = document.createElement("div");
	if (title) {
		var titleDiv = document.createElement("div");
		titleDiv.className = "clear margin medium bold marginbottom";
		titleDiv.innerHTML= title;
		container.appendChild(titleDiv);
	}
	if (link) {
		var linkA = document.createElement("a");
		linkA.innerText = "View More Photos";
		if (link.indexOf("http://") == -1) {
			link = "http://" + link;
		}
		linkA.href = link;

		var linkDiv = document.createElement("div");
		linkDiv.className = "clear margin marginright marginbottom";
		linkDiv.appendChild(linkA);
		container.appendChild(linkDiv);
	}
	doShowPopup(div, container);
}

var emailDiv;
function showEmailPopup(div, domain, itemid, detailsUrl, emailFrom) {
	emailDiv = div;
	var container = document.createElement("div");

	var errorDiv = document.createElement("div");
	errorDiv.style.fontSize = "11px";
	errorDiv.id = "errormessage";
	errorDiv.className = "alert clear margin";
	container.appendChild(errorDiv);

	var toDiv = document.createElement("div");
	toDiv.className = "clear margin";
	toDiv.innerHTML = "<div class=\"left\" style=\"width:57px;font-size:11px;\">To email:</div><input type=\"text\" style=\"width:190px;\" id=\"emailTo\"/><div class=\"left\" style=\"width:57px;\">&nbsp;</div><div style=\"font-size:10px;\">Separate multiple addresses with commas</div>";
	container.appendChild(toDiv);
	
	var fromDiv = document.createElement("div");
	fromDiv.className = "margin";
	fromDiv.innerHTML = "<div class=\"left\" style=\"width:57px;font-size:11px;\">From email:</div><input type=\"text\" style=\"width:190px;\" id=\"emailFrom\" class=\"disabled\" readonly=\"true\" value=\"" + emailFrom + "\"/>";
	container.appendChild(fromDiv);

	var messageDiv = document.createElement("div");
	messageDiv.className = "margin";
	messageDiv.innerHTML = "<div class=\"left marginright\" style=\"font-size:11px;\">Message:</div><textarea rows=\"8\" style=\"width:190px;\" id=\"emailMessage\"></textarea>";
	container.appendChild(messageDiv);

	var btnDiv = document.createElement("div");
	btnDiv.className = "margin right marginright";
	var sendBtn = document.createElement("a");
	sendBtn.innerHTML = "<img src=\"" + g_imagePath + "btn_send.gif" +"\" />";
	sendBtn.onclick = function() {EmailToFriend(domain, itemid, detailsUrl, document.getElementById('emailTo'), document.getElementById('emailFrom'), document.getElementById('emailMessage'))};
	btnDiv.appendChild(sendBtn);
	
	var cancelBtn = document.createElement("a");
	cancelBtn.innerHTML = "<img src=\"" + g_imagePath + "btn_cancel.gif" +"\" />";
	cancelBtn.onclick = function() {
						closePopup(this, setTimeout(function() {div.onclick = div.delegate;}, 50));
					}
	btnDiv.appendChild(cancelBtn);
	container.appendChild(btnDiv);
	
	var text =  document.createElement("div");
	text.className = "clear margin marginbottom inactive";
	text.innerHTML = "Click <a href=\"/Privacy_Policy\">here</a> to see our privacy policy which describes how " + g_siteName + " collects and uses your personal information.";
	container.appendChild(text);
	
	doShowPopup(div, container, null);
}

function showService(div, name, link, address1, address2, phone, email) {
	div.style.width = "209px";
	var container = document.createElement("div");
	container.className = "clear margin";
	var html = "<div class=\"marginbottom\">";
	if (link) {	
		html += "<a href=\"" + link + "\">" + name + "</a>";
	}
	else html += name;
	html += "<br \>";
	if (address1) {
		html += address1 + "<br \>";
	}
	if (address2) {
		html += address2 + "<br \>";
	}
	if (phone) {
		html += phone + "<br \>";
	}
	if (email) {
		html += "<a href=\"mailto:" + email + "\">" + email + "</a>";
	}
	html += "<br/><br/></div>";
	container.innerHTML = html;

	//var tempDelegate = div.onclick;
	doShowPopup(div, container, null);
	//div.onclick = tempDelegate;
	return false;
}

/*header*/
function activateTabs(tabdiv) {
	tabdiv.src = tabdiv.src.replace("_off.gif", "_hover.gif");
	
	tabdiv.onmouseover = function() { tabdiv.src = tabdiv.src.replace("_off.gif", "_hover.gif"); };
	tabdiv.onmouseout = function() { tabdiv.src = tabdiv.src.replace("_hover.gif", "_off.gif"); };
}

function activateQS(btndiv, ximgsrc) {
	btndiv.onmouseover = null;
	btndiv.onmousedown = function() {
							if (popup) {
								popup.style.display = "none";
							}
							var qsdiv = document.getElementById("qsdisp");
							qsdiv.style.display = "";
							qsdiv.style.top = "146px";
							this.style.display = "none";
							
							var cdiv = document.getElementById("qsclosediv");
							if (cdiv) {
								cdiv.style.display = "";
							}
							else {
								cdiv = document.createElement("div");
								cdiv.id = "qsclosediv";
								//btndiv.className += " left";
								cdiv.className = "left";
								var close = document.createElement("div");
								close.className = "subnav large left"
								close.style.marginTop = "5px";
								var link = document.createElement("a");
								link.href = "#";
								link.innerHTML = "CLOSE";
								close.appendChild(link);
								cdiv.appendChild(close);
								var xdiv = document.createElement("div");
								xdiv.className = "left";
								var ximg = document.createElement("img");
								ximg.src = ximgsrc;
								ximg.style.marginTop = "5px";
								ximg.style.width = "13px";
								ximg.style.height = "15px";
								xdiv.appendChild(ximg);
								ximg.style.paddingLeft = "10px";
								cdiv.appendChild(xdiv);
								cdiv.onclick = function() {
													var qsdiv = document.getElementById("qsdisp");
													btndiv.style.display = "";
													this.style.display = "none";
													qsscrollcont.scrollTop = 8;
							                   	    timeoutqs = setTimeout(function() { qsscrollcont.scrollTop = 8;qsScrollStart(135, -1) }, 0);
						                         }
								GetParent(this).appendChild(cdiv);
							}							
							
							qsscrollcont = document.getElementById("qscont");
							qsscrollcont.scrollTop = 395;
							if(browserAgent != 'FF')
							    timeoutqs = setTimeout(function() { qsscrollcont.scrollTop = 395;qsScrollStart(135, 1) }, 50);
							else
    							qsScrollStart(135, 1);
						};
}



/*QS scroll functions*/
var fftimeoutmult = 1;
var qsscrollcont;
var qsdirection;
var timeoutqs;
function qsScrollEnd(){
    clearTimeout(timeoutqs);
	if (qsscrollcont.scrollTop > 0 && document.documentElement.className.indexOf("Mozilla") > -1) {
		//only on close
	    var qsdiv = document.getElementById("qsdisp");
		qsdiv.style.display = "none";
	}
}

function qsScrollStart(scrollLength, dir)
{   
    if(scrollLength != 0)
    {
        try {
            qsscrollcont.scrollTop = qsscrollcont.scrollTop - scrollLength*dir;
            scrollLength = Math.floor(scrollLength/2);
            clearTimeout(timeoutqs);
            timeoutqs = setTimeout(function() { qsScrollStart(scrollLength, dir) }, 25*fftimeoutmult);
        }
        catch(ex) { qsScrollEnd(); }
    }
    else
        qsScrollEnd();
}

function mapLoaded() {
    var mapFrame = document.getElementById('mapFrame');
    if(mapFrame) {
        mapFrame.style.position = '';
    }
}

/*polls*/
function Vote(pollid, bRequireall) 
{ 	
	var F = eval("document.f" + pollid); 
	var bVoted = false;

	var qstr = "";

	for (var i=0;i<F.elements.length;i++) 
	{
		if (F.elements[i].type=="radio" && F.elements[i].checked) 
		{
			if (qstr != "") qstr += "&";
			qstr += F.elements[i].name +'=' + F.elements[i].value;
			bVoted = true;
		} 
		else if  ((F.elements[i].type=="text" || F.elements[i].type=="hidden") && F.elements[i].value!="") 
		{
			if (qstr != "") qstr += "&";
			qstr += F.elements[i].name +"=" + F.elements[i].value;
		}
	}
	
	if(bRequireall)
	{
		for (var i=0;i<F.elements.length;i++) {
			if(F.elements[i].type=="radio" && -1 == qstr.indexOf(F.elements[i].name +"=")) 
			{
				bVoted = false;
				break;
			}
		}
	}
	
	if (!bVoted && bRequireall) 
	{
		alert(requireallmessage);
	}
	else
	{
		F.submit(); 
	}
}

function Switch(v, r)
{
	var vDiv = document.getElementById(v);
	var rDiv = document.getElementById(r);
	
	/* switch the views*/
	vDiv.style.display = 'none' ;
	rDiv.style.display = '';
} 

function SwitchAndVote(pollid, v, r, bRequireall) 
{ 
	var F = eval("document.f" + pollid); 
	var bVoted = false;

	var qstr = "";
	for (var i=0;i<F.elements.length;i++) 
	{
		if (F.elements[i].type=="radio" && F.elements[i].checked) 
		{
			if (qstr != "") qstr += "&";
			qstr += F.elements[i].name +'=' + F.elements[i].value;
			bVoted = true;
		} 
		else if  ((F.elements[i].type=="text" || F.elements[i].type=="hidden") && F.elements[i].value!="") 
		{
			if (qstr != "") qstr += "&";
			qstr += F.elements[i].name +"=" + F.elements[i].value;
		}
	}
	
	if(bRequireall)
	{
		for (var i=0;i<F.elements.length;i++) {
			if(F.elements[i].type=="radio" && -1 == qstr.indexOf(F.elements[i].name +"=")) 
			{
				bVoted = false;
				break;
			}
		}
	}
	
	if (!bVoted && bRequireall) 
	{
		alert(requireallmessage);
	}
	else
	{
		/* switch the views*/
		var vDiv = document.getElementById(v);
		var rDiv = document.getElementById(r);
		
		vDiv.style.display = 'none' ; 
		rDiv.style.display = '';
		var C = eval("document.p" + pollid);
		C.src = "/vote.ashx?" + qstr
	}
}

/*generic functions*/
function GetParent(element) {
	return element.parentNode;
}

/*ajax functions*/
function SaveMyProp(domain, itemid, div) {
    deleteCookie("uspc");
	ExecuteRequest(domain + "/ws.aspx?key=MYPRP&listid=MYPRP&itemid=" + itemid, function(data) {SaveMyNotCallback(data, div, "Your property was saved.", "Visit the <a href=\"/" + g_myTabName + "\">" + g_myTabName + "</a> page to view all your saved properties.", domain);});
}

function SaveMyNot(domain, search, searchname, div) {
	//alert(domain + "_" + search + "_" + searchname + "_" + div);
	searchname = searchname.replace(/<|>|&/g,'')
	ExecuteRequest(domain + "/ws.aspx?key=MYNOT&listid=MYNOT&search=" + search + "&searchname=" + encodeURIComponent(searchname),  function(data) {SaveMyNotCallback(data, div, "Your search has been saved.", "You will receive email alerts when new listings match your criteria.<br/><br/>To view or edit your saved searches or alerts, visit your <a href=\"/" + g_myTabName + "\">" + g_myTabName + "</a> page.");});
}

function EmailToFriend(domain, itemid, detailsUrl, to, from, message) {
	if (!IsValidMultiEmail(to, 'Please enter a valid email.')) return;
	if (!IsValidLength(to, 0, 250, 'The email addresses may not exceed 250 chars.')) return;
	if (!IsValidLength(message, 0, 500, 'The message may not exceed 500 characters.')) return;
	else {
		ExecuteRequest(domain + "/ws.aspx?key=EMAIL&itemid=" + itemid + "&url=" + encodeURIComponent(domain + detailsUrl) + "&to=" + encodeURIComponent(to.value) + "&from=" + encodeURIComponent(from.value) + "&message=" + encodeURIComponent(message.value), EmailToFriendCallback);
	}
}

function EmailToFriendCallback(data) {
	if (data) {
		closePopup();
		showPopup(emailDiv, null, "Your email has been sent.");
	}
	else {
		var error = document.getElementById("errormessage");
		error.innerText = "An error occurred and your email could not be sent.  Please try again later.";
	}
}

function GetListCount(domain) {
	ExecuteRequest(domain + "/ws.aspx?key=GETLISTCT&listid=MYPRP&rand=" + Math.random()*5 , GetListCountCallback);
}

function GetListCountCallback(data) {
	if(data && data.count) {
		var div = document.getElementById("UserSavedPropertyCount");
		if (div != null)
		    div.innerHTML = data.count +" saved";
	}
}

function GetCounties(domain, atidMatch, host) {
    if(!host || !host.options)
        return;
        
    if(host.options.selectedIndex == 0) { // reset county dropdown to disabled
        ResetCounties();
        return;
    }
    
    var sel = host.options[host.options.selectedIndex];
    if(!sel)
        return;
    var avid = sel.getAttribute('avid');
    var atid = sel.getAttribute('atid');
    if(!avid || atid != atidMatch) {
        ResetCounties();
        return;
    }
    
    ExecuteRequest(domain + "/ws.aspx?key=GETCOUNTIES&state="+avid+"&rand=" + Math.random()*5 , GetCountiesCallback);
}
function ResetCounties() {
    var s = document.getElementById("SearchCounty");
    if(s) {
        s.setAttribute('disabled','disabled');
	    s.options.length = 0;
	    var d = new Option('County', 'County');
	    s.options[s.options.length] = d;
    }
}
function GetCountiesCallback(data) {
	if(data && data.counties) {
		var s = document.getElementById("SearchCounty");
		if(!s || !s.options || s.options.length<1)
		    return;
		    
		s.removeAttribute('disabled');
		s.options.length = 0;
		var d = new Option('City/County', 'City/County');
		s.options[s.options.length] = d;
		    
		for(var i=0;i<data.counties.length;i++) {
		    var c = data.counties[i];
		    var o = new Option(c.name, c.name);
		    o.setAttribute('atid', c.atid);
		    o.setAttribute('avid', c.avid);
		    s.options[s.options.length] = o;
		}
	}
}
function DeleteMyProp(domain, itemid, div) {
	showPopup(div, "Are you sure you want to delete this property?", "Once this property is deleted, you will not be able to recover it.", function() {DoDeleteMyProp(domain, itemid);});
	//ExecuteRequest(domain + "/ws.aspx?key=DELMYLIST&itemid=" + itemid, Refresh);
}

function DoDeleteMyProp(domain, itemid) {
	ExecuteRequest(domain + "/ws.aspx?key=DELMYLIST&itemid=" + itemid, Refresh);
}

function RenewMyProp(domain, itemid) {
	ExecuteRequest(domain + "/ws.aspx?key=RENEWMYLIST&itemid=" + itemid, Refresh);
}

function DeleteMyListItem(domain, key, itemid) {
	if (itemid){
	    deleteCookie("uspc");
		ExecuteRequest(domain + "/ws.aspx?key=DELLIST&listid=" + key + "&itemid=" + itemid, Refresh);
	}
}

function DeleteMyList(domain, key, name, div) {
	showPopup(div, "Are you sure you want to delete these " + name  + "?", null, function() {DoDeleteMyList(domain, key);});
}

function DoDeleteMyList(domain, key) {
	deleteCookie("uspc");
	ExecuteRequest(domain + "/ws.aspx?key=DELLIST&listid=" + key, Refresh);
}

function Refresh() {
	document.location.reload();
}

function SaveMyNotCallback(data, div, title, text, domain) {
	if (data && data.success == "true") {
		showPopup(div, title, text);
		if (domain) {
			GetListCount(domain);
		}
	}
}

function ReassignListings(wsurl, divid, dsc) {
	//document.location = wsurl;
	ExecuteRequest(wsurl, function(data) { ReassignListingsCallback(data, wsurl, divid, dsc); });
}

function ReassignListingsCallback(data, wsurl, divid, dsc) {
	useIframeOnPopup = true;
	var div = document.getElementById(divid);

	if (data && data.success == "true" && data.agents) {
		if (data.agents.length > 0) {
			var container = document.createElement("div");
			var titleDiv = document.createElement("div");
			titleDiv.className = "clear marginleft medium bold marginbottom";
			var textDiv = document.createElement("div");
			textDiv.className = "clear marginleft marginright marginbottom";
			var inputDiv = document.createElement("div");
			inputDiv.className = "clear marginleft marginright marginbottom";

			var errorDiv = document.createElement("div");
			errorDiv.style.fontSize = "11px";
			errorDiv.id = "errormessage";
			errorDiv.className = "alert clear margin marginright";
			container.appendChild(errorDiv);

			if (!dsc || dsc == "null") {
				var hasSUP = false;
				var dscHtml = "";
				var SUPCount = 0;
				if (data.dscs) {
					for (var d = 0; d < data.dscs.length; d++) {
						if (data.dscs[d].dsc == "SUP") {
							hasSUP = true;
							SUPCount = data.dscs[d].number;
						}
						else {
							dscHtml += data.dscs[d].name + " (" + data.dscs[d].number + ")<br/>";
						}
					}
				}

				if (!hasSUP) {
					if (dscHtml != "") {
						//no sup, only feed listings
						showPopup(div, "You currently have no properties to reassign.", "Only properties uploaded through the SecondSpace network of web sites may be reassigned. Currently, you only have listings sourced from a data feed.  Please contact the data feed provider(s) below to reassign these listings:<br/>" + dscHtml);
					}
					else {
						//no listings at all
						showPopup(div, "You currently have no properties to reassign.", "Please upload a property and try again.");
					}
					return;
				}

				//has sup only & has sup and feed
				titleDiv.innerHTML = "Please select the agent you wish to reassign these listings to.";
				if (dscHtml != "") {
					//has sup and feed
					textDiv.innerHTML = "Only properties uploaded through the SecondSpace network of web sites may be reassigned.<br/>";
					textDiv.innerHTML += "<br/>You currently have listing(s) sourced from a data feed.  Please contact the data feed providers below to reassign these listings:<br/>" + dscHtml;
				}
			}
			else if (dsc == "SUP") {
				titleDiv.innerHTML = "Please select an agent to reassign this listing to.";
				textDiv.innerHTML == "<br/>";
			}
			else {
				showPopup(div, "In order to reassign a property you must have at least one agent associated with your office account.", "Please add an agent and try again.");
				return;
			}

			var temp = "<select id=\"reassignDD\"><option>--Select--</option>";
			
			for (var i = 0; i < data.agents.length; i++) {
				temp += "<option uid=\"" + data.agents[i].uid + "\">" + data.agents[i].name + "</option>";
			}
			inputDiv.innerHTML += temp + "</select>";

			container.appendChild(titleDiv);
			container.appendChild(textDiv);
			container.appendChild(inputDiv);

			var confirm = document.createElement("div");
			confirm.className = "margin marginbottom";
			confirm.style.textAlign = "center";
			var yes = document.createElement("img");
			yes.src = g_imagePath + "btn_go.gif";
			yes.className = "pointer marginright";
			yes.onclick = function() {
								if (document.getElementById("reassignDD").selectedIndex == 0) {
									document.getElementById("errormessage").innerHTML = "You must first select an agent from the drop down list.";
								}
								else {
									DoReassignListings(wsurl, divid);
								}
							}
			var no = document.createElement("img");
			no.className = "pointer";
			no.src = g_imagePath + "btn_cancel.gif";
			no.onclick = function() {
								closePopup(this, setTimeout(function() {div.onclick = delegate;}, 50));
							}
			confirm.appendChild(yes);
			confirm.appendChild(no);
			container.appendChild(confirm);

			doShowPopup(div, container, confirm);
		}
		else {
			showPopup(div, "Sorry, but no property can be reassigned.", "In order to reassign a property, you must have at least one more agent in your office.");
		}
	}
	else if (data && data.success == "false") {
		showPopup(div, data.error, null);
	}
}

function DoReassignListings(wsurl, divid) {
	var dd = document.getElementById("reassignDD");
	ExecuteRequest(wsurl.replace("GETREASSIGNLISTINGS", "REASSIGNLISTINGS") + "&newuid=" + dd.options[dd.selectedIndex].getAttribute("uid"), DoReassignListingsCallback);
}

function DoReassignListingsCallback(data) {
	if (data && data.success == "true") {
		Refresh();
	}
	else {
		document.getElementById("errormessage").innerHTML = data.error;
	}
}

/**/
var req;
function ExecuteRequest(url, callbackFn) {
	req = false;
    // branch for native XMLHttpRequest object
    if(window.XMLHttpRequest && !(window.ActiveXObject)) {
	    try {
		    req = new XMLHttpRequest();
        } catch(e) {
		    req = false;
        }
    // branch for IE/Windows ActiveX version
    } else if(window.ActiveXObject) {
   	    try {
    	    req = new ActiveXObject("Msxml2.XMLHTTP");
  	    } catch(e) {
    	    try {
      		    req = new ActiveXObject("Microsoft.XMLHTTP");
    	    } catch(e) {
      		    req = false;
    	    }
	    }
    }
    if(req) {
	    req.onreadystatechange = function() { processReqChange(callbackFn);};
	    req.open("GET", url, true);
	    req.send("");
    }
}

function processReqChange(callbackFn) {
    if (req.readyState == 4) {
        if (req.status == 200) {
            if (req.responseText) {
				callbackFn(eval("(" + req.responseText + ")"));
			}
			else callbackFn(null);
        } else {
            alert("An error occured.  Please try again later.");
            //alert("There was a problem retrieving the XML data:\n" + req.statusText);
        }
    }
}



function fullOffset(obj) {
    var offset =new Object();
    offset.left = 0;
    offset.top = 0;
    
    if(obj.offsetParent) while(true) 
    {
        offset.left += obj.offsetLeft;
        offset.top += obj.offsetTop;
        if(!obj.offsetParent)
            break;
        obj = obj.offsetParent;
    }
    else if(obj.x) {
        offset.left += obj.x;
        offset.top += obj.y;
    }
        
    return offset;
}

var closeDiv = false;
var closeOffsetLeft = 160;
var closeOffsetTop = 20;

function ShowAllRefinements(obj, id) {
    if(!obj) return;
    obj = obj.parentNode;
    CloseAllRefinements();
    var div = document.getElementById('seeAll'+id);
    if(!div) return;
    div.style.display = 'block';
    var offset = fullOffset(obj);
    div.style.top = offset.top +'px';
    div.style.left = (offset.left + obj.offsetWidth) +'px';
    obj.style.borderBottom = 'solid 2px #854135';
    
    if(div.offsetHeight > 260) {
        div.style.height = '234px';
        div.overflowY = 'scroll';
    }
    
    if(!closeDiv)
        closeDiv = document.getElementById('seeAllClose');
        
    if(closeDiv) {
        closeDiv.style.top = (offset.top - closeOffsetTop) +'px';;
        closeDiv.style.left = (offset.left + obj.offsetWidth + closeOffsetLeft) +'px';
    }
}
function CloseAllRefinements() {
    for(var i=0;i<10;i++) 
    {   
        var div = document.getElementById('seeAll'+i);
        if(div) div.style.display='none';
        div = document.getElementById('seeAllLink'+i);
        if(div) div.style.borderBottom = 'solid 0px #FFF';
    }
    if(closeDiv)
        closeDiv.style.top = '-30px';;
}

var mapHighlightImg;
var mapHighlightImgHost;
var mapHighlightWidth;
var mapHighlightHeight;
var mapShouldHide = false;
var mapNameToLink = new Array();
var mapCurrentLink = false;
var mapDebug;

var InitializeMapTries = 20;
function TryInitializeMap() {
    InitializeMapTries--;
    if(InitializeMapTries > 0)
        setTimeout('InitializeMap()', 100);
}

function InitializeMap() {
    mapHighlightImg = document.getElementById('refinementMapHighlight');
    if(!mapHighlightImg) {
        TryInitializeMap();
        return;
    }
    
    mapHighlightImgHost = document.getElementById('refinementMapHighlightHost');
    if(!mapHighlightImgHost) {
        TryInitializeMap();
        return;
    }
    
    var htmlarea = document.getElementById('mapHtmlArea');
    if(!htmlarea) {
        TryInitializeMap();
        return;
    }
    var mapHost = document.getElementById('refinementMapArea');
    if(!mapHost) {
        TryInitializeMap();
        return;
    }
    mapHighlightWidth = mapHost.offsetWidth;
    mapHighlightHeight = mapHost.offsetHeight;
    if(mapHighlightWidth == 0) {
        TryInitializeMap();
        return;
    }
    
    var matches = new Array();
    var states = document.getElementsByTagName('A');
    var i=0;
    for(i=0;i<states.length;i++)
    {
        var stateName = states[i].getAttribute('mapId');
        if(!stateName)
            continue;
        if(mapNameToLink[stateName])
            mapNameToLink[stateName].duped = states[i];
        else
            mapNameToLink[stateName] = states[i];
    }
    
    var a = htmlarea.getElementsByTagName('area');
    for(i=0;i<a.length;i++)
    {
        var id = a[i].getAttribute('state');
        var alt = a[i].getAttribute('alt');
        if(!alt)
            continue;
        alt = alt.replace(' land for sale', '');
        a[i].setAttribute('alt', alt);
        var sprite = a[i].getAttribute('sprite');
        var link = mapNameToLink[alt];
        if(!link) { 
            a[i].removeAttribute('href');
            a[i].style.cursor = 'default';
            continue;
        }
        a[i].setAttribute('href', link.getAttribute('href'));
        addEvent(a[i], 'mouseover', new Function( 'mapHighlightState(\''+alt+'\', \''+sprite+'\')' ));
        addEvent(a[i], 'mouseout', new Function('mapShouldHide=true;'));
        addEvent(link, 'mouseover', new Function( 'mapHighlightState(\''+alt+'\', \''+sprite+'\')' ));
        addEvent(link, 'mouseout', new Function('mapShouldHide=true;'));
        if(link.duped) {
            addEvent(link.duped, 'mouseover', new Function( 'mapHighlightState(\''+alt+'\', \''+sprite+'\')' ));
            addEvent(link.duped, 'mouseout', new Function('mapShouldHide=true;'));
        }
    }
    
    mapHideHighlight();
}
function mapHighlightState(name, sprite)
{
    if(mapCurrentLink) 
    {
        mapCurrentLink.style.textDecoration = '';
        if(mapCurrentLink.duped)
            mapCurrentLink.duped.style.textDecoration = '';
    }
    var link = mapNameToLink[name];
    if(!link) { // hide current
        mapCurrentLink = false;
        mapHighlightImgHost.style.left = mapHighlightWidth+'px';
        return;
    }
    
    mapCurrentLink = link;
    mapShouldHide = false;
    mapCurrentLink.style.textDecoration = 'underline';
    if(mapCurrentLink.duped)
        mapCurrentLink.duped.style.textDecoration = 'underline';
        
    if (typeof sprite == "string" && sprite.length > 0 && sprite != 'null') {
        var s = sprite.split(',');
        
        // position enclosing div on top of the state
        mapHighlightImgHost.style.left = s[0]+'px';
        mapHighlightImgHost.style.top = s[1]+'px';
        mapHighlightImgHost.style.width = s[2]+'px';
        mapHighlightImgHost.style.height = s[3]+'px';
        
        // position inside image on the current state
        mapHighlightImg.style.left = '-'+(s[4])+'px';
        mapHighlightImg.style.top= '-'+s[5]+'px';
   }
}
   
function mapHideHighlight(){
    if(mapShouldHide)  {
        mapHighlightState('', -1); 
        mapShouldHide = false;
        if(mapCurrentLink) {
            mapCurrentLink.style.textDecoration = '';
            if(mapCurrentLink.duped)
                mapCurrentLink.duped.style.textDecoration = '';
        }
    }
    setTimeout('mapHideHighlight()', 50);
}


// lead multiplier page

function RequestPropertyInfo(pid, instId, tCode)
{
    var frame = document.getElementById('request_info');
    var form = window.frames['request_info'].document.forms[0];
    
    form.Pid.value = pid;
    form.InstanceId.value = instId;
    form.Tcode.value = tCode;
    var wnd = frame.contentWindow;
    wnd.RequestInfo();
}
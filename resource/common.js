var ajaxhttp = new $getHTTPObject();
var ajaxhttp1 = new $getHTTPObject();
var ajaxhttp2 = new $getHTTPObject();
var glbcitydiv='',glblocdiv='';
var emailerr = 0;
var validuseremail = '';

function $getHTTPObject() {
	var xmlhttp; try { xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");  } catch (e) { try { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { xmlhttp=false; } } 
	if(!xmlhttp && typeof XMLHttpRequest !=undefined) { try { xmlhttp=new XMLHttpRequest(); } catch (e) { xmlhttp=false; } }
	if(!xmlhttp) { display_errmsg(e,"noajax"); return; } else { return xmlhttp; }
}

// the bellow function has to move in common  js
function $(obj) {
   if(document.getElementById) {
        if(document.getElementById(obj)!=null) {
            return document.getElementById(obj)
        } else {
           return "";
       }
    } else if(document.all) {
        if(document.all[obj]!=null) {
            return document.all[obj]
        } else  {
          return "";
       }
    }
} 

function $_obj(obj) {
   if(document.getElementById) {
        if(document.getElementById(obj)!=null) {
            return document.getElementById(obj)
        } else {
           return "";
       }
    } else if(document.all) {
        if(document.all[obj]!=null) {
            return document.all[obj]
        } else  {
          return "";
       }
    }
} 

function uncache(url) { var d=new Date(); return url+"&time="+d.getTime(); }

function IsEmpty(obj, obj_type)
{ 
	if (obj_type == "text" || obj_type == "password" || obj_type == "textarea" || obj_type == "file")	{
		var objValue;
		objValue = obj.value.replace(/\s+$/,"");
		if (objValue.length == 0 || objValue=='Email ID') {
			return true;
		} else {
			return false;
		}
	} else if (obj_type == "select" || obj_type == "select-one") {
		for (i=0; i < obj.length; i++) {
			if (obj.options[i].selected) 
				{
					if(obj.options[i].value==" ") 
					{return true;obj.focus();} //else {return false;}					
					else if(obj.options[i].value == "0") 
					{
						if(obj.options[i].seletedIndex == "0") 
						{return true;obj.focus();}
					} else {return false;}
				}
			
		}
		return true;	
	} else if (obj_type == "radio" || obj_type == "checkbox") {
		if (!obj[0] && obj) {
			if (obj.checked) {
				return false;
			} else {
				return true;	
			}
		} else {
			for (i=0; i < obj.length; i++) {
				if (obj[i].checked) {
					return false;
				}
			}
			return true;
		}
	} else {
		return false;
	}
}
function IsNumeric(strString)
{
   var strValidChars = "0123456789.";
   var strChar;
   var blnResult = true;
   if (strString.length == 0) return false;   
   for (i = 0; i < strString.length && blnResult == true; i++)
   {
      strChar = strString.charAt(i);
      if (strValidChars.indexOf(strChar) == -1)
         {
         blnResult = false;
         }
      }
   return blnResult;
}
function getCheckedValue(radioObj) {	
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function validateemail(obj,obj_type,error_id,submitType,tofocus){

	if(IsEmpty(obj,obj_type)) {

		printError(error_id,"Please enter Email","block",obj,tofocus);
	    return false;

	} else {

		//var funRegExp = new RegExp("^[A-Za-z0-9][A-Za-z0-9_\\.\-]*\\@[a-zA-Z0-9\-]+\\.[a-zA-Z]+[\\.]?[a-zA-Z]*$");

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if(reg.test(obj.value) == false) {

			///if (!obj.value.match(funRegExp)) { 
			printError(error_id,"Please enter valid Email","block",obj,tofocus);
			return false;

		}else{

			if(submitType==1){ // checks realemail only

				if(emailerr==0 || (emailerr==1 && validuseremail != obj.value)){

					printError(error_id,"Checking email id...","block",obj,tofocus);

					var requrl='/ajax/ajaxresponse.php?type=realemail&fieldname='+obj.value+'&realemail=0';

					ajaxhttp1.open('POST',uncache(requrl),true);
					ajaxhttp1.send(null); 

					ajaxhttp1.onreadystatechange= function(){
						if(ajaxhttp1.readyState==4){
							if(ajaxhttp1.status==200){	
								if(ajaxhttp1.responseText==1 || ajaxhttp1.responseText==3){
									printError(error_id,"","none",obj,tofocus);
									emailerr = 1;
									validuseremail = obj.value;
									//Jsg_req=0;
								}else if(ajaxhttp1.responseText==2){
									printError(error_id,"You have not given valid email. Please enter valid email ID!","block",obj,0);
									emailerr = 1;
									validuseremail = obj.value;
									//Jsg_req=0;
									return true;
								}


							}
						
						}
					}
				}

			}else if(submitType==2){ // checks realemail and email available

				if(emailerr==0 || (emailerr==1 && validuseremail != obj.value)){


					printError(error_id,"Checking email id...","block",obj,tofocus);

					var requrl='/ajax/ajaxresponse.php?type=realemail&fieldname='+obj.value+'&realemail=1';

					ajaxhttp1.open('POST',uncache(requrl),true);
					ajaxhttp1.send(null); 
					//Jsg_req=1;

					ajaxhttp1.onreadystatechange= function(){
						// We still need to write some code here
						
						if(ajaxhttp1.readyState==4) {
							if(ajaxhttp1.status==200) {	
								if(ajaxhttp1.responseText==1){
									printError(error_id,"","none",obj,tofocus);
									emailerr = 1;
									validuseremail = obj.value;
									//Jsg_req=0;
								}else if(ajaxhttp1.responseText==2){
									//$(error_id).innerHTML = "You have not given valid email. Please enter valid email id!";
									printError(error_id,"You have not given valid email. Please enter valid email ID!","block",obj,0);
									emailerr = 1;
									validuseremail = obj.value;
									//Jsg_req=0;
									return true;
								}else{
									printError(error_id,"Email ID is already exists. Please try another email ID!","block",obj,0);
									emailerr = 1;
									validuseremail = obj.value;
									return false;
								}
							}
						
						}
					}
				}

			}else{
				printError(error_id,"","none",obj,tofocus);
				Jsg_req=0;
			}

			// real email and email available validation ends here

			return true;
		}

	}

	 return false;
}

function printError(errorDivId,innerHtmlValue,displayType,fieldId,tofocus,moberror){
	tofocus = (tofocus == 1)?1:'';
	if($(errorDivId)){
	$(errorDivId).style.display = displayType;
	$(errorDivId).innerHTML     = innerHtmlValue;
		if(fieldId!=""){
			if(innerHtmlValue!=""){
				if(tofocus==1){
					fieldId.focus();
				}
				fieldId.className = "error "+moberror;
				return false;
			}else if(innerHtmlValue==""){
				fieldId.className = "valid "+moberror;
				return true;
			}
		}
	}
}

function clearError(divId){
	if($(divId)){
		$(divId).innerHTML = '';
	}
}

/*function printError(errorDivId,innerHtmlValue,displayType,fieldId,tofocus){
	if($(errorDivId)){
		$(errorDivId).style.display = displayType;
		$(errorDivId).innerHTML     = innerHtmlValue;
		if(tofocus==1){
			if((fieldId) && (innerHtmlValue!="") && (fieldId != '')){
				fieldId.focus();
				fieldId.className = "error";
			}else if(innerHtmlValue==""){
				fieldId.className = "valid";
			}
		}
	}
}*/

function validateselect(obj){
	if(obj.selectedIndex == 0) {
		return true;
	} else {
		return false;
	}
}

function isInteger(s){
	var i;
	s = s.toString();
	for (i = 0; i < s.length; i++){
		var c = s.charAt(i);
		if (isNaN(c)){
			return false;
		}
	}
	return true;
}

function onlyNumbers(evt)
{
	var e = evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;
	if (charCode > 31 && ((charCode != 44 && charCode != 46 && charCode < 48) || charCode > 57))
		return false;

	return true;
}

function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.innerHTML = limitNum - limitField.value.length;
	}
}

function showPage(link_href,link_obj, ajax_paginate_div, page_no)
{
	$(ajax_paginate_div).innerHTML="<br/><center><img src='http://imgs.indiaproperty.com/images/ajax-loader.gif'></center>";
	if($(ajax_paginate_div+'_page_'+page_no))
	{
		$(ajax_paginate_div).innerHTML = $(ajax_paginate_div+'_page_'+page_no).innerHTML;
	} else if (ajaxhttp && link_href) {
		ajaxhttp.open("GET", link_href);
		ajaxhttp.onreadystatechange=function()
		{
			if (ajaxhttp.readyState==4)
			{
				$(ajax_paginate_div).innerHTML = ajaxhttp.responseText;
				var newdiv = document.createElement('div');
				newdiv.setAttribute('id',ajax_paginate_div+'_page_'+page_no);
				newdiv.setAttribute('style','display:none');
				//for IE style pbm
				newdiv.style.cssText = 'display:none;';
				newdiv.innerHTML =ajaxhttp.responseText;
				if($(ajax_paginate_div+'_cache'))
				{	
					$(ajax_paginate_div+'_cache').appendChild(newdiv);
				} else {
					var cachediv = document.createElement('div');
					cachediv.setAttribute('id',ajax_paginate_div+'_cache');
					cachediv.setAttribute('style','display:none;');
					//for IE style pbm
					cachediv.style.cssText = 'display:none;';
					document.body.appendChild(cachediv);
					$(ajax_paginate_div+'_cache').appendChild(newdiv);					
				}
			}
		}
		ajaxhttp.send(null);
	}
	return false;
}

function $genNumbers() { var i, rannum; for(i=1000000; i < 1000010; i++) { rannum=Math.random()*1000000; rannum=Math.round(rannum); } return "a"+rannum+"s"; }

function CheckAll(onclickchk,selectchk)
{
		if(onclickchk.checked==true){
			for (i = 0; i < selectchk.length; i++)
			selectchk[i].checked = true ;
			}else{

			for (i = 0; i < selectchk.length; i++)
			selectchk[i].checked = false ;
			}
}

function validateCity(obj,DivId, tofocus){
	if(IsEmpty(obj,'select')){
		printError(DivId,'Please select a City','block',obj,tofocus);
		return false;
	}else{
		printError(DivId, '','none',obj,tofocus);
		return true;
	}
}

function validateLocality(obj,DivId,tofocus){
	($('Div_property_localityothers'))?$('Div_property_localityothers').innerHTML = '':'';
	if($('Div_property_localityothers'))
		$('Div_property_localityothers').style.display = 'none';
	if(IsEmpty(obj,'select')){
		printError(DivId, 'Please select a Locality','block',obj,tofocus);
		return false;
	}else{
		printError(DivId, '','none',obj,tofocus);
	}
}

function srctrim(str, chars) {
return srcltrim(srcrtrim(str, chars), chars);
}

function srcltrim(str, chars) {
chars = chars || "\\s";
return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function srcrtrim(str, chars) {
chars = chars || "\\s";
return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function findPosX(obj)
{
 var curleft = 0;
 if(obj.offsetParent)
 while(1) 
 {
  curleft += obj.offsetLeft;
  if(!obj.offsetParent)break;
  obj = obj.offsetParent;
  }
  else if(obj.x)
  curleft += obj.x;
  return curleft;
}

function findPosY(obj)
{
 var curtop = 0;
 if(obj.offsetParent)
 while(1)
 {
	curtop += obj.offsetTop;
    if(!obj.offsetParent)break;
    obj = obj.offsetParent;
  }
  else if(obj.y)curtop += obj.y;
  return curtop;
}

function show_vcard(vcardid){
	if(prevcardid!='') { if($(prevcardid)) { $(prevcardid).style.display='none'; } }
	$('vcard_'+vcardid).style.display='block';
	var x=$("vicon_"+vcardid);//alert(x);
	var f_more_top=findPosY(x);//alert(f_more_top);
	var f_more_left=findPosX(x);//alert(f_more_left);
	$('vcard_'+vcardid).style.top=f_more_top+15+"px";
	//$('vcard_'+vcardid).style.left=f_more_left+"px";
	$('vcard_'+vcardid).style.left=(f_more_left+450)/2+"px";
	prevcardid='vcard_'+vcardid;
}

function validateContactNumber(countrycode,areacode,areacodeID,landline,mobilenumber,phoneErrorDiv,mobileErrorDiv,tofocus){

	if(areacode.value =="" && landline.value =="" && mobilenumber.value ==""){
		mobilevalidate(mobilenumber,countrycode,mobileErrorDiv,tofocus);
		areacodevalidate(areacode,landline,countrycode,phoneErrorDiv,tofocus);
		phonevalidate(landline,countrycode,areacodeID,phoneErrorDiv,tofocus);
		return false;
	}

	if(mobilenumber.value != ""){
		if(!mobilevalidate(mobilenumber,countrycode,mobileErrorDiv,tofocus)){
			return false;
		} else {
			phoneno_err_id  = phoneErrorDiv;
			printError(phoneno_err_id,'','none',areacode,'');
			printError(phoneno_err_id,'','none',landline,'');
		}
	}

	if(areacode.value != "" || landline.value != ""){ 
		if(!areacodevalidate(areacode,landline,countrycode,phoneErrorDiv,tofocus) || !phonevalidate(landline,countrycode,areacodeID,phoneErrorDiv,tofocus)){
			return false;
		} else {
			printError(mobileErrorDiv,'','none',mobilenumber,'');
		}
	}
	return true;
}
function compareDates(CtrlSDate, CtrlEDate, DSepartor, end_date_error_div, error)
{
	var SDate = CtrlSDate.value;        
	var EDate =  CtrlEDate.value;
	 
	var SDateArray = SDate.split(DSepartor);
	var EDateArray = EDate.split(DSepartor);            
	var SDateFull=SDateArray[1] + DSepartor + SDateArray[2] + DSepartor +SDateArray[0];           
	var EDateFull=EDateArray[1] + DSepartor + EDateArray[2] + DSepartor +EDateArray[0];     
 
	var startDate = new Date(SDateFull);
	var endDate = new Date(EDateFull);
	if(SDate != '' && EDate != '' && startDate > endDate)
	{				
		printError(end_date_error_div, error, 'block', CtrlEDate);
		return false;
	} else {
		printError(end_date_error_div, '', 'none', CtrlEDate);
	}
	return true;  
}

function validateminipostrequirement(obj,type){
	
	var exp = (/^(9|8|7|6|5|4|3|2|1)[0-9]+$/);
	if(type=='post'){
		if(IsEmpty(obj.minformstrmobile) || obj.minformstrmobile.value=='Enter Mobile No'){
			printError('divmobileerror','Please Enter Mobile No','block',obj.minformstrmobile);
			document.minirequirement.minformstrmobile.focus();
			return false;

		}
		if (exp.test(obj.minformstrmobile.value) != true) {
			 printError('divmobileerror',"Please enter a valid mobile number.","block",obj.minformstrmobile);
			 document.minirequirement.minformstrmobile.focus();
			 return false;
		}
	}
	else{
		if(obj.value=='Enter Mobile No'){
			printError('divmobileerror','Please Enter Mobile No','block',obj);
			//document.minirequirement.minformstrmobile.focus();
			return false;

		}
		else if(exp.test(obj.value) != true){
			
				 printError('divmobileerror',"Please enter a valid mobile number.","block",obj.minformstrmobile);
				 //document.minirequirement.minformstrmobile.focus();
				 return false;
		}
		else
			printError('divmobileerror','','none',obj);
	}
	
}
/*Get cookie value*/
function GetCookie(name)
{
var cname = name + "=";
var dc = document.cookie;
	if (dc.length > 0)
	{ 
		begin = parseInt(dc.indexOf(cname));
		if (begin >= 0)
		{
			begin += cname.length;
			end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
			return unescape(dc.substring(begin, end));
		}
	}
return null;
}

function Decode_it(encoded) {
	try{ if(encoded!='' && encoded!=undefined) {
	var HEXCHARS="0123456789ABCDEFabcdef"; var plaintext=''; var i=0;
	while (i < encoded.length) {
		var ch=encoded.charAt(i);
		if(ch=="+") { plaintext+=" "; i++; } 
		else if(ch=="%") {
			if(i < (encoded.length-2) && HEXCHARS.indexOf(encoded.charAt(i+1)) !=-1 && HEXCHARS.indexOf(encoded.charAt(i+2)) !=-1) {
				plaintext+=unescape(encoded.substr(i,3)); i+=3;
			} else { plaintext+="%[ERROR]"; i++; }
		} else { plaintext+=ch; i++; }
	} return plaintext;
	} } catch(e) { }
}

var loguserid="";
var logininfo=GetCookie("LoginInfo");
if(logininfo!="" && logininfo!=null && logininfo!="NULL"){
	var memdetails=logininfo.split('^|');
	loguserid=memdetails[0];
}

function checkLogin(){
	if(loguserid!=""){
		$('div_ip_username').innerHTML="";
		$('logoutdivdisp').style.display='block';
		$('logoutdivdisp').innerHTML='<div class="fleft paddlr5"><span class="mediumtxt  clr5"><b>Welcome</b> '+Decode_it(memdetails[3])+'!</span></div><dd>&nbsp;<a target="_top" href="/myproperties/myproperties.php"><b>My Home</b></a>|</dd><dd>&nbsp;<a target="_top" href="/login/logout.php"><b>Logout</b></a>|</dd>';
	}
}

function Get_Cookie( check_name ) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );

		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
}


function getCookie(c_name) {
       var i,x,y,ARRcookies=document.cookie.split(";");
       for (i=0;i<ARRcookies.length;i++) {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
		 return unescape(y);
		}
      }
	}

function surveyquestions(custId,Pid) {	
    
	            if(getCookie('SFlag')=='0') {	
				j("#popupquestions").colorbox({iframe:true, innerWidth:750, innerHeight:400,opacity:0.60,open:true,href:"http://cdp.indiaproperty.com/resolve.php?from=enquiry&custId="+custId+"&PropertyId="+Pid});
				j("#cboxClose").show();				
			  }
	}

function cdpTrackSource(type) {
 var custId='';
 if(getCookie('CustId')){
   custId=getCookie('CustId'); 	
 }
 var arrString="";
 var StringArray=Array();
 if(custId!="") {
	if(type=="PageView") {
	 arrString=document.getElementById('hdnPageView').value;	
	}
	if(type=="EmailSms") {
	 arrString=document.getElementById('hdnEmailSms').value;	
	}
	if(type=="ClicktoCall") {
	 arrString=document.getElementById('hdnClicktoCall').value;	
	}
	if(type=="PlanSiteVisit") {
	 arrString=document.getElementById('hdnPlanSiteVisit').value;	
	}
	if(type=="ViewContact") {
	 arrString=document.getElementById('hdnViewContact').value;	
	}
	if(type=="ClickGallery") {
	 arrString=document.getElementById('hdnClickGallery').value;	
	}
	if(type=="ClickMap") {
	 arrString=document.getElementById('hdnClickMap').value;	
	}
	if(type=="ClickImage") {
	 arrString=document.getElementById('hdnClickImage').value;	
	}
	if(type=="ClickCurrentStatus") {
	 arrString=document.getElementById('hdnClickCurrentStatus').value;	
	}
	if(type=="ClickFloorPlans") {
	 arrString=document.getElementById('hdnClickFloorPlans').value;	
	}
	if(type=="ClickLayoutPlan") {
	 arrString=document.getElementById('hdnClickLayoutPlan').value;	
	}
	
	if(arrString!="")
	{
		var href = window.location.host;
		StringArray = arrString.split('~');	
		requrl='ajax/ajaxtrackreport.php';
		param ='type='+StringArray[0]+'&property='+StringArray[1]+'&custId='+custId+'&refurl='+StringArray[2]+'&pgname='+StringArray[3]+'&sysip='+StringArray[4];
		getAjaxRes(requrl,param,'');
		return false;			
	}
      
 
  }
}

function openTermsPopup(){
	var j = jQuery.noConflict() ;
	j("#termscondbox").colorbox({open:true,opacity:0.60,href:"/termsandcondition.php"});
}

function openTermsPopupenq(){
	var j = jQuery.noConflict() ;
	j("#termscondboxenq").colorbox({iframe:true,open:true,innerWidth:450,innerHeight:150,opacity:0.60,href:"/termsandcondition.php"});
}

function openTermsPopupwindow()
{
    mywindow = window.open("http://www.indiaproperty.com/termsandcondition-enquiry.html", "Terms and Conditions - Properties &amp; Real Estate in India - India Property Portal", 'height=300,width=350,left=10,top=10,resizable=yes,scrollbars=yes');
	return true;
}

function PropertyAlertPopup(ptype,pcity,pprice,pbedroom,plocality,pstate,psearchtype) {
	var stppopup = getCookie('popupstp');

	if(stppopup != 1) {
		if(getCookie('prop_alert')!='yes') {	
			var j = jQuery.noConflict() ;	   
			if(!j("#strname").is(":visible"))
			{
			 var hostname = window.location.host;	   
			 
	j('#propertyalertpop').colorbox({innerWidth:775,innerHeight:320,open:true,opacity:0.60,href:"http://"+hostname+"/propertyalert/propertyalertpopup.php?ptype="+ptype+"&pcity="+pcity+"&pprice="+pprice+"&pbedroom="+pbedroom+"&plocality="+plocality+"&pstate="+pstate+"&psearchtype="+psearchtype});
			 
			}     
		}
	}
}
	


//Added for property alert
function loadclustercities(){
	var j=jQuery.noConflict();	
	j('#req-city').html('Loading...');	
	j.ajax({
	  type: "POST", url: 'http://www.indiaproperty.com/propertyalert/ajaxformfield.php', data: "type=allcity",
	  complete: function(data){	          
		  var homecityarr=data.responseText.split("~");
		  j('#req-city').html(homecityarr[1]);	
		  
	  }
	});
}

function showRequirementForm()
{
       var j=jQuery.noConflict();	
       if(j(".RequirementForm").is(":visible"))
       j(".RequirementForm").hide();
       else
       j(".RequirementForm").show();
       
}

/*Define Mobile text Length*/
function changeMobileLength(cval,classname,ClassId)
{
var j=jQuery.noConflict();
	if(cval==1){
		j('.'+classname).attr('maxlength','10');
		j('.'+classname).attr('value','Mobile');
		if(typeof ClassId!="undefined"){
		j("."+ClassId).show();
		}		
		funcresizelightbox();
	}else{
		j('.'+classname).attr('maxlength','12');
		j('.'+classname).attr('value','Mobile');
		if(typeof ClassId!="undefined"){
		j("."+ClassId).hide();
		}		
	}
}
function chkDefaulOption(formname){
if(formname=="ip_enquiry")
document.ip_enquiry.enqopt[0].checked=true;
else if(formname=="enquiryfrm2")
document.enquiryfrm2.enqopt[0].checked=true;
else if(formname=="enquiryfrm")
document.enquiryfrm.enqopt[0].checked=true;
}
/*Define Mobile text Length*/
/* FOR DYNAMIC POP UP WINDOW*/
function dynamic_popup(url,w,h,s,r) {
 var dyn_pop=window.open(url, "","top=200,left=200,width="+w+",height="+h+",resizable=no,toolbar=no,location=no, directories=no,status=no,menubar=no,scrollbars=yes;");
 dyn_pop.focus();
}
 
function dynamic_popupnew(url,w,h,s,r) {
 var dyn_pop=window.open(url, "","top=200,left=200,width="+w+",height="+h+",resizable=no,toolbar=no,location=no, directories=no,status=no,menubar=no,scrollbars=1;");
 dyn_pop.focus();
}


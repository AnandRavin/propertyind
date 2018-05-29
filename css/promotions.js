
var testspacer_file="http://property.magicbricks.com/magic_js/close1.png";
var testshk_file="http://property.magicbricks.com/prop-shosh/randommovie_010610.swf";


var rightPosi;

function review(pageN, campaign){
//var strFeatures = 'width=' + w + ', height=' + h + ', status=0, menubar=0, toolbar=0, scrollbars=' + s + ', dialog=1';
var page='/bricks/campaign.html?pageName=http://property.magicbricks.com/microsite/'+pageN+'&campaignCode='+campaign;
//var winX = window.open(toWhere, "NewWin", strFeatures);
window.open(page);

}
function reviewdirect(pageN, campaign){
//var strFeatures = 'width=' + w + ', height=' + h + ', status=0, menubar=0, toolbar=0, scrollbars=' + s + ', dialog=1';
var page='/bricks/campaign.html?pageName=http://'+pageN+'&campaignCode='+campaign;
//var winX = window.open(toWhere, "NewWin", strFeatures);
window.open(page);

}



if (screen.width <900)

{          

			rightPosi  = "170px";                       

}

if (screen.width >900)

{          

			rightPosi  = "170px";

}



function isNS4()

{

			return (document.layers);

}          

function isIE()

{

			return (document.all);

}

function isNS6()

{

			return (!document.all && document.getElementById)

}          

function showLayerrr()

{

			if (isNS4())

			{
			 // document.layerClos.left=screen.width-555;

			  document.layerSho.visibility="show";

		  document.layerClos.visibility="show";

			}

			if (isNS6())

			{
					//	  document.getElementById("layerClos").style.left=screen.width-555;

						  document.getElementById("layerSho").style.visibility="visible";

					  document.getElementById("layerClos").style.visibility="visible";

			}

			if (isIE())

			{
					//	  document.all.layerClos.style.left=screen.width-555;

						  document.all.layerSho.style.visibility="visible";

				  document.all.layerClos.style.visibility="visible";
			}

}



function hideLayerrr()

{
			 if (isNS4())

			 {

						  document.layerSho.visibility="hide";

						  document.layerClos.visibility="hide";

			 }

			 if (isNS6())

			 {

						  document.getElementById("layerSho").style.visibility="hidden";

						  document.getElementById("layerClos").style.visibility="hidden";

			 }

			  if (isIE())
			 {
			 document.getElementById("layerSho").style.visibility="hidden";

		document.getElementById("layerClos").style.visibility="hidden";
			 }

			
 }


function ssklll()

{
			 showLayerrr();

			 setTimeout("hideLayerrr();",15000);

}

 document.write("<div id=\"layerSho\" style=\"position:absolute; right:"+rightPosi+"; top:350px; width:630px; height:210px; z-index:0; visibility: hidden;\"> ");

 document.write(" <object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"630\" height=\"215\">");

 document.write(" <param name=\"movie\" value=\""+testshk_file+"\">");

 document.write(" <param name=\"quality\" value=\"high\">");

document.write(" <param name=\"wmode\" value=\"transparent\">");


 document.write(" <embed src=\""+testshk_file+"\" width=\"630\" height=\"215\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" ></embed></object>");

 document.write("</div>");

 document.write("<div id=\"layerClos\" style=\"position:absolute; right:172px; top:334px; width:81px; height:16px; z-index:10; visibility: hidden;\"><img onClick=\"hideLayerrr()\" src=\""+testspacer_file+"\" border=\"0\" style=\"cursor:hand; cursor: pointer;\"></div>");


ssklll();

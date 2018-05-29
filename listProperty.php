<?php 
error_reporting(E_ERROR | E_PARSE);

if (isset($_REQUEST["submit"]))
{	 // get data that sent from form
$login = $_POST['user_id'];
$property_name=$_POST['propertyName'];
$contact_numbers=$_POST['contactNumbers'];
$property_type=$_POST['property_type'];

$country=$_POST['country'];
$state=$_POST['state'];
$locality=$_POST['locality'];
$city=$_POST['city'];
$address=$_POST['address'];
$bedrooms=$_POST['bedrooms'];
$coveredArea=$_POST['coveredArea'];
$plotArea=$_POST['plotArea'];
$landAreaType=$_POST['landAreaType'];
$totalPrice=$_POST['totalPrice'];

$unitsAvailable=$_POST['unitsAvailable'];
$amenity=$_POST['amenity'];
$propertyDescription=$_POST['amenity'];
$property_availability=$_POST['property_availability'];


//echo "Inside POST Method ";

$db2->Database = "propert1_propertyindia";
$db2->User     = "propert1_admin";
$db2->Password = "propertyindia123";
$db2->Host     = "localhost";
$host="localhost"; // Host name
$username="propert1_admin"; // Mysql username
$password="propertyindia123"; // Mysql password
$db_name="propert1_propertyindia"; // Database name
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");


$sql="INSERT INTO property (user_id, propertyName, contactNumbers, property_type, property_availability, country, state, locality, city, address, bedrooms,  coveredArea, plotArea, totalPrice,  transactionType,unitsAvailable,  amenity, propertyDescription) 
VALUES ('$login', '$property_name', '$contact_numbers','$property_type','$property_availability','$country', '$state', '$locality', '$city', '$address', '$bedrooms', '$coveredArea', '$plotArea', '$totalPrice',  '$transactionType', '$unitsAvailable', '$amenity',  '$propertyDescription' )";
echo $sql;
mysql_query($sql) 
or die(mysql_error()); 
//$result=mysql_query($sql);

//if($result){
echo "Posted Successfully<BR>";
//}
 mysql_close();
}

?>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Search for Properties, Real Estates, Residential, Commercial Property India</title>
<meta name="description" content="Search for properties, residential plot, house, multistorey apartment, flats, builder apartment, villa,propertyindia, propertyind.com">
<meta name="keywords" content="search property, search properties, property in india, propertyindia, 99acres, magic bricks,  property search, real estate properties, residential plot, residential house, multistorey apartment, builder floor apartment, villa, showroom, hotel sites, guest house, business centre, industrial land, industrial building, agricultural land, farm house">
<meta name="robots" content="noodp">

<link rel="stylesheet" href="http://www.propertyind.com/css/mainCssGroup.css" media="all" type="text/css">
<link rel="stylesheet" href="http://www.propertyind.com/css/searchCssGroup.css" media="all" type="text/css">
<script type="text/javascript" src="http://www.propertyind.com/css/searchGroup.js"></script>
<script type="text/javascript" src="http://www.propertyind.com/css/dwrGroup.js"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-9716847-4']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
  
 <body>


<!-- Body Text!!! -->
<body>
<!-- Header Starts -->

<style>.greentxt{color: #65b300; font-weight:bold;</style>
<script type="text/javascript">

function addBookmark(title, url) {
if (window.sidebar) { // firefox
window.sidebar.addPanel(title, url,"");
} else if( document.all ) { //MSIE
window.external.AddFavorite( url, title);
} else {
alert("Sorry, your browser doesn't support this");
}
}

 </script>
<!-- code for header -->
<div class="site_width">
  <div class="global_navbg blue_link3 width pad_tp1 pad_btm3">
		<div class="globalnav_bx3 flt_lft pad_lft1">
            <a href="http://www.propertyind.com/myLoanTool.html" rel="dropmenu6">Loans</a>
             &nbsp;|&nbsp;
            <a href="http://www.propertyind.com/nri/India-property.html" target="_blank" rel="dropmenu8">NRI Section</a>
             &nbsp;|&nbsp;
            <a href="http://www.propertyind.com/propertyNews.php" target="_blank">Property News</a>
			 &nbsp;|&nbsp;
            <a href="http://www.propertyind.com/green_agenda.html" target="_blank">
			<span class="greentxt">Green Buildings</span></a>
		</div>

		<div class="globalnav_bx2 flt_lft txt_align_center">&nbsp;</div>
		
		<div class="globalnav_bx1 flt_lft txt_align_rht pad_rht1">
		<a href="http://www.propertyind.com/indexc.html">Home</a> &nbsp;|&nbsp;
            <span class="blk_txt1">username</span>  &nbsp;|&nbsp;
            <a href="http://www.propertyind.com/propertyind_logout.php">Sign Out</a>  &nbsp;|&nbsp;
			<a href="http://www.propertyind.com/help.html">Help</a>
            <!--<a href='/indexc.html'>Home</a>  &nbsp;|&nbsp; -->
        </div>
		
		<div class="clr"></div>
  </div>
</div>

<div class="site_width pad_tp3">
    <div class="pad_rht1">
        <div class="pad_lft1 flt_lft"><a href="http://www.propertyind.com/indexc.html"><img src="css/logo.gif" alt="propertyind.com" border="0" height="105" width="275"></a>
         </div>
		 <div class="pad_lft1 flt_lft"><a href="http://www.propertyind.com/indexc.html"><img src="css/banner2.gif" alt="propertyind.com" border="0" height="105" width="495"></a>
        </div>
		<div class="pad_lft1 flt_lft"><a href="http://www.propertyind.com/indexc.html"><img src="css/banner1.gif" alt="propertyind.com" border="0" height="105" width="190"></a>
         </div>
    </div>
 </div>

<div class="clr pad_tp3"></div>
<!-- code for header ends here -->

<!-- code for site nav -->

<table background="http://www.propertyind.com/bread.gif" align="center">
<tr><td>
<div class="site_width" >
<div id="page-wrap" style="z-index: 0;">

       <ul class="dropdown">
				<li><a href="http://www.propertyind.com/myEstate.php">My Estate&nbsp;<img src="http://www.propertyind.com/css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 181px;" scrolling="no" frameborder="0"></iframe>
        		<ul class="sub_menu">
        				<li><a href="http://www.propertyind.com/myEstate.php">My Estate</a></li>
        			    <li><a href="http://www.propertyind.com/myResponses.php">View Response</a></li>
        			    <li><a href="http://www.propertyind.com/manageProperty.php">Manage Properties</a></li>
        			    <li><a href="http://www.propertyind.com/manageRequirements.php">Manage Requirements</a></li>
        			    <li><a href="http://www.propertyind.com/myPackageSubscriptions.php?type=services">Manage Subscriptions</a></li>
        			    <li><a href="http://www.propertyind.com/editAccountDetails.php">Manage Profile</a></li>
        			    <li><a href="http://www.propertyind.com/propertyind_logout.php">Sign Out</a></li>
        		</ul>
        	</li>
        	<li><a href="postProperty.php">Add New Property&nbsp;</a></li>


        	<li><a href="http://www.propertyind.com/postProperty.php">Post Property&nbsp;<img src="http://www.propertyind.com/css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 77px;" scrolling="no" frameborder="0"></iframe>
            	<ul class="sub_menu">
        			 <li><a href="http://www.propertyind.com/postProperty.php">Post Property for Sale</a></li>
        			 <li><a href="http://www.propertyind.com/advertise.php">Advertise with Us</a></li>
        		</ul>
        	</li>
        	<li><a href="http://www.propertyind.com/postRequirement.php">Post Requirement&nbsp;<img src="http://www.propertyind.com/css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 51px;" scrolling="no" frameborder="0"></iframe>
            	<ul class="sub_menu">
        	 <li><a href="http://www.propertyind.com/postRequirement.php">Post Requirement to Buy</a></li>
        	    </ul>
        	</li>
        	<li><a href="http://www.propertyind.com/propertySearch.php">Search&nbsp;<img src="http://www.propertyind.com/css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 129px;" scrolling="no" frameborder="0"></iframe>
               	<ul class="sub_menu">
               <li><a href="http://www.propertyind.com/propertySearch.php">Search for Properties</a></li>
               <li><a href="http://www.propertyind.com/requirementSearch.php">Search for Buyers</a> </li>
               <li><a href="http://www.propertyind.com/agentSearch.php">Search for Agents</a></li>
               <li><a href="http://www.propertyind.com/builderSearch.php">Search for Builders</a></li>
               <li><a href="http://www.propertyind.com/projectSearch.php">Search for Projects</a></li>
               </ul>

        	</li>


			<li><a href="http://www.propertyind.com/myLoanTool.html">More&nbsp;<img src="http://www.propertyind.com/css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame2" style="height: 77px;" scrolling="no" frameborder="0"></iframe>
            <ul class="sub_menu city">
        			 <li><a href="http://www.propertyind.com/myLoanTool.html" rel="dropmenu6">Loans</a></li>
        			 <li><a href="http://www.propertyind.com/nri/India-property.html" target="_blank" rel="dropmenu8">For NRI's</a></li>
        			 <li><a href="http://www.propertyind.com/propertyNews.php" target="_blank">Property News</a></li>
        		</ul>
        	</li>
        </ul>

	</div>

    <div class="cl"></div>


   	<!--City Special Links starts here-->

    	<div class="cityBlk">
        	<ul class="cityUL">
            	<li class="active"><a href="http://www.propertyind.com/indexc.html">All India</a></li>
                <li><a href="http://www.propertyind.com/Residential_Delhi.html">Delhi NCR</a></li>
                <li><a href="http://www.propertyind.com/Residential_Mumbai.html">Mumbai</a></li>
                <li><a href="http://www.propertyind.com/Residential_Bangalore.html">Bangalore</a></li>
                <li><a href="http://www.propertyind.com/Residential_Chennai.html">Chennai</a></li>
                <li><a href="http://www.propertyind.com/Residential_Chandigarh.html">Chandigarh</a></li>
                <li><a href="http://www.propertyind.com/Residential_Coimbatore.html">Coimbatore</a></li>
                <li><a href="http://www.propertyind.com/Residential_Jaipur.html">Jaipur</a></li>
                <li><a href="http://www.propertyind.com/Residential_Hyderabad.html">Hyderabad</a></li>
                <li><a href="http://www.propertyind.com/Residential_Pune.html">Pune</a></li>
                <li><a href="http://www.propertyind.com/Residential_Kolkata.html">Kolkata</a></li>
                <li><a href="http://www.propertyind.com/Residential_Goa.html">Goa</a></li>
                <li><a href="http://www.propertyind.com/Residential_Ahmedabad.html">Ahmedabad</a></li>

                <li onmouseover="document.getElementById('ct_more').style.display='block'; document.getElementById('baseFrm').style.display='block'" onmouseout="document.getElementById('ct_more').style.display='none'; document.getElementById('baseFrm').style.display='none'"><a href="#">More...</a>
                	<iframe id="baseFrm" src="javascript:'<html></html>';" style="position: absolute; height: 160px; width: 114px; display: none;" scrolling="no" frameborder="0"></iframe>
                	<ul class="ct_more" id="ct_more">
                    	<li><a href="http://www.propertyind.com/Residential_Kochi.html">Kochi</a>
                        </li><li><a href="http://www.propertyind.com/Residential_Vishakapatnam.html">Vishakhapatnam</a></li>
                        <li><a href="http://www.propertyind.com/Residential_Indore.html">Indore</a></li>
                        <li><a href="http://www.propertyind.com/Residential_Lucknow.html">Lucknow</a></li>
                        <li><a href="http://www.propertyind.com/Residential_Vadodara.html">Vadodara</a></li>
                        <li><a href="http://www.propertyind.com/Residential_Jamshedpur.html">Jamshedpur</a></li>
                        <li><a href="http://www.propertyind.com/Residential_Mangalore.html">Mangalore</a></li>
                    </ul>
                </li>
            </ul>
        </div>

         <div class="cl"></div>
    <!--City Special Links ends here-->
    </div>

</td></tr>
</table>
<!-- Header Ends -->

<!-- Content Starts   -->


<script type="text/javascript" src="css/commonutil.js"></script>
<script type="text/javascript" src="css/registration.js"></script>
<script type="text/javascript" src="css/common.js"></script>

<link href="css/forms_style.css" rel="stylesheet" type="text/css">
<link href="css/search_css.css" rel="stylesheet" type="text/css">

<script language="javascript">
	var divErrorObj = new Object();
	divErrorObj["ubifname"] = "nameErr";
	divErrorObj["ubilogin"] = "loginErr";
	divErrorObj["ubipass"] = "passwordErr";
	divErrorObj["ubiconfirmpass"] = "confirmPasswordErr";
	divErrorObj["otherState"] = "otherStateErr";
	divErrorObj["otherCity"] = "otherCityErr";
	divErrorObj["ubiphone1"] = "landlineErr1";
	divErrorObj["ubiphone2"] = "landlineErr1";
	divErrorObj["ubiphone3"] = "landlineErr1";
	divErrorObj["ubiemail"] = "emailErr";
	divErrorObj["ubimobile"] = "mobilelErr";
	divErrorObj["j_captcha_response"] = "j_captcha_response_error";
</script>


<script type="text/javascript" src="css/searchGroup.js"></script>

<link href="css/search_css.css" rel="stylesheet" type="text/css">

<style type="text/css" media="all">
	#bar_suggest div{
		background:#fff;
		color:#000;
		padding-left:4px;
		cursor:default;
		text-align:left;
	}
	#bar_suggest div.over{
		color:#fff;
		background:#316ac5;
	}
</style>

<form id="searchFormBean" name="bar_property" action="/propertySearch.php" method="post" onsubmit="return validateForm(this)">

<div class="srchbox_top pad_btm2" style="width: 1001px;">
<div class="flt_lft pad_rht1 title2 pad_lft2 pad_tp5"><b>Search <br>
Properties</b></div>

<div class="key flt_lft">
	<label><b>Property Type</b></label>
        <select id="bar_propertyType" name="bar_propertyType" class="input menusizetype">
			<option selected="selected" value="-1">---Select Type---</option>
			<option value="9000">ALL RESIDENTIAL</option><option value="10000">Residential Plot</option><option value="10001">Residential House</option><option value="10002">Multistorey Apartment</option><option value="10003">Builder Floor Apartment</option><option value="10017">Villa</option><option value="9001">ALL COMMERCIAL</option><option value="10006">Commercial Land</option><option value="10007">Commercial Office Space</option><option value="10008">Commercial Shop</option><option value="10009">Commercial Showroom</option><option value="10015">Kiosk</option><option value="10052">Hotel</option><option value="10016">Hotel Sites</option><option value="10051">Guest House</option><option value="10010">Business Centre</option><option value="10011">Warehouse/ Godown</option><option value="10012">Industrial Land</option><option value="10013">Industrial Building</option><option value="10014">Industrial Shed</option><option value="9002">ALL AGRICULTURAL</option><option value="10005">Agricultural Land</option><option value="10004">Farm House</option>
		</select>
		<div id="propTypeErrDivMsg" class="err_msg" style="font-size: 11px;"></div>
</div>
<div class="key flt_lft">
		<input id="country" name="country" value="50" type="hidden">
		<label><b>State&nbsp;</b></label>
		<select id="bar_state" name="bar_state" class="input menusizetype" onchange="populateCity('bar_state', 'bar_city', '')">
			<option selected="selected" value="-1">---Select State---</option>
			<option value="500">Andaman &amp; Nicobar</option><option value="501">Andhra Pradesh</option><option value="502">Arunachal Pradesh</option><option value="503">Assam</option><option value="504">Bihar</option><option value="505">Chandigarh</option><option value="506">Chhattisgarh</option><option value="507">Dadra &amp; Nagar Haveli</option><option value="508">Daman &amp; Diu</option><option value="509">Delhi NCR</option><option value="510">Goa</option><option value="511">Gujarat</option><option value="512">Haryana</option><option value="513">Himachal Pradesh</option><option value="514">Jammu &amp; Kashmir</option><option value="515">Jharkhand</option><option value="516">Karnataka</option><option value="517">Kerala</option><option value="518">Lakshadweep</option><option value="519">Madhya Pradesh</option><option value="520">Maharashtra</option><option value="521">Manipur</option><option value="522">Meghalaya</option><option value="523">Mizoram</option><option value="524">Nagaland</option><option value="525">Orissa</option><option value="526">Pondicherry</option><option value="527">Punjab</option><option value="528">Rajasthan</option><option value="529">Sikkim</option><option value="530">Tamil Nadu</option><option value="531">Tripura</option><option value="532">Uttar Pradesh</option><option value="533">Uttarakhand</option><option value="534">West Bengal</option>
		</select>
		<div id="stateErrDivMsg" class="err_msg" style="font-size: 11px;"></div>
</div>
<div class="key flt_lft">
		<label><b>City</b></label>
		<select id="bar_city" name="bar_city" class="input menusizetype" onchange="onCityChange();cityFunction('bar_city','bar_localityName','bar_suggest')" size="1">
			<option selected="selected" value="-1">---Select City---</option>

		</select>
		<div id="cityErrDivMsg" class="err_msg" style="font-size: 11px;"></div>
</div>
<div class="key flt_lft" style="width: 120px;">
		<label><b>Locality</b></label>
        <input id="bar_localityName" name="bar_localityName" class="input menusizetype" style="background: none repeat scroll 0% 0% rgb(255, 255, 255); width: 110px;" type="text">
        <div id="bar_suggest" class="pad_lft1" style="visibility: hidden; border: 1px solid rgb(204, 204, 204); position: absolute; width: 162px; background: none repeat scroll 0% 0% rgb(255, 255, 255); line-height: 18px;"></div>
        <iframe id="FrameautoSuggestList" style="visibility: hidden; position: absolute; width: 162px;" frameborder="0"></iframe>
 </div>

<div class="key flt_lft" style="width: 140px;">
	<label><b>Budget</b></label>
	<select id="bar_budgetMin" name="bar_budgetMin" class="input" style="width: 65px;" onchange="checkBudgetMax(this,'bar_budgetMin','bar_budgetMax');">
		<option selected="selected" value="-1">Min</option>
		<option value="11800">1lac</option><option value="11801">5 lacs</option><option value="11802">10 lacs</option><option value="11803">20 lacs</option><option value="11804">30 lacs</option><option value="1002214">40 lacs</option><option value="1002215">50 lacs</option><option value="11806">60 lacs</option><option value="1002216">70 lacs</option><option value="1002217">80 lacs</option><option value="1002218">90 lacs</option><option value="11807">1crore</option><option value="1002219">1.2 crores</option><option value="1002220">1.4 crores</option><option value="1002221">1.6 crores</option><option value="1002222">1.8 crores</option><option value="11809">2 crores</option><option value="1002223">2.3 crores</option><option value="1002224">2.6 crores</option><option value="11811">3 crores</option><option value="1002225">3.5 crores</option><option value="11812">4 crores</option><option value="1002226">4.5 crores</option><option value="11813">5 crores</option><option value="11814">&gt; 5 crores</option>
	</select>
<!--	To -->
	<select id="bar_budgetMax" name="bar_budgetMax" class="input" style="width: 65px;" onchange="checkBudgetMax(this,'bar_budgetMin','bar_budgetMax');">
		<option selected="selected" value="-1">Max</option>
		<option value="11800">1lac</option><option value="11801">5 lacs</option><option value="11802">10 lacs</option><option value="11803">20 lacs</option><option value="11804">30 lacs</option><option value="1002214">40 lacs</option><option value="1002215">50 lacs</option><option value="11806">60 lacs</option><option value="1002216">70 lacs</option><option value="1002217">80 lacs</option><option value="1002218">90 lacs</option><option value="11807">1crore</option><option value="1002219">1.2 crores</option><option value="1002220">1.4 crores</option><option value="1002221">1.6 crores</option><option value="1002222">1.8 crores</option><option value="11809">2 crores</option><option value="1002223">2.3 crores</option><option value="1002224">2.6 crores</option><option value="11811">3 crores</option><option value="1002225">3.5 crores</option><option value="11812">4 crores</option><option value="1002226">4.5 crores</option><option value="11813">5 crores</option><option value="11814">&gt; 5 crores</option>
	</select>
</div>
 <div class="key flt_lft" style="width: 30px;" align="center">
    <input class="srchbtn2" value="Go" type="submit">
</div>
<div class="clr"></div>
</div>

</form>

<div class="clr pad_tp3"></div>
<div class="site_width sec_divider pad_tp2">
<div class="clr">
<br><b>Your property details are posted sucessfully!</b><br>
<?php
echo "Data Posted " ;
echo $login . " Property Type :" . $property_type ." Property Availability :" . $property_availability . " Country :" . $country . " Locality :". $locality ." City :" . $city . " State :" . $state . " Name of Builder/ Promoter: " .$address . " No. of. Bedrooms : " . $bedrooms . " No. Of Bathrooms : " . $bathrooms . " Total Covered Area : " . $coveredArea . " Area in Units: " . $coveredAreaType;
?>

</div>

<br>
<a href="http://www.propertyind.com/indexc.html">Click here to move for the home page</a>
</div>


   <!-- <hr>  -->
<!-- Teporary entry End-->
<div class="clr"></div>
<div class="site_width cont_text1 blk_link11 txt_align_center pad_tp5">
<div class="yellow_bx2 mgn_tp1 pad_tp2 txt_align_left ">
    <div class="text_bx1 flt_lft mrgnlft_26">
    	<div class="title1 pad_btm2"><b>Properties in India</b></div>

        <div class="yellow_bdr1 pad10_rght">
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Delhi.html">Delhi  NCR</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Mumbai.html">Mumbai</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Jaipur.html">Jaipur</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Chennai.html">Chennai</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Kolkata.html">Kolkata</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Ahmedabad.html">Ahmedabad</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Bangalore.html">Bangalore</a></div>
             <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Hyderabad.html">Hyderabad</a></div>
              <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Chandigarh.html">Chandigarh</a></div>
               <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/Residential_Kochi.html">Kochi</a></div>
      </div>
    </div>

    <div class="text_bx2 flt_lft pad_lft1">
    	<div class="title1  pad_btm2"><b>propertyind Services</b></div>
        <div class="yellow_bdr1">
            <div class="fp_bx flt_lft white_bdr1 pad10_rght">
            <div class=" pad_lft4 dhd_bdr"><b>Seller</b></div>

            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/postProperty.php">Post Property</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/requirementSearch.php">Search Buyer</a></div>
 	        <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/advertise.php">Advertise Property</a></div>
        </div>

            <div class="fp_bx flt_lft mrgnlft_10 pad10_rght">
                <div class=" pad_lft4 dhd_bdr"><b>Buyer</b></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/propertySearch.php">Search Property</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/postRequirement.php">Post your Requirement</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/projectSearch.php">Search Projects</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/agentSearch.php">Search Agents</a></div>
				<div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/builderSearch.php">Search Builders</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/myLoanTool.html">Apply Loan</a></div>
            </div>
            <div class="clr"></div>
        </div>
    </div>

    <div class="text_bx1 flt_lft pad_lft1">
	    <div class="title1  pad_btm2"><b>Company</b></div>
        <div class="yellow_bdr1 pad10_rght">
			<!--<div class="buletted_bx pad_lft4 dhd_bdr">About Us</div>-->

            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/contactUs.php">Contact Us</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/terms.html">Terms &amp; Conditions</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr">Feedback</div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="http://www.propertyind.com/reportBug.php">Report a problem</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr">Site Map</div>

        </div>
    </div>

 <div class="text_bx1 flt_lft pad_lft1">
     <div class="title1  pad_btm2"><b>Network Sites</b></div>
           <div class="pad10_rght">
   			<div class="buletted_bx pad_lft4 dhd_bdr">Web Development Services<br>
   <span class="grey_txt1">Webarch Technologies, Annanagar, Chennai</span></div>
               <div class="buletted_bx pad_lft4 dhd_bdr">propertyind.com<br>
   <span class="grey_txt1">Network of Real estate companies, builders in India</span></div>
          </div>

    </div>

    <div class="clr"></div><br>
    <div class="cont_text2 grey_txt1 txt_align_center">All trademarks,
logos and names are properties of their respective owners. All Rights
Reserved. © Copyright 2010 Webarch India P. Limited </div>
    <br>
</div>

</body></html>
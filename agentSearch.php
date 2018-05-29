<?php
error_reporting (E_ALL ^ E_NOTICE);

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

$script="http://www.propertyind.com/listform.php";
?>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<title>propertyindia, Property in India, India Top Real Estate Agents Commission Agents in India Property Agents</title>
<meta name="description" content="Propertyindia, property agents India,property agents in India. Find commercial real estate agent India &amp; commercial property agents in India.">
<meta name="keywords" content="Propertyindia, Property India, best real estate agent India, best real estate agents India, propertyind, propertyind.com,  projects, builders">
<meta name="robots" content="noodp">

<link rel="stylesheet" href="css/mainCssGroup.css" media="all" type="text/css">
<link rel="stylesheet" href="css/searchCssGroup.css" media="all" type="text/css">
<script type="text/javascript" src="css/searchGroup.js"></script>
<script type="text/javascript" src="css/dwrGroup.js"></script>
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
</head><body>
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
            <a href="myLoanTool.html" rel="dropmenu6">Loans</a>
             &nbsp;|&nbsp;
            <a href="India-property.html" target="_blank" rel="dropmenu8">NRI Section</a>
             &nbsp;|&nbsp;
            <a href="propertyNews.html" target="_blank">Property News</a>
			 &nbsp;|&nbsp;
            <a href="green_agenda.html" target="_blank">
			<span class="greentxt">Green Buildings</span></a>
		</div>
        <div class="globalnav_bx2 flt_lft txt_align_center">&nbsp;</div>
		<div class="globalnav_bx1 flt_lft txt_align_rht pad_rht1">
		<a href="welcome.php">Home</a> &nbsp;|&nbsp;
        <span class="blk_txt1">username</span>  &nbsp;|&nbsp;
        <a href="propertyind_logout.php">Sign Out</a>  &nbsp;|&nbsp;
        <a href="help.html">help</a>
        </div>
		<div class="clr"></div>
  </div>
</div>

<div class="site_width pad_tp3">
    <div class="pad_rht1">
        <div class="pad_lft1 flt_lft"><a href="welcome.php"><img src="css/logo.gif" alt="propertyind.com" border="0" height="105" width="275"></a>
            <div class="cont_text2">

            </div>
        </div>
		 <div class="pad_lft1 flt_lft"><a href="welcome.php"><img src="css/banner2.gif" alt="propertyind.com" border="0" height="105" width="495"></a>
            <div class="cont_text2">

            </div>
        </div>
		<div class="pad_lft1 flt_lft"><a href="welcome.php"><img src="css/banner1.gif" alt="propertyind.com" border="0" height="105" width="190"></a>
            <div class="cont_text2">

            </div>
        </div>
    </div>
 </div>

<div class="clr pad_tp3"></div>
<!-- code for header ends here -->

<!-- code for site nav -->
<!-- code for site nav -->

<table background="bread.gif" align="center">
<tr><td>
<div class="site_width" >
<div id="page-wrap" style="z-index: 0;">

       <ul class="dropdown">
				<li><a href="myEstate.php">My Estate&nbsp;<img src="css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 181px;" scrolling="no" frameborder="0"></iframe>
        		<ul class="sub_menu">
        				<li><a href="myEstate.php">My Estate</a></li>
        			    <li><a href="myResponses.php">View Response</a></li>
        			    <li><a href="manageProperty.php">Manage Properties</a></li>
        			    <li><a href="manageRequirements.php">Manage Requirements</a></li>
        			    <li><a href="myPackageSubscriptions.php?type=services">Manage Subscriptions</a></li>
        			    <li><a href="editAccountDetails.php">Manage Profile</a></li>
        			    <li><a href="propertyind_logout.php">Sign Out</a></li>
        		</ul>
        	</li>
        	<li><a href="postProperty.php">Add New Property&nbsp;</a></li>


        	<li><a href="postProperty.php">Post Property&nbsp;<img src="css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 77px;" scrolling="no" frameborder="0"></iframe>
            	<ul class="sub_menu">
        			 <li><a href="postProperty.php">Post Property for Sale</a></li>
        			 <li><a href="advertise.php">Advertise with Us</a></li>
        		</ul>
        	</li>
        	<li><a href="postRequirement.php">Post Requirement&nbsp;<img src="css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 51px;" scrolling="no" frameborder="0"></iframe>
            	<ul class="sub_menu">
        	 <li><a href="postRequirement.php">Post Requirement to Buy</a></li>
        	    </ul>
        	</li>
        	<li><a href="propertySearch.php">Search&nbsp;<img src="css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame" style="height: 129px;" scrolling="no" frameborder="0"></iframe>
               	<ul class="sub_menu">
               <li><a href="propertySearch.php">Search for Properties</a></li>
               <li><a href="requirementSearch.php">Search for Buyers</a> </li>
               <li><a href="agentSearch.php">Search for Agents</a></li>
               <li><a href="builderSearch.php">Search for Builders</a></li>
               <li><a href="projectSearch.php">Search for Projects</a></li>
               </ul>

        	</li>


			<li><a href="myLoanTool.html">More&nbsp;<img src="css/white_arrow.gif" alt="" class="mgn_tp3" align="absmiddle" border="0"></a>
            <iframe src="javascript:'<html></html>';" class="frame2" style="height: 77px;" scrolling="no" frameborder="0"></iframe>
            <ul class="sub_menu city">
        			 <li><a href="myLoanTool.html" rel="dropmenu6">Loans</a></li>
        			 <li><a href="India-property.html" target="_blank" rel="dropmenu8">For NRI's</a></li>
        			 <li><a href="propertyNews.html" target="_blank">Property News</a></li>
        		</ul>
        	</li>
        </ul>

	</div>

    <div class="cl"></div>


   	<!--City Special Links starts here-->

    	<div class="cityBlk">
        	<ul class="cityUL">
            	<li class="active"><a href="welcome.php">All India</a></li>
                <li><a href="Residential_Delhi.html">Delhi NCR</a></li>
                <li><a href="Residential_Mumbai.html">Mumbai</a></li>
                <li><a href="Residential_Bangalore.html">Bangalore</a></li>
                <li><a href="Residential_Chennai.html">Chennai</a></li>
                <li><a href="Residential_Chandigarh.html">Chandigarh</a></li>
                <li><a href="Residential_Coimbatore.html">Coimbatore</a></li>
                <li><a href="Residential_Jaipur.html">Jaipur</a></li>
                <li><a href="Residential_Hyderabad.html">Hyderabad</a></li>
                <li><a href="Residential_Pune.html">Pune</a></li>
                <li><a href="Residential_Kolkata.html">Kolkata</a></li>
                <li><a href="Residential_Goa.html">Goa</a></li>
                <li><a href="Residential_Ahmedabad.html">Ahmedabad</a></li>
		<li><a href="Residential_Madurai.html">Madurai</a></li>

                <li onmouseover="document.getElementById('ct_more').style.display='block'; document.getElementById('baseFrm').style.display='block'" onmouseout="document.getElementById('ct_more').style.display='none'; document.getElementById('baseFrm').style.display='none'"><a href="#">More...</a>
                	<iframe id="baseFrm" src="javascript:'<html></html>';" style="position: absolute; height: 160px; width: 114px; display: none;" scrolling="no" frameborder="0"></iframe>
                	<ul class="ct_more" id="ct_more">
                    	<li><a href="Residential_Kochi.html">Kochi</a>
                        </li><li><a href="Residential_Vishakapatnam.html">Vishakhapatnam</a></li>
                        <li><a href="Residential_Indore.html">Indore</a></li>
                        <li><a href="Residential_Lucknow.html">Lucknow</a></li>
                        <li><a href="Residential_Vadodara.html">Vadodara</a></li>
                        <li><a href="Residential_Jamshedpur.html">Jamshedpur</a></li>
                        <li><a href="Residential_Mangalore.html">Mangalore</a></li>
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


<script type="text/javascript"	src="css/searchGroup.js"></script> 
<script type="text/javascript" src="css/tooltip.htm"></script>
<!--  <script type="text/javascript" src="/scripts/tabjavascript.js"></script> -->

 <style type="text/css" media="all">
	#keywordSuggest{
		background:#fff;
		width:150px;
	}
	#keywordSuggest div{
		background:#fff;
		color:#000;
		padding-left:4px;
		cursor:default;
		text-align:left;
	}
	#keywordSuggest div.over{
		color:#fff;
		background:#316ac5;
	}
</style>

<div class="site_width sec_divider pad_tp2">
<!-- code for left panel -->
<link href="css/search_css.css" rel="stylesheet" type="text/css">
	<div class="lft_panel flt_lft">
			<div class="main_srchbox  mar_b10">
				<h3>
					Property Search
				</h3>
			<ul>
			<li>
			<a href="propertySearch.php?source=quickSearch">Quick Search</a>
			</li>
			<li>
				<a>Search by ID </a>
			<label>
					<input maxlength="10" size="3" class="input" id="inputId" onblur="return setURL(this,'/viewProperty.html?id=')" type="text">
					<a href="" id="propertyId" onclick="return checkEmpty('inputId')" target="_blank">
					  <img src="css/go.gif" align="center" border="0" height="15" width="20">
					</a>
			</label>
			</li>
			</ul>
       </div>

	<div class="main_srchbox  mar_b10">
		<h3>Looking For</h3>
    <ul>
		<li><a href="requirementSearch.php">Buyer Search</a></li>
		<li><a href="agentSearch.php">Agent Search</a></li>
		<li><a href="builderSearch.php">Builder Search</a></li>
		<li><a href="projectSearch.php">Project Search</a></li>
	</ul>
	</div>
<div class="clr"></div>

<div class="main_srchbox mar_b10">
	<h4>
		Other Features
	</h4>
	<ul>

	<li class="brdr_dash">
		<a href="India-property.html">NRI Section</a>
	</li>
	<li>
		<a href="propertyNews.html">Latest Property News</a>
	</li>
	</ul>
</div>

<div><a href="advertise.php" target="_blank"><img src="css/inaugural_offer.gif" border="0" height="215" width="175"></a></div>

<!-- pixels from tribal-->
<img src="css/ti.gif" border="0" height="1" width="1">
<!-- End of conversion tag -->

<script src="css/test_domain.js"></script>
</div>
<!-- code for left panel ends here -->
<!-- code for middle panel -->
    <div class="mdl_panel flt_lft expanded_rmp">
      	<div class="pad_btm1 cont_text2">
	        <div class="midsrch_box ">
	            <h3>Search for Agents</h3>
	        </div>
	    	<div class="mand_txt pad_tp2">Search Results for Agents </div>

<?php
if (isset($_REQUEST["submit"])){
	$source=$_POST['source'];
	$agenttype=$_POST['agenttype'];
	$country=$_POST['country'];
	$state=$_POST['state'];
	$city=$_POST['city'];
	$propertytype=$_POST['propertytype'];
	$keyword=$_POST['keyword'];
	$resultperpage=$_POST['resultperpage'];
	$name="agent";
	//$sql="select * from user_registration order by user_name where user_type= '" . $name . "'";
	$sql="select * from user_registration order by user_name";
	$result = mysql_query($sql);
	//echo $result;
?>
<table width="800" border="0" cellpadding="3" cellspacing="1" bgcolor="#DDDDDD">
	<tr width="800" border="0" cellpadding="3" cellspacing="1" bgcolor="#DDDDDD">
		<td width="25%" align="center" bgcolor="#DDDDDD"><h4>Name</h4></td>
		<td width="15%" align="center" bgcolor="#DDDDDD"><h4>Country</h4></td>
		<td width="25%" align="center" bgcolor="#DDDDDD"><h4>Email Id</h4></td>
		<td width="20%" align="center" bgcolor="#DDDDDD"><h4>Mobile Number</h4></td>
		<td width="15%" align="center" bgcolor="#DDDDDD"><h4>Landline</h4></td>
	</tr>
	<form name="listform" method="post">
	<?php
	while($rows=mysql_fetch_array($result)){
	//echo $rows['user_id']. " " . $rows['user_name'] . " " . $rows['email']. " ". $rows['mobile_number']."". $rows['landline'];
	?>
	<tr width="800" border="0" cellpadding="3" cellspacing="1" bgcolor="#FFDDDD" />
	<td width="25%" align="left" bgcolor="#77AAEE"><?php echo $rows['user_name'];?></td>
	<td width="25%" align="left" bgcolor="#77AAEE"><?php echo $rows['country'];?></td>
	<td width="15%" align="left" bgcolor="#77AAEE"><?php echo $rows['email'];?></td>
	<td width="15%" align="center" bgcolor="#77AAEE"><?php echo $rows['mobile_number'];?></td>
	<td width="20%" align="center" bgcolor="#77AAEE"><?php echo $rows['landline'];?></td>
	</tr>

	<?php
	 }// Exit while looping
	?>
	</form>
	</table>
<?php

}
else
{
?>
		
				
<form id="agentSearchFormBean" name="agent" action="agentSearch.php" method="post" onsubmit="return validateForm(this)">
    <input id="source" name="source" value="agentSearch" type="hidden">
    <div class="frm_container">
    <h3>Basic Details</h3>
    <p class="frm_cntrls">
    <label>Agent Search<em>*</em> :</label>
    <span class="frm_cnt">
    <select id="agentSearchType" name="agentSearchType" size="1">
		<option value="O">Operating in</option>
		<option value="B" selected="selected">Based in</option>
		<option value="A">Both</option>
	</select>
	</span>
	<span class="cl"></span>
    </p>

<style type="text/css" media="all">
	#suggest{
		background:#fff;
		width:150px;
	}
	#suggest div{
		background:#fff;
		color:#000;
		padding-left:4px;
		cursor:default;
		text-align:left;
	}
	#suggest div.over{
		color:#fff;
		background:#316ac5;
	}
</style>
<p class="frm_cntrls">
   <label>Country<em>*</em> :</label>
     <span class="frm_cnt">
    	<select id="country" name="country" onchange="onCountryChange()">
		<option value="50" selected="selected">India</option>
		<option value="USA">USA</option>
		<option value="United Arab Emirates">United Arab Emirates</option>
		<option value="Saudi Arabia">Saudi Arabia</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Bahrain">Bahrain</option>
		<option value="Oman">Oman</option>
		<option value="Qatar">Qatar</option>
		<option value="Australia">Australia</option>
		<option value="Canada">Canada</option>
		<option value="United Kingdom">United Kingdom</option>
		<option value="Singapore">Singapore</option>
		</select>
		<span id="countryErrDivMsg" class="err_msg"></span>

	    </span>
		<span class="cl"></span>
	</p>

<p class="frm_cntrls">
    <label>State<em>*</em> :</label>
    <span class="frm_cnt">
	    <select id="state" name="state" onchange="onStateChange()">
			<option value="Tamil Nadu">Tamil Nadu</option>
			<option value="Andaman">Andaman &amp; Nicobar</option>
			<option value="Andhra Pradesh">Andhra Pradesh</option>
			<option value="Arunachal Pradesh">Arunachal Pradesh</option>
			<option value="Assam">Assam</option>
			<option value="Bihar">Bihar</option>
			<option value="Chandigarh">Chandigarh</option>
			<option value="Chhattisgarh">Chhattisgarh</option>
			<option value="Nagar Haveli">Dadra &amp; Nagar Haveli</option>
			<option value="Daman">Daman &amp; Diu</option>
			<option value="Delhi NCR">Delhi NCR</option>
			<option value="Goa">Goa</option>
			<option value="Gujarat">Gujarat</option>
			<option value="Haryana">Haryana</option>
			<option value="Himachal Pradesh">Himachal Pradesh</option>
			<option value="Jammu Kashmir">Jammu &amp; Kashmir</option>
			<option value="Jharkhand">Jharkhand</option>
			<option value="Karnataka">Karnataka</option>
			<option value="Kerala">Kerala</option>
			<option value="Lakshadweep">Lakshadweep</option>
			<option value="Madhya Pradesh">Madhya Pradesh</option>
			<option value="Maharashtra">Maharashtra</option>
			<option value="Manipur">Manipur</option>
			<option value="Meghalaya">Meghalaya</option>
			<option value="Mizoram">Mizoram</option>
			<option value="Nagaland">Nagaland</option>
			<option value="Orissa">Orissa</option>
			<option value="Pondicherry">Pondicherry</option>
			<option value="Punjab">Punjab</option>
			<option value="Rajasthan">Rajasthan</option>
			<option value="Sikkim">Sikkim</option>
			<option value="Tripura">Tripura</option>
			<option value="Uttar Pradesh">Uttar Pradesh</option>
			<option value="Uttarakhand">Uttarakhand</option>
			<option value="West Bengal">West Bengal</option>
		</select>
		<span id="stateErrDivMsg" class="err_msg"></span>

    </span>
	<span class="cl"></span>
</p>
<p class="frm_cntrls">
<label>City<em>*</em> :</label>
<span class="frm_cnt">
	<select id="city" name="city" onchange="onCityChange();cityFunction('city','localityName','suggest')" size="1">
		<option selected="selected" value="">---Select City---</option>

	</select>
	<span id="cityErrDivMsg" class="err_msg"></span>

</span>
<span class="cl"></span>
</p>
<p class="frm_cntrls">

 </p>
		<p class="frm_cntrls">
		<label>Dealing in :</label>
		<span class="frm_cnt">
			<select id="transactionType" name="transactionType" multiple="multiple" size="3">
				<option value="-1">---Transaction Type---</option>
				<option value="11951">Pre-launch</option><option value="11952">Original Booking</option><option value="11953">Resale</option><option value="11954">Others</option>
				</select><input name="_transactionType" value="1" type="hidden">
		</span>
		<font color="#000000">[</font> <font color="#666666"> To select more than one option, keep Ctrl key pressed.</font><font color="#000000">]</font>
		<span class="cl"></span>
		</p>


        <p class="frm_cntrls">
        <label>Properties handled :</label>
        <span class="frm_cnt">
		 <select id="propertyType" name="propertyType" class="cont_text3 grey_txt1 flt_lft">
					<option value="Multistorey Apartment" selected="selected">Multistorey Apartment</option>
					<option value="Residential Plot">Residential Plot</option>
					<option value="Residential House">Residential House</option>
					<option value="Villa">Villa</option>
					<option value="Commercial Land">Commercial Land</option>
					<option value="Commercial Office Space">Commercial Office Space</option>
					<option value="Commercial Shop">Commercial Shop</option>
					<option value="Commercial Showroom">Commercial Showroom</option>
					<option value="Kiosk">Kiosk</option>
					<option value="Hotel">Hotel</option>
					<option value="Hotel Sites">Hotel Sites</option>
					<option value="Guest House">Guest House</option>
					<option value="Business Centre">Business Centre</option>
					<option value="Godown">Warehouse/ Godown</option>
					<option value="Industrial Land">Industrial Land</option>
					<option value="Industrial Building">Industrial Building</option>
					<option value="Industrial Shed">Industrial Shed</option>
					<option value="Agricultural Land">Agricultural Land</option>
					<option value="Farm House">Farm House</option>
				</select>
				<input name="_propertyType" value="1" type="hidden"><br>
			<span class="grey_txt1">&nbsp;[ <span class="helptxt">You may select upto 5 options.</span> ]<br>&nbsp;[ <span class="helptxt">To select more than one option, keep Ctrl key pressed. </span> ]</span>
            </span>
            <span class="cl"></span>
           </p>
          </div>
              <div class="frm_container">
                    <h3>Other Details</h3>
                    <p class="frm_cntrls">
                      <label for="keyword">Keyword(s) :</label>
                      <span class="frm_cnt">
						<input id="keyword" name="keyword" class="txt" type="text">
						<div id="keywordErrDivMsg" class="err_msg"></div>
						<div id="keywordSuggest" style="visibility: hidden; border: 1px solid rgb(102, 102, 102); position: absolute; width: 162px;"></div>
						<font color="#000000">&nbsp;[</font><font color="#666666"> Enter specific features you are looking for in the property.</font><font color="#000000">]</font>
						<br>
                      </span>
                      <span class="cl"></span>
                    </p>
                    <p class="frm_cntrls">
                      <label>Results per page :</label>
                      <span class="frm_cnt">
						<select id="resultPerPage" name="resultPerPage" class="smaltxt2">
							<option value="0">---Number Of Search Results---</option>
							<option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50" selected="selected">50</option>
						</select>
                      </span>
                      <span class="cl"></span>
                    </p>
                </div>
                <div class="frm_container pad_tp2">
                     <p class="frm_cntrls"><label>&nbsp;</label>
                     	<input class="frm_btn" value="submit" name="submit" type="submit">
                     </p>
                </div>
            </form>
<!-- code for middle panel ends here -->
<?php
}
?>

	</div>
	</div>
    <div class="clr"></div>
	<!-- code for middle panel ends here -->
	<script type="text/javascript">
	//if(document.getElementById("keyword"))
	//	initKeyworSuggest('keyword','keywordSuggest');
	</script>



<!-- <hr>  -->
<!-- Temporary entry End-->
<div class="clr"></div>
<div class="site_width cont_text1 blk_link11 txt_align_center pad_tp5">
<div class="yellow_bx2 mgn_tp1 pad_tp2 txt_align_left ">
    <div class="text_bx1 flt_lft mrgnlft_26">
    	<div class="title1 pad_btm2"><b>Properties in India</b></div>

        <div class="yellow_bdr1 pad10_rght">
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Delhi.html">Delhi  NCR</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Mumbai.html">Mumbai</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Jaipur.html">Jaipur</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Chennai.html">Chennai</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Kolkata.html">Kolkata</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Ahmedabad.html">Ahmedabad</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Bangalore.html">Bangalore</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Hyderabad.html">Hyderabad</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Chandigarh.html">Chandigarh</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="Residential_Kochi.html">Kochi</a></div>
      </div>
    </div>

    <div class="text_bx2 flt_lft pad_lft1">
    	<div class="title1  pad_btm2"><b>propertyind Services</b></div>
        <div class="yellow_bdr1">
            <div class="fp_bx flt_lft white_bdr1 pad10_rght">
            <div class=" pad_lft4 dhd_bdr"><b>Seller</b></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="postProperty.php">Post Property</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="requirementSearch.php">Search Buyer</a></div>
 	        <div class="buletted_bx pad_lft4 dhd_bdr"><a href="advertise.php">Advertise Property</a></div>
        </div>

            <div class="fp_bx flt_lft mrgnlft_10 pad10_rght">
                <div class=" pad_lft4 dhd_bdr"><b>Buyer</b></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="propertySearch.php">Search Property</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="postRequirement.php">Post your Requirement</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="projectSearch.php">Search Projects</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="agentSearch.php">Search Agents</a></div>
				<div class="buletted_bx pad_lft4 dhd_bdr"><a href="builderSearch.php">Search Builders</a></div>
                <div class="buletted_bx pad_lft4 dhd_bdr"><a href="myLoanTool.html">Apply Loan</a></div>
            </div>
            <div class="clr"></div>
        </div>
    </div>

    <div class="text_bx1 flt_lft pad_lft1">
	    <div class="title1  pad_btm2"><b>Company</b></div>
        <div class="yellow_bdr1 pad10_rght">
			<!--<div class="buletted_bx pad_lft4 dhd_bdr">About Us</div>-->
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="contactUs.php">Contact Us</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="terms.html">Terms &amp; Conditions</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr">Feedback</div>
            <div class="buletted_bx pad_lft4 dhd_bdr"><a href="reportBug.php">Report a problem</a></div>
            <div class="buletted_bx pad_lft4 dhd_bdr">Site Map</div>

        </div>
    </div>

    <div class="text_bx1 flt_lft pad_lft1">
     <div class="title1  pad_btm2"><b>Network Sites</b></div>
           <div class="pad10_rght">
   			<div class="buletted_bx pad_lft4 dhd_bdr">Web Development Services<br>
   <span class="grey_txt1">Webarch India, Annanagar, Chennai</span></div>
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
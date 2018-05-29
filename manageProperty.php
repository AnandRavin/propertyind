<?php
error_reporting(E_ERROR | E_PARSE);
session_start();

$db2->Database = "propert1_propertyindia";
$db2->User     = "propert1_admin";
$db2->Password = "propertyindia123";
$db2->Host     = "localhost";

//echo "The user name is : " . $_SESSION['login_user'];
$username=$_SESSION['login_user'];
$userid=$_SESSION['login_id'];
if (isset($_SESSION['login_user'])) {
?>
<html>
<head>
<HEAD><TITLE>Property India, Real Estate India, Add Property, Post Property, Post Requirement</TITLE>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<META name=keywords content="property india, india property, post property, post property,99acres, magic bricks,  add new property, add new requirement"><script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="newcss/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Custom Theme files -->
<link href="newcss/style.css" rel='stylesheet' type='text/css' />
<!-- Custom Theme files -->
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<!-- start menu -->
<link href="newcss/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
</head>
<body>
<div class="header_top">
  <div class="container">
  	<div class="header_top-box">
     	<div class="header-top-left">
			  <div class="box">
			  	   	<select tabindex="4" class="dropdown drop">
					   <option value="" class="label" value="">Dollar :</option>
				       <option value="1">Dollar</option>
				       <option value="2">Euro</option>
					</select>
   			   </div>
   			   <div class="box1">
   				       <select tabindex="4" class="dropdown">
							<option value="" class="label" value="">English :</option>
							<option value="1">English</option>
							<option value="2">French</option>
							<option value="3">German</option>
					  </select>
   			   </div>
   				    <div class="clearfix"></div>
   			 </div>
   			<?php
   			if (strlen($username) == 0) 
   			{
   			?> 
			 <div class="cssmenu">
				<ul>
					<li class="active"><a href="userLogin.php">Account</a></li> 
					<li><a href="wishlist.html">Wishlist</a></li>
					<li><a href="userLogin.php">Log in</a></li>
					<li><a href="register.html">Sign Up</a></li>
				</ul>
			</div>
			<?php
			} else
			{
			?>
			 <div class="cssmenu">
				<ul>
					<li class="active"><a href="userLogin.php">Account</a></li> 
					<li><a href="wishlist.html">Wishlist</a></li>
					<li><a href="#"><?php echo $username ?></a></li> 
					<li><a href="propertyind_logout.php">Log Out</a></li> 
				</ul>
			</div>			
			
			<?php
			}
			?>
			<div class="clearfix"></div>
    	</div>
  	</div>
</div>



<div class="header_bottom">
	<div class="container">
	 <div class="header_bottom-box">
		<div class="header_bottom_left">
			<div class="logo">
				<a href="index.html"><img src="images/logo.gif" alt=""/></a>
			</div>
			<ul class="clock">
				<i class="clock_icon"> </i>
				<li class="clock_desc">Justo 24/h</li>
			</ul>
			<div class="clearfix"> </div>
		</div>
		<div class="header_bottom_right">
			<div class="search">
			  <input type="text" value="India" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'India';}">
			  <input type="submit" value="">
	  		</div>
	  		
		</div>
		<div class="clearfix"> </div>
	</div>
 </div>
</div>
<div class="menu">
	<div class="container">
		<div class="menu_box">
	     <ul class="megamenu skyblue">
			<li><a class="color2" href="index.html">Home</a></li>
			<li><a class="color2" href="myEstate.php">My Estate</a></li>
			<li class="active grid"><a class="color4" href="postProperty.php">Post Property</a></li>			
			<li><a class="color7" href="postRequirement.php">Post Requirement</a></li>
			<li ><a class="color8" href="blog.html">Blog</a></li>
			<div class="clearfix"> </div>
		 </ul>
	  </div>
</div>
</div>

<div class="men">
	<div class="container">
<?php 
	echo "User Name : " . $username. "</br> User Id : " . $userid;
	$city=$_POST['city'];
 	$db2->Database = "propert1_propertyindia";
	$db2->User     = "propert1_admin";
	$db2->Password = "propertyindia123";
	$db2->Host     = "localhost";
	$dbhost="localhost"; // Host name
	$dbuser="propert1_admin"; // Mysql username
	$dbpass="propertyindia123"; // Mysql password
	$db_name="propert1_propertyindia"; // Database name
 
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(! $conn )
	{
		die('Could not connect to database: ' . mysql_error());
	}

	mysql_select_db("$db_name")or die("cannot select DB");
	// find out how many rows are in the table 
	$sql = "select count(*) from property where user_id =" .$userid;
	$result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
	$r = mysql_fetch_row($result);
	$numrows = $r[0];
		
	// number of rows to show per page
	$rowsperpage = 50;
	$totalpages = ceil($numrows / $rowsperpage);
	if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
			$currentpage = (int) $_GET['currentpage'];
	} else {  
			$currentpage = 1;
	} 
	//echo "Number of rows in tables " . $numrows . " totalpages " . $totalpages . " current page " . $currentpage;
	// if current page is greater than total pages, set current to last page
	if ($currentpage > $totalpages) { 
			   $currentpage = $totalpages;
	}
	// if current page is less than first page,set current to first page
	if ($currentpage < 1) {   
			$currentpage = 1;
	} 
	// the offset of the list, based on current page 
	$offset = ($currentpage - 1) * $rowsperpage;

	//$sql="select * from property where property_type='" . $propertytype . "' and city='" . $city . "' order by city";
	$sql="select * from property where user_id=" .$userid. " LIMIT $offset, $rowsperpage";
	
	$result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>


<table width="800" border="0" cellpadding="3" cellspacing="1" bgcolor="#DADADA">
	<tr width="800" border="0" cellpadding="3" cellspacing="1" bgcolor="#DADADA">
		<td width="25%" align="center" bgcolor="#FFFF77"><strong>Property </strong></td>
		<td width="10%" align="center" bgcolor="#FFFF77"><strong>Project Name</strong></td>
		<td width="10%" align="center" bgcolor="#FFFF77"><strong>Location</strong></td>
		<td width="20%" align="center" bgcolor="#FFFF77"><strong>Area Sq.Ft</strong></td>
		<td width="20%" align="center" bgcolor="#FFFF77"><strong>Contact Details</strong></td>
	</tr>
	
	<?php
	while($rows=mysql_fetch_array($result)){ // Start looping table row
	//echo $rows['user_id']. " " . $rows['user_name'] . " " . $rows['email']. " ". $rows['mobile_number']."". $rows['landline'];
	?>
	<tr>
	<?php $form_id = "form_" . $rows['property_id']; ?> 
	<form id='<?php echo $form_id ?>' action="/chennai_property.php" method="GET">

    		<td align="center"><img src="css/dd_castle.jpg" alt="DD Den – Sri Mayura Garden" class="dev_gallery pad_tp2 flt_lft"/></td>
    		<td align="center"><h2><?php echo $rows['propertyName']; ?><br></br></h2><?php echo $rows['property_type'];?> </td>
    		<td align="center"><span class="hilit"><?php echo $rows['locality']; ?> <br> <?php echo $rows['city']; ?> </td>
		<td align="center"><span class="hilit">Area: <?php echo $rows['coveredArea']; ?>Sq. Ft.</span></td>
    		<td align="center"><?php echo $rows['address']; ?>, <br> Ph:<?php echo $rows['contactNumbers']; ?><br/>
		<input type='hidden' name='propertyName' value="<?php echo  $rows['propertyName'];?>" >
		<input type='hidden' name='locality' value="<?php echo  $rows['locality'];?>" >
		<input type='hidden' name='address' value="<?php echo  $rows['address'];?>" >
		<input type='hidden' name='plotArea' value="<?php echo  $rows['plotArea'];?>" >
		<input type='hidden' name='coveredArea' value="<?php echo  $rows['coveredArea'];?>" >
		<input type='hidden' name='amenity' value="<?php echo  $rows['amenity'];?>" >
		<input type='hidden' name='propertyType' value="<?php echo  $rows['property_type'];?>" >
		<input type='hidden' name='bedrooms' value="<?php echo  $rows['bedrooms'];?>" >
		<input type='hidden' name='bathrooms' value="<?php echo  $rows['bathrooms'];?>" >
		<input type='hidden' name='perUnitPrice' value="<?php echo $rows['perUnitPrice'];?>" >
		<input type="submit" value="submit" name="submit" ></input>
		</td></form>
  	</tr>
	
	<?php
	 }// Exit while looping
	/******  code for building the pagination links ******/
	// range of num links to show
	$range = 3;
	echo "<form name='listproperties' id='listproperties' method='post'> ";
	// if not on page 1, don't show back links
	if ($currentpage > 1) {
	echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=1'><<</a> ";
		$prevpage = $currentpage - 1;
	echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'><</a> ";
	} // end if 
	// loop to show links to range of pages around current page
	for ($x = ($currentpage - $range); $x < (($currentpage + $range) + 1); $x++) {
		// if it's a valid page number...
	if (($x > 0) && ($x <= $totalpages)) {
      	// if we're on current page...
      		if ($x == $currentpage) {
         	// 'highlight' it but don't make a link
        	 echo " ..[<b>$x</b>].. ";
      		// if not current page...
      		} else {
         
         	echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$x'>$x</a> ";
      		} // end else
	} // end if 
	} // end for
                 
	// if not on last page, show forward and last page links        
	if ($currentpage != $totalpages) {
	// get next page
	$nextpage = $currentpage + 1;
    	// echo forward link for next page 
	echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$nextpage'>></a> ";
	// echo forward link for lastpage
	echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$totalpages'>>></a> ";
	} // end if
		/****** end build pagination links ******/
	?>
	</form>
</table>
<?php

}
else
{
?>
<html>
<head>
<HEAD><TITLE>Property India, Real Estate India, Add Property, Post Property, Post Requirement</TITLE>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<META name=keywords content="property india, india property, post property, post property, add new property, add new requirement"><script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="newcss/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Custom Theme files -->
<link href="newcss/style.css" rel='stylesheet' type='text/css' />
<!-- Custom Theme files -->
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<!-- start menu -->
<link href="newcss/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
</head>
<body>
<div class="header_top">
  <div class="container">
  	<div class="header_top-box">
     <div class="header-top-left">
			  <div class="box">
			  	   	<select tabindex="4" class="dropdown drop">
					   <option value="" class="label" value="">Dollar :</option>
				       <option value="1">Dollar</option>
				       <option value="2">Euro</option>
					</select>
   			   </div>
   			   <div class="box1">
   				       <select tabindex="4" class="dropdown">
							<option value="" class="label" value="">English :</option>
							<option value="1">English</option>
							<option value="2">French</option>
							<option value="3">German</option>
					  </select>
   			   </div>
   				    <div class="clearfix"></div>
   			 </div>
			 <div class="cssmenu">
				<ul>
					<li class="active"><a href="userLogin.php">Account</a></li> 
					<li><a href="wishlist.html">Wishlist</a></li>
					<li><a href="userLogin.php">Log In</a></li> 
					<li><a href="register.html">Sign Up</a></li>
				</ul>
			</div>
			<div class="clearfix"></div>
    </div>
  </div>
</div>
<div class="header_bottom">
	<div class="container">
	 <div class="header_bottom-box">
		<div class="header_bottom_left">
			<div class="logo">
				<a href="index.html"><img src="images/logo.gif" alt=""/></a>
			</div>
			<ul class="clock">
				<i class="clock_icon"> </i>
				<li class="clock_desc">Justo 24/h</li>
			</ul>
			<div class="clearfix"> </div>
		</div>
		<div class="header_bottom_right">
			<div class="search">
			  <input type="text" value="India" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'India';}">
			  <input type="submit" value="">
	  		</div>
	  		
		</div>
		<div class="clearfix"> </div>
	</div>
 </div>
</div>
<div class="menu">
	<div class="container">
		<div class="menu_box">
	     <ul class="megamenu skyblue">
			<li><a class="color2" href="index.html">Home</a></li>
<li><a class="color2" href="myEstate.php">My Estate</a></li>
			<li class="active grid"><a class="color4" href="postProperty.php">Post Property</a></li>			
			<li><a class="color7" href="postRequirement.php">Post Requirement</a>

			</li>
			<li ><a class="color8" href="blog.html">Blog</a></li>
			<div class="clearfix"> </div>
		 </ul>
	  </div>
</div>
</div>

<div class="men">
	<div class="container">

<h2>Please Login to see the list of properties you have added.</h2>


<?php
}
?>
	       <div class="blog-top">
			  <div class="col-md-6 grid_3">
					<h3><a href="userLogin.php">Login to your Account</a></h3>
					<a href="#"><img src="images/slider1.jpg" class="img-responsive" alt=""/></a>
					<div class="blog-poast-admin">
						<!-- a href="#"><img src="images/b_small.jpg" class="img-responsive" title="admin" alt=""/></a -->
					</div>
					<div class="blog-poast-info">
						<ul>
							<li><i class="admin"> </i><a class="admin" href="#"><span> </span> Admin </a></li>
							<li><i class="date"> </i><span> </span>12-04-2015</li>
							<li><i class="comment"> </i><a class="p-blog" href="#"><span> </span>No Comments</a></li>
						</ul>
				    </div>
				    <p>Dear  Customer,</p>
					<p>By Registering in our website you can add new propeties for selling. If you or a Developer, Builder, onr an Agent you can list your current projects / ongoing projects, list your completed properties in major cities of India. Select "Post Property" from the menu command once you login to your account. We can publish your advertiements free of cost. For details write to Email: anand.ravin@gmail.com, or call Mob: +91 96000 35400.</p>
					<div class="button"><a href="userLogin.php">Login</a></div>
				</div>
				<div class="col-md-6 grid_3">
					<h3><a href="userRegistration.php">Register New Account</a></h3>
					<a href="#"><img src="images/3.jpg" class="img-responsive" alt=""/></a>
					<div class="blog-poast-admin">
						<!-- a href="#"><img src="images/b_small.jpg" class="img-responsive" title="admin" alt=""/></a -->
					</div>
					<div class="blog-poast-info">
						<ul>
							<li><i class="admin"> </i><a class="admin" href="#"><span> </span> Admin </a></li>
							<li><i class="date"> </i><span> </span>12-04-2015</li>
							<li><i class="comment"> </i><a class="p-blog" href="#"><span> </span>No Comments</a></li>
						</ul>
				    </div>
				    <p>Dear  Customer,</p>
					<p>If you are a buyer you can select your property and add to your wishlist. By registering your account we will contact you through phone or email and provide you the builder information. For enquiries please contact: R.Anand, +91 9600035400
</p>
					<div class="button"><a href="userLogin.php">Login</a></div>
				</div>
				<div class="clearfix"></div>
			  </div>
			 
      </div>
</div>





<div class="footer">
	<div class="container">
		<img src="images/pay.png" class="img-responsive" alt=""/>
		<ul class="footer_nav">
		  <li><a href="#">Home</a></li>
		  <li><a href="#">Blog</a></li>
		  <li><a href="#">Shop</a></li>
		  <li><a href="#">Media</a></li>
		  <li><a href="#">Features</a></li>
		  <li><a href="#">About Us</a></li>
		  <li><a href="contact.html">Contact Us</a></li>
		</ul>
		<p class="copy">Copyright&copy; 2015 Template by <a href="contactUs.php" target="_blank"> Webarch Technologies</a></p>
	</div>
</div>
</body>
</html>		
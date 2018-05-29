<?php
session_start();
//echo "The user name is : " . $_SESSION['login_user'];
$username=$_SESSION['login_user'];
$userid=$_SESSION['login_id'];
?>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Property Ind Dot Com - Post Property, Add Property</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="user registration, user signup, online shopping, commercial properties in India, commercial properties, commercial land, houses, apartments, flats, sale, propertyind">
<meta name="robots" content="noodp">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
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
<!--------------------Menu start --------------------->
<div class="header_top">
  <div class="container">
  	<div class="header_top-box">
     <div class="header-top-left">
	<div class="cssmenu">
<ul>
<li class="active"><a href="userLogin.php">Account</a></li> 
<li><a href="myLoanTool.html">Loans</a></li>
<li><a href="India-property.html">NRI</a></li>
<li><a href="propertyNews.html">Property News</a></li>
<li><a href="indiaProperty.html">IndiaProperty</a></li>
<li><a href="propertyIndia.html">PropertyIndia</a></li>
<li><a href="manageRequirements.php">My List</a></li>	
<li><a href="contactUs.php">Contact Us</a></li>	
<li><a href="help.html">Help</a></li> 

</ul>
	</div>
 
		<div class="clearfix"></div>
   </div>
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
				<li class="clock_desc"><a href="http://www.propertyind.com/manageProperty.php">Manage Property</a></li>
			</ul>
			<div class="clearfix"> </div>
		</div>
		<div class="header_bottom_right">
		<form id="searchFormBean" name="body_property" action="propertySearch.php?city=Chennai&amp;type=R" method="post" >
			<div class="search">
			  <input type="text" value="All India" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'All India';}">
			  <input type="submit" name="submit" value="">
	  		</div>
	  	</form>
	  	<?
	 	if (isset($_SESSION['login_user'])) {
		
		?>
		<ul class="bag">
  			<a href="propertyind_logout.php"><i class="bag_left">Log Out</i></a>
  			
	  		<div class="clearfix"> </div>
	  	</ul>
		
		<?
		} 
		else {
		?>
		<ul class="bag">
  			<a href="userLogin.php"><i class="bag_left">Log In</i></a>
  			<a href="userRegistration.php"><li class="bag_right"><p>Sign Up</p> </li></a>
	  		<div class="clearfix"> </div>
	  	</ul>
		</div>
		<? }
		?>
		<div class="clearfix"> </div>
	</div>
</div>
</div>

<div class="menu">
	<div class="container">
		<div class="menu_box">
	     <ul class="megamenu skyblue">
			<li><a class="color2" href="index.html">Home</a></li>
			<li><a class="color4" href="men.html">Special</a></li>			
			<li><a class="color10" href="#">Men Fashion</a>
				<div class="megapanel">
					<div class="row">
						<div class="col1">
							<div class="h_nav">
								<h4>Men</h4>
								<ul>
									<li><a href="men.html">Jackets</a></li>
									<li><a href="men.html">Blazers</a></li>
									<li><a href="men.html">Suits</a></li>
									<li><a href="men.html">Trousers</a></li>
									<li><a href="men.html">Jeans</a></li>
									<li><a href="men.html">Shirts</a></li>
									<li><a href="men.html">Sweatshirts & Hoodies</a></li>
									<li><a href="men.html">Swem Wear</a></li>
									<li><a href="men.html">Accessories</a></li>
								</ul>	
							</div>							
						</div>
						<div class="col1">
							<div class="h_nav">
								<h4>Women</h4>
								<ul>
									<li><a href="men.html">Outerwear</a></li>
									<li><a href="men.html">Dresses</a></li>
									<li><a href="men.html">Handbags</a></li>
									<li><a href="men.html">Trousers</a></li>
									<li><a href="men.html">Jeans</a></li>
									<li><a href="men.html">T-Shirts</a></li>
									<li><a href="men.html">Shoes</a></li>
									<li><a href="men.html">Coats</a></li>
									<li><a href="men.html">Accessories</a></li>
								</ul>	
							</div>							
						</div>
						<div class="col2">
							<div class="h_nav">
								<h4>Trends</h4>
								<ul>
									<li class>
										<div class="p_left">
										   <img src="images/t1.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
									<li>
										<div class="p_left">
										  <img src="images/t2.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
									<li>
										<div class="p_left">
										   <img src="images/t3.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
								</ul>	
							</div>												
						</div>
					  </div>
					</div>
			</li>
			<li><a class="color3" href="404.html">Accessories</a></li>
			<li><a class="color7" href="#">Women Fashion</a>
				<div class="megapanel">
					<div class="row">
						<div class="col1">
							<div class="h_nav">
								<h4>Men</h4>
								<ul>
									<li><a href="men.html">Jackets</a></li>
									<li><a href="men.html">Blazers</a></li>
									<li><a href="men.html">Suits</a></li>
									<li><a href="men.html">Trousers</a></li>
									<li><a href="men.html">Jeans</a></li>
									<li><a href="men.html">Shirts</a></li>
									<li><a href="men.html">Sweatshirts & Hoodies</a></li>
									<li><a href="men.html">Swem Wear</a></li>
									<li><a href="men.html">Accessories</a></li>
								</ul>	
							</div>							
						</div>
						<div class="col1">
							<div class="h_nav">
								<h4>Women</h4>
								<ul>
									<li><a href="men.html">Outerwear</a></li>
									<li><a href="men.html">Dresses</a></li>
									<li><a href="men.html">Handbags</a></li>
									<li><a href="men.html">Trousers</a></li>
									<li><a href="men.html">Jeans</a></li>
									<li><a href="men.html">T-Shirts</a></li>
									<li><a href="men.html">Shoes</a></li>
									<li><a href="men.html">Coats</a></li>
									<li><a href="men.html">Accessories</a></li>
								</ul>	
							</div>							
						</div>
						<div class="col2">
							<div class="h_nav">
								<h4>Trends</h4>
								<ul>
									<li class>
										<div class="p_left">
										   <img src="images/t1.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
									<li>
										<div class="p_left">
										  <img src="images/t2.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
									<li>
										<div class="p_left">
										   <img src="images/t3.jpg" class="img-responsive" alt=""/>
										</div>
										<div class="p_right">
											<h4><a href="#">Denim shirt</a></h4>
											<span class="item-cat"><small><a href="#">Jackets</a></small></span>
											<span class="price">29.99 $</span>
										</div>
										<div class="clearfix"> </div>
									</li>
								</ul>	
							</div>												
						</div>
					  </div>
					</div>
			</li>
			<li><a class="color8" href="blog.html">Blog</a></li>
			<div class="clearfix"> </div>
		 </ul>
	  </div>
</div>
</div>

<div class="men">
	<div class="container">
	    <div class="col-md-12 register">
	    	<?
	 	if (isset($_SESSION['login_user'])) {
		
		?>
	    	
		  	  <form id="postPropertyFormBean" name="postPropertyForm" action="listProperty.php" method="post" onsubmit="return validateForm(this);"> 
				 <div class="register-top-grid">
					<h3>PROPERTY INFORMATION</h3>
					 <div>
						<span>User Name<label>*</label></span>
						<input type="text" name='user_id' value='<?echo $userid;?>' maxlength="10">  
					 </div>
					 <div>
						<span>Property Name<label>*</label></span>
						<input id="propertyName" name="propertyName" type="text"  maxlength="25"> 
					 </div>
					 <div>
						 <span>Email Address<label>*</label></span>
						 <input type="text" id="email" name="email" > 
					 </div>
					<div>
						<span>Contact Numbers<label>*</label></span>
						<input type="text"  id="contactNumbers" name="contactNumbers" > 
					 </div>

					 <!-- div class="clearfix"> </div -->
					 
					<div>
						<span>Property Type<label></label></span>
						<input type="text" id="sellId" name="property_type"> 
					 </div>
					 <div>
						<span>State<label></label></span>
						<input type="text" id="state" name="state">
						<input type="hidden" value="India" name="country"> 
						<input type="hidden" value="Yes" name="property_availbility">
					 </div>

				 </div>
				 <div class="register-bottom-grid">
					<h3>LOCATION</h3>
							 <div>
								<span>City<label>*</label></span>
								<input type="text"  id="city" name="city" maxlength="25" >
							 </div>
							 <div>
								<span>Locality<label>*</label></span>
								<input type="text" id="locality" name="locality" maxlength="25" >
							 </div>
							<div>
								<span>Builders / Promoters Address<label>*</label></span>
								<input type="text" id="address" name="address" maxlength="25" >
							 </div>
							 <div>
								<span>Bedrooms / BHK (1,2,3,4)<label>*</label></span>
								<input type="text"  id="bedrooms" name="bedrooms" maxlength="14" >
							 </div>
							 
						
				</div>
				<div class="register-bottom-grid">
							<div>
								<span>Built area in Sq.Ft<label>*</label></span>
								<input type="text" id="coveredArea" name="coveredArea" maxlength="14" >
							 </div>
							 <div>
								<span>Land / Plot in Sq.Ft<label>*</label></span>
								<input type="text"  id="plotArea" name="plotArea" maxlength="14" >
							 </div>
							 
				</div>
				<div class="register-bottom-grid">
						<h3>PRICE</h3>
							<div>
								<span>Total Price in Rs.<label>*</label></span>
								<input type="text" id="totalPrice" name="totalPrice" maxlength="14" >
							 </div>
							 <div>
								<span>Description<label>*</label></span>
								<input type="text"  id="amenity" name="amenity" maxlength="100" >
							 </div>
							 
							 <div class="clearfix"> </div>
				</div>


				
				<div class="clearfix"> </div>
				<div class="register-but">
				
				   <input type="submit"  value="submit" name="submit" background-color="#e05b5b">
					   <div class="clearfix"> </div>
				
				</div>
			   </form>
		   <?
		}
		else
		{
	  		echo "<h2>Please login before posting your property details! </h2>"; 	
			echo '<a href="userLogin.php">Click here to login.</a>';
		}
	
		?>
			   
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
		<p class="copy">Copyright&copy; 2015  <a href="http://www.propertyind.com/contactUs.php" target="_blank"> Webarch Solutions</a></p>
	</div>
</div>
</body>
</html>	
	
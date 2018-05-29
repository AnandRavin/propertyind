	
	var operatingInCount = 1;
	var imgStr = '<img src="images/icons/icn_error.gif" alt="" align="absmiddle" /> ';
	
	function validateRegEmail(form, actionType){
		var rulesForEmail = new Rules();
		rulesForEmail.addRule('ubiemail','required',{args:'', errorMessage:'Email is required', errorDiv:'emailErr', failedDiv:'', okDiv:''});
		rulesForEmail.addRule('ubiemail','validemail',{args:'', errorMessage:'Email is invalid', errorDiv:'emailErr', failedDiv:'', okDiv:''});
		var v = new Validator(form, rulesForEmail);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var retFlag = v.validate(true);
		var tempFlag = true;
		if(retFlag == "1"){
			ajaxService.isEmailExist(DWRUtil.getValue("ubiemail"), actionType, {callback: function(flag){
				if(flag){
					document.getElementById("emailErr").innerHTML =  "This Email Id is already registered with us, kindly use another.";
					document.getElementById("emailErr").style.display = "block";
					document.getElementById("ubiemail").focus();
					tempFlag = false;
				}
			},async:false})
		}
		return tempFlag;
	}
	
	function validateMobile(form, actionType){
		var rulesForMobile = new Rules();
		rulesForMobile.addRule('ubimobile','required',{args:'', errorMessage:'Mobile is required', errorDiv:'mobilelErr', failedDiv:'', okDiv:''});
		var v = new Validator(form, rulesForMobile);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var retFlag = v.validate(true);
		var tempFlag = true;
		
		if(retFlag){
			var mobile = DWRUtil.getValue("ubimobile");
			var mobileArr = mobile.split("/");
			var mobileFlag = false;
			if(mobileArr.length > 5){
				document.getElementById("mobilelErr").innerHTML =  "No of mobile numbers cannot exceed 5.";
				document.getElementById("mobilelErr").style.display = "block";
				mobileFlag = true;
				tempFlag = false;
			}else{
				for(var j = 0; j < mobileArr.length; j++){
					if(mobileArr[j].length != 10){
						document.getElementById("mobilelErr").innerHTML =  "Mobile no must be of 10 digits."; 
						document.getElementById("mobilelErr").style.display = "block";
						document.getElementById("ubimobile").focus();
						mobileFlag = true;
						tempFlag = false;
						break;
					}
				}
				for(var j = 0; j < mobileArr.length; j++){					
					if(tempFlag && mobileArr[j].charAt(0) != '9' && mobileArr[j].charAt(0) != '8' && mobileArr[j].charAt(0) != '7'){
						document.getElementById("mobilelErr").innerHTML =  "Mobile no is invalid."; 
						document.getElementById("mobilelErr").style.display = "block";
						document.getElementById("ubimobile").focus();
						mobileFlag = true;
						tempFlag = false;
						break;
					}
				}
			}
			if(!mobileFlag){
				ajaxService.isMobileExist(mobileArr[0], actionType, {callback: function(flag){
					if(flag){
						document.getElementById("mobilelErr").innerHTML =  "This Mobile no is already registered with us, kindly use another.";
						document.getElementById("mobilelErr").style.display = "block";
						document.getElementById("ubimobile").focus();
						tempFlag = false;
					}
				},async:false})
			}
		}else
			tempFlag = false;
		return tempFlag;
	}
	
	function checkForLoginAvailability(form){
		var loginId = Trim(document.getElementById("ubilogin").value);
		var loginIdObj = document.getElementById("ubilogin");
		var mobile = Trim(document.getElementById("ubimobile").value);
		var landLine = Trim(document.getElementById("ubiphone3").value);
		document.getElementById("availabilityStatus").style.display = "none";
		var rulesForLoginAvailability = new Rules();
		rulesForLoginAvailability.addRule('ubilogin','required',{args:'', errorMessage:'Username is required', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesForLoginAvailability.addRule('ubilogin','minlength',{args:'6', errorMessage:'Username cannot be less than 6 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesForLoginAvailability.addRule('ubilogin','maxlength',{args:'12', errorMessage:'Username cannot be more than 12 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesForLoginAvailability.addRule('ubilogin','mask',{args:'^[a-zA-Z0-9_]*$', errorMessage:'Username is invalid', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		
		var v = new Validator(form, rulesForLoginAvailability);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var retFlag = v.validate(true);
		
		var flagType = true;
		var resultStr = "";
		if(retFlag){
			document.getElementById("availabilityStatus").innerHTML="<font color='red'>Checking Availability of Login Id. Please wait...</font>"
			document.getElementById("availabilityStatus").style.display = "block";
			ajaxService.checkForLoginAvailability(loginId, {callback: function(flag){
				if(flag)
					resultStr = "<font color='red'>This username is not available. Please enter another username.</font>";
				else
					resultStr = "<font color='red'>This username is available.</font>";
			},async:false})
			document.getElementById("availabilityStatus").innerHTML = resultStr;
		}
			
	}
	
	function ForceNumbersOnly(myfield, e, type, sendSms){
	    var key;
	    var keychar;
	    if (window.event)	    {
	        key = window.event.keyCode;
	    }else if (e){
	        key = e.which;
	    }else{
	        return true;
	    }
	    if(key != 44 && key > 31 && (key < 48 || key > 57) && key != 47){
	        return false;
	    }else{
	    	if(key == 47 && type == "L") 
	    		return false;
	    	if(type == "M" && sendSms != undefined && sendSms != null){
	    		sendSms.disabled = false;
	    		sendSms.checked = true;
	    	}
	        return true;
	    }
	}
	
	function selectAll(checkboxObj, groupId){ 
		var groupObj = document.getElementsByName(groupId);
		if(checkboxObj.value == "selectAll")
			for(var i = 0; i < groupObj.length; i++)
				groupObj[i].checked = checkboxObj.checked;
		else
			groupObj[0].checked = false; 
	}
	
	function specialHandlingForStateCity(stateId, otherStateId, cityId, otherCityId){
		if(DWRUtil.getText(stateId) == "Other" && Trim(DWRUtil.getValue(otherStateId)).length == 0){
			document.getElementById('stateErr').innerHTML = "Please enter other state value";
			document.getElementById('stateErr').style.display = "block";
			return false;
		}
		if(DWRUtil.getValue(cityId) == "-1" && Trim(DWRUtil.getValue(otherCityId)).length == 0){
			document.getElementById('cityErr').innerHTML = "Please select / enter 'City";
			document.getElementById('cityErr').style.display = "block";
			return false;
		}
		return true;
	}
	
	function validateLoginDetailForm(form){
		if(!validateContent(form,'ubiaddress1 ubiaddress2')){
	 		return false;
	 	}
		var rulesLoginDetailForm = new Rules();
		document.getElementById('stateErr').style.display = "none";
		document.getElementById('cityErr').style.display = "none";
		rulesLoginDetailForm.addRule('ubifname','required',{args:'', errorMessage:'First name is required', errorDiv:'fNameErr', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('ubifname','mask',{args:'^[a-zA-Z. ]*$', errorMessage:'First name is invalid', errorDiv:'fNameErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('ubilname','required',{args:'', errorMessage:'Last name is required', errorDiv:'lNameErr', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('ubilname','mask',{args:'^[a-zA-Z. ]*$', errorMessage:'Last name is invalid', errorDiv:'lNameErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('selectedcountry','required',{args:'', errorMessage:'Country is required', errorDiv:'countryErr', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('selectedstate','required',{args:'', errorMessage:'State is required', errorDiv:'stateErr', failedDiv:'', okDiv:''});
		if(DWRUtil.getText('selectedstate') != "Other")
			rulesLoginDetailForm.addRule('selectedcity','required',{args:'', errorMessage:'City is required', errorDiv:'cityErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('sendSms','requiredif',{args:'ubimobile', errorMessage:'Mobile is required to receive SMS', errorDiv:'sendSmsErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('ubifax3','mask',{args:'^[0-9 ]*$', errorMessage:'Fax number must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('ubifax2','mask',{args:'^[0-9 ]*$', errorMessage:'City code must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('ubifax1','mask',{args:'^[0-9 ]*$', errorMessage:'Country code must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('ubiurl','validwebsiteurl',{args:'', errorMessage:'Website URL is invalid', errorDiv:'urlErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('ubiphone3','requiredif',{args:'ubiphone1', errorMessage:'Country Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		rulesLoginDetailForm.addRule('ubiphone3','requiredif',{args:'ubiphone2', errorMessage:'City Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		if(Trim(document.getElementById('ubiphone3').value).length > 0)
			rulesLoginDetailForm.addRule('ubiphone3','minlength',{args:'5', errorMessage:'Landline number cannot be less than 5 digits', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('contactMeThrough','required',{args:'', errorMessage:'Please select atleast one contact option.', errorDiv:'contactMeThroughErr', failedDiv:'', okDiv:''});
		
		//if(confirm("Editing your contact details(Mobile/Landline/E-mail) will make your profile unverified untill moderation. Do you want to continue?")){ 
			var v = new Validator(form, rulesLoginDetailForm);
			v.method = TEXT;
			v.globalDiv = 'allError';
			var returnFlag = v.validate(true);
			var otherStateCity = specialHandlingForStateCity('selectedstate', 'otherState', 'selectedcity', 'otherCity');
			
			var retArr = twoContactsMandatory('ubiemail', 'ubimobile', 'ubiphone3', v.focus);
			var emailFlag = true;
			var mobileFlag = true;
			if(retArr['email'] == 'false')
				emailFlag = validateRegEmail(form, 'edit');
			if(retArr['mobile'] == 'false')
				mobileFlag = validateMobile(form, 'edit');
			
			if(retArr['count'] == 'false'){
				document.getElementById('landlineErr1').style.display = "block";
			 	document.getElementById('landlineErr1').innerHTML = "Either of two are mandatory from email / mobile no / landline no.";
	 		}
		
			if(returnFlag && emailFlag && mobileFlag && otherStateCity && retArr['count'] == 'true'){
				document.getElementById('error_top_Div').innerHTML = imgStr + '<form:errors />';
				return true;
			}else{
				document.getElementById('error_top_Div').style.display = "block";
				document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
				return false;
			}
		//}else
		//	return false;
	}
	
	function validateIndiatimesForm(form){
		var rulesIndiatimesForm = new Rules();
		document.getElementById('stateErr').style.display = "none";
		document.getElementById('cityErr').style.display = "none";
		rulesIndiatimesForm.addRule('ubiusertype','required',{args:'', errorMessage:'Please select one User type', errorDiv:'userTypeErr', failedDiv:'', okDiv:''});
		
		rulesIndiatimesForm.addRule('ubiphone3','requiredif',{args:'ubiphone1', errorMessage:'Country Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		rulesIndiatimesForm.addRule('ubiphone3','requiredif',{args:'ubiphone2', errorMessage:'City Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		if(Trim(document.getElementById('ubiphone3').value).length > 0)
			rulesIndiatimesForm.addRule('ubiphone3','minlength',{args:'5', errorMessage:'Landline number cannot be less than 5 digits', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		
		rulesIndiatimesForm.addRule('selectedcountry','required',{args:'', errorMessage:'Country is required', errorDiv:'countryErr', failedDiv:'', okDiv:''});
		rulesIndiatimesForm.addRule('selectedstate','required',{args:'', errorMessage:'State is required', errorDiv:'stateErr', failedDiv:'', okDiv:''});
		if(DWRUtil.getText('selectedstate') != "Other")
			rulesIndiatimesForm.addRule('selectedcity','required',{args:'', errorMessage:'City is required', errorDiv:'cityErr', failedDiv:'', okDiv:''});
		
		rulesIndiatimesForm.addRule('sendSms','requiredif',{args:'ubimobile', errorMessage:'Mobile is required to receive SMS', errorDiv:'sendSmsErr', failedDiv:'', okDiv:''});
		
		rulesIndiatimesForm.addRule('ubifax3','mask',{args:'^[0-9 ]*$', errorMessage:'Fax number must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		rulesIndiatimesForm.addRule('ubifax2','mask',{args:'^[0-9 ]*$', errorMessage:'City code must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		rulesIndiatimesForm.addRule('ubifax1','mask',{args:'^[0-9 ]*$', errorMessage:'Country code must be numeric.', errorDiv:'faxErr', failedDiv:'', okDiv:''});
		
		rulesLoginDetailForm.addRule('ubiurl','validwebsiteurl',{args:'', errorMessage:'Website URL is invalid', errorDiv:'urlErr', failedDiv:'', okDiv:''});
		
		rulesIndiatimesForm.addRule('contactMeThrough','required',{args:'', errorMessage:'Please select atleast one contact option.', errorDiv:'contactMeThroughErr', failedDiv:'', okDiv:''});
		
		var v = new Validator(form, rulesIndiatimesForm);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		var otherStateCity = specialHandlingForStateCity('selectedstate', 'otherState', 'selectedcity', 'otherCity');
		
		var retArr = twoContactsMandatory('ubiemail', 'ubimobile', 'ubiphone3', v.focus);
		var emailFlag = true;
		var mobileFlag = true;
		if(retArr['email'] == 'false')
			emailFlag = validateRegEmail(form, 'newReg');
		if(retArr['mobile'] == 'false')
			mobileFlag = validateMobile(form, 'newReg');
		
		if(retArr['count'] == 'false'){
			document.getElementById('landlineErr1').style.display = "block";
		 	document.getElementById('landlineErr1').innerHTML = "Either of two are mandatory from email / mobile no / landline no.";
	 	}
		
		if(returnFlag && emailFlag && mobileFlag && otherStateCity && retArr['count'] == 'true'){
			document.getElementById('error_top_Div').innerHTML = imgStr + '<form:errors />';
			return true;
		}else{
			document.getElementById('error_top_Div').style.display = "block";
			document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
			return false;
		}
	}
	
	function validateStep1Form(form){
		var rulesStep1Form = new Rules();
		document.getElementById('stateErr').style.display = "none";
		document.getElementById('cityErr').style.display = "none";
		rulesStep1Form.addRule('ubiusertype','required',{args:'', errorMessage:'Please select one User type', errorDiv:'userTypeErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubifname','required',{args:'', errorMessage:'First name is required', errorDiv:'nameErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubifname','mask',{args:'^[a-zA-Z]*$', errorMessage:'First name is invalid', errorDiv:'nameErr', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('ubilogin','required',{args:'', errorMessage:'Username is required', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubilogin','minlength',{args:'6', errorMessage:'Username cannot be less than 6 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubilogin','maxlength',{args:'12', errorMessage:'Username cannot be more than 12 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubilogin','mask',{args:'^[a-zA-Z0-9_]*$', errorMessage:'Username is invalid', errorDiv:'loginErr', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('ubipass','required',{args:'', errorMessage:'Password is required', errorDiv:'passwordErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubipass','minlength',{args:'6', errorMessage:'Password cannot be less than 6 characters', errorDiv:'passwordErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubipass','maxlength',{args:'14', errorMessage:'Password cannot be more than 14 characters', errorDiv:'passwordErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubipass','mask',{args:'^[a-zA-Z0-9_]*$', errorMessage:'Password is invalid', errorDiv:'passwordErr', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('ubiconfirmpass','required',{args:'', errorMessage:'Password & Confirm password must be same.', errorDiv:'confirmPasswordErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubiconfirmpass','matchfields',{args:'ubipass', errorMessage:'Password & Confirm password must be same.', errorDiv:'confirmPasswordErr', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('ubiphone3','requiredif',{args:'ubiphone1', errorMessage:'Country Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('ubiphone3','requiredif',{args:'ubiphone2', errorMessage:'City Code is required for Landline', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		if(Trim(document.getElementById('ubiphone3').value).length > 0)
			rulesStep1Form.addRule('ubiphone3','minlength',{args:'5', errorMessage:'Landline number cannot be less than 5 digits', errorDiv:'landlineErr1', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('selectedcountry','required',{args:'', errorMessage:'Country is required', errorDiv:'countryErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('selectedstate','required',{args:'', errorMessage:'State is required', errorDiv:'stateErr', failedDiv:'', okDiv:''});
		if(DWRUtil.getText('selectedstate') != "Other")
			rulesStep1Form.addRule('selectedcity','required',{args:'', errorMessage:'City is required', errorDiv:'cityErr', failedDiv:'', okDiv:''});
		
		rulesStep1Form.addRule('sendSms','requiredif',{args:'ubimobile', errorMessage:'Mobile is required to receive SMS', errorDiv:'sendSmsErr', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('j_captcha_response','required',{args:'', errorMessage:'Enter the correct verification code as shown in blue.', errorDiv:'j_captcha_response_error', failedDiv:'', okDiv:''});
		rulesStep1Form.addRule('termsAndConditions','required',{args:'', errorMessage:'Please read Terms & Conditions & accept by selecting the check box', errorDiv:'termsAndConditionsErr', failedDiv:'', okDiv:''});
		
		//checkForLoginAvailability(form);
					                  
        var v = new Validator(form, rulesStep1Form);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		var otherStateCity = specialHandlingForStateCity('selectedstate', 'otherState', 'selectedcity', 'otherCity');
		
		var retArr = twoContactsMandatory('ubiemail', 'ubimobile', 'ubiphone3', v.focus);
		var emailFlag = true;
		var mobileFlag = true;
		if(retArr['email'] == 'false')
			emailFlag = validateRegEmail(form, 'newReg');
		if(retArr['mobile'] == 'false')
			mobileFlag = validateMobile(form, 'newReg');
		
		if(retArr['count'] == 'false'){
			document.getElementById('landlineErr1').style.display = "block";
		 	document.getElementById('landlineErr1').innerHTML = "Either of two are mandatory from email / mobile no / landline no.";
	 	}
		
		if(returnFlag && emailFlag && mobileFlag && otherStateCity && retArr['count'] == 'true'){
			document.getElementById('error_top_Div').innerHTML = imgStr + '<form:errors />';
			return true;
		}else{
			document.getElementById('error_top_Div').style.display = "block";
			document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
			return false;
		}
	 }
	 
	 
	 function twoContactsMandatory(emailId, mobileId, landlineId, focus){
	 	//alert(focus);
	 	var email = Trim(document.getElementById(emailId).value);
	 	var mobile = Trim(document.getElementById(mobileId).value);
	 	var landline = Trim(document.getElementById(landlineId).value);
	 	if(focus != 'ubiphone3')
	 		document.getElementById('landlineErr1').style.display = "none";
	 	document.getElementById('mobilelErr').style.display = "none";
	 	document.getElementById('emailErr').style.display = "none";
	 	var retArr = new Object();
	 	var count = 0;
	 	if(email.length == 0){
	 		count++;
	 		retArr['email'] = 'true';
	 	}else
	 		retArr['email'] = 'false';
	 		
	 	if(mobile.length == 0){
	 		count++;
	 		retArr['mobile'] = 'true';
	 	}else
	 		retArr['mobile'] = 'false';
	 		
	 	if(landline.length == 0){
	 		count++;
	 		retArr['landline'] = 'true';
	 	}else
	 		retArr['landline'] = 'false';
	 	
	 	retArr['count'] = 'true';
	 	if(count > 1){
	 		retArr['count'] = 'false';
	 		if(focus == '' || focus == 'j_captcha_response' || focus == 'termsAndConditions'){
	 			if(email.length == 0){
	 				document.getElementById(emailId).focus();
	 			}else if(mobile.length == 0){
	 				document.getElementById(mobileId).focus();
	 			}else if(landline.length == 0){
	 				document.getElementById(landlineId).focus();
	 			}
	 		}
	 	}
	 	return retArr;
	 }
	 
	 function validateOperatingIn(form, focus){
	 	var rulesStep2Form = new Rules(); 
	 	
	 	rulesStep2Form.addRule('abiOperatingInCountry1','required',{args:'', errorMessage:'Please select country', errorDiv:'operatingInErr1', failedDiv:'', okDiv:''});
	 	rulesStep2Form.addRule('abiOperatingInState1','required',{args:'', errorMessage:'Please select state', errorDiv:'operatingInErr1', failedDiv:'', okDiv:''});
	 	rulesStep2Form.addRule('abiOperatingInCity1','required',{args:'', errorMessage:'Please select city', errorDiv:'operatingInErr1', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiOperatingInCity1','maxlength',{args:'5', errorMessage:'Please select maximum 5 cities', errorDiv:'operatingInErr1', failedDiv:'', okDiv:''});
		
	 	if(document.getElementById("abiOperatingInState2").value != "-1"){
	 		rulesStep2Form.addRule('abiOperatingInCity2','required',{args:'', errorMessage:'Please select city', errorDiv:'operatingInErr2', failedDiv:'', okDiv:''});
			rulesStep2Form.addRule('abiOperatingInCity2','maxlength',{args:'5', errorMessage:'Please select maximum 5 cities', errorDiv:'operatingInErr2', failedDiv:'', okDiv:''});
	 	}
		if(document.getElementById("abiOperatingInState3").value != "-1"){
	 		rulesStep2Form.addRule('abiOperatingInCity3','required',{args:'', errorMessage:'Please select city', errorDiv:'operatingInErr3', failedDiv:'', okDiv:''});
			rulesStep2Form.addRule('abiOperatingInCity3','maxlength',{args:'5', errorMessage:'Please select maximum 5 cities', errorDiv:'operatingInErr3', failedDiv:'', okDiv:''});
	 	}
	 	if(document.getElementById("abiOperatingInState4").value != "-1"){
	 		rulesStep2Form.addRule('abiOperatingInCity4','required',{args:'', errorMessage:'Please select city', errorDiv:'operatingInErr4', failedDiv:'', okDiv:''});
			rulesStep2Form.addRule('abiOperatingInCity4','maxlength',{args:'5', errorMessage:'Please select maximum 5 cities', errorDiv:'operatingInErr4', failedDiv:'', okDiv:''});
	 	}
	 	if(document.getElementById("abiOperatingInState5").value != "-1"){
	 		rulesStep2Form.addRule('abiOperatingInCity5','required',{args:'', errorMessage:'Please select city', errorDiv:'operatingInErr5', failedDiv:'', okDiv:''});
			rulesStep2Form.addRule('abiOperatingInCity5','maxlength',{args:'5', errorMessage:'Please select maximum 5 cities', errorDiv:'operatingInErr5', failedDiv:'', okDiv:''});
	 	}
		var v = new Validator(form, rulesStep2Form);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(false);
		if(focus == 'abiContactPerson' ||  focus == 'abiCompanyName' || focus == 'abiOperatingSince' || focus == 'abiTitle')
			document.getElementById(focus).focus();
		return returnFlag;
	 }
	 
	 function validateStep2Form(form){
	 	document.getElementById("operatingInCount").value = operatingInCount;
	 	
	 	var rulesStep2Form = new Rules(); 
		rulesStep2Form.addRule('abiContactPerson','required',{args:'', errorMessage:'Contact person name is required', errorDiv:'contactPersonErr', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiContactPerson','mask',{args:'^[a-zA-Z. ]*$', errorMessage:'Contact person name is invalid', errorDiv:'contactPersonErr', failedDiv:'', okDiv:''});
		
		rulesStep2Form.addRule('abiCompanyName','required',{args:'', errorMessage:'Company name is required', errorDiv:'companyNameErr', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiCompanyName','mask',{args:'^[a-zA-Z0-9.,() &/]*$', errorMessage:'Company name is invalid', errorDiv:'companyNameErr', failedDiv:'', okDiv:''});
		
		rulesStep2Form.addRule('abiOperatingSince','required',{args:'', errorMessage:'Operating Since is required', errorDiv:'operatingSinceErr', failedDiv:'', okDiv:''});
		
		rulesStep2Form.addRule('abiTitle','required',{args:'', errorMessage:'Title is required', errorDiv:'titleErr', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiTitle','mask',{args:'^[a-zA-Z0-9.&,/() ]*$', errorMessage:'Title is invalid', errorDiv:'titleErr', failedDiv:'', okDiv:''});
		
		if(DWRUtil.getValue("userType") == "A")
			rulesStep2Form.addRule('abiTransationType','required',{args:'', errorMessage:'Please select atleast one transaction type.', errorDiv:'transactionTErr', failedDiv:'', okDiv:''});
			
		rulesStep2Form.addRule('abiPropertyType','required',{args:'', errorMessage:'Please select atleast one property type.', errorDiv:'propertyTErr', failedDiv:'', okDiv:''});
		
		rulesStep2Form.addRule('abiDescription','required',{args:'', errorMessage:'Description is required', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiDescription','minlength',{args:'100', errorMessage:'Description cannot be less than 100 characters.', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		rulesStep2Form.addRule('abiDescription','maxlength',{args:'3000', errorMessage:'Description cannot be more than 3000 characters.', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		
		if(DWRUtil.getValue("userType") == "A")	
			rulesStep2Form.addRule('abiAuthrisedAgentsOf','maxlength',{args:'3000', errorMessage:'Authorised agent cannot be more than 3000 characters.', errorDiv:'authrisedAgentsErr', failedDiv:'', okDiv:''});
				
		if(DWRUtil.getValue("userType") == "B"){
			rulesStep2Form.addRule('abiCurrentProjects','maxlength',{args:'3000', errorMessage:'Current project cannot be more than 3000 characters.', errorDiv:'currentProjectsErr', failedDiv:'', okDiv:''});
			
			rulesStep2Form.addRule('abiPastProjects','maxlength',{args:'3000', errorMessage:'Past projects cannot be more than 3000 characters.', errorDiv:'pastProjectsErr', failedDiv:'', okDiv:''});	
		}
		var v = new Validator(form, rulesStep2Form);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		var operatingInFlag = validateOperatingIn(form, v.focus);
		
		//alert(returnFlag+"/"+operatingInFlag);
		
		if(returnFlag && operatingInFlag){
			document.getElementById('error_top_Div').innerHTML = imgStr + '<form:errors />';
			return true;
		}else{
			document.getElementById('error_top_Div').style.display = "block";
			document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
			return false;
		}
	 }
	 
	 
	 function validatePasswordForm(form){
	 	document.getElementById("loginErr").style.display = "none";
	 	document.getElementById("emailErr").style.display = "none";
	 	document.getElementById("errMsg1").style.display = "none";
	 	if(document.getElementById("errMsg2") != undefined && document.getElementById("errMsg2") != null)
	 		document.getElementById("errMsg2").style.display = "none";
	 	
	 	var rulesPasswordSubmit = new Rules();
	 	var loginId = Trim(document.getElementById("loginId").value);
	 	var emailId = Trim(document.getElementById("emailId").value);
	 	var mobile = Trim(document.getElementById("mobile").value);
	 	var count = 0;
		
		if(loginId.length > 0)  
			count++;
		if(emailId.length > 0)  
			count++;
		if(mobile.length > 0)  
			count++;

		if(count == 0 || count > 1){
			document.getElementById("errMsg1").style.display = "";
			return false;
		}else{
			if(loginId.length > 0){
				rulesPasswordSubmit.addRule('loginId','minlength',{args:'6', errorMessage:'Username cannot be less than 6 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
				rulesPasswordSubmit.addRule('loginId','maxlength',{args:'12', errorMessage:'Username cannot be more than 12 characters', errorDiv:'loginErr', failedDiv:'', okDiv:''});
				rulesPasswordSubmit.addRule('loginId','mask',{args:'^[a-zA-Z0-9_]*$', errorMessage:'Username is invalid', errorDiv:'loginErr', failedDiv:'', okDiv:''});
			}else if(emailId.length > 0){
				rulesPasswordSubmit.addRule('emailId','validemail',{args:'', errorMessage:'Email Id is invalid', errorDiv:'emailErr', failedDiv:'', okDiv:''});
			}
		}
		var v = new Validator(form, rulesPasswordSubmit);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		if(returnFlag)
			return true;
		else
			return false;
	 }
	 
	function validateChangePassForm(form, typeStr){
		var rulesChangePasswordSubmit = new Rules();
		if(typeStr == "superUser")
			rulesChangePasswordSubmit.addRule('oldPassword','required',{args:'', errorMessage:'Please enter your current password', errorDiv:'oldPasswordErr', failedDiv:'', okDiv:''});
		
		rulesChangePasswordSubmit.addRule('newPassword','required',{args:'', errorMessage:'New password is a required field', errorDiv:'newPasswordErr', failedDiv:'', okDiv:''});
		rulesChangePasswordSubmit.addRule('newPassword','minlength',{args:'6', errorMessage:'New password cannot be less than 6 characters', errorDiv:'newPasswordErr', failedDiv:'', okDiv:''});
		rulesChangePasswordSubmit.addRule('newPassword','maxlength',{args:'14', errorMessage:'New password cannot be more than 14 characters', errorDiv:'newPasswordErr', failedDiv:'', okDiv:''});
		rulesChangePasswordSubmit.addRule('newPassword','mask',{args:'^[a-zA-Z0-9_]*$', errorMessage:'New password is invalid', errorDiv:'newPasswordErr', failedDiv:'', okDiv:''});
		
		if(typeStr == "superUser")
			rulesChangePasswordSubmit.addRule('newPassword','matchfields',{args:'oldPassword-unequal', errorMessage:'New password can\'t be same as existing password.', errorDiv:'newPasswordErr', failedDiv:'', okDiv:''});
		
		rulesChangePasswordSubmit.addRule('confirmPassword','matchfields',{args:'newPassword', errorMessage:'New password & Confirm password must be same', errorDiv:'confirmPasswordErr', failedDiv:'', okDiv:''});
		 	
		var v = new Validator(form, rulesChangePasswordSubmit);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		if(returnFlag)
			return true;
		else{
			document.getElementById('error_top_Div').style.display = "block";
			document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
			return false;
		}
	}
	
	function updateMobile(form){
		var flag = validateMobile(form, 'edit');
		if(flag){
			var mobile = $("ubimobile").value;
			ajaxService.updateMobile(mobile, {callback: function(retStr){
				var strArr = retStr.split("#");
				if(strArr[0] == "false"){
					document.getElementById("mobilelErr").innerHTML =  strArr[1];
					document.getElementById("mobilelErr").style.display = "";
				}else if(strArr[0] == "true"){
					document.getElementById("editMobileForm").style.display = "none";
					document.getElementById("successMsgSpan").innerHTML =  strArr[1];
					document.getElementById("successMsgDiv").style.display = "block";
				}
			},async:false})
		}
	}
	
	function showNextSpan(){
		operatingInCount++;
		var nextSpanId = operatingInCount + "_operIn";
		document.getElementById(nextSpanId).style.display = "";
		if(operatingInCount >= 5){
			document.getElementById("addMoreLink").style.display = "none";
		}
	}
	
	function clearFields(otherState, otherCity){
		document.getElementById(otherState).value = "";
		document.getElementById(otherState).setAttribute('readonly', 'true');
		document.getElementById(otherCity).value = "";
	}
	
	function resetOtherState(selectedstate, otherState, otherCity){
		document.getElementById(otherState).value = "";
		document.getElementById(otherCity).value = "";
		var selStateObjT = document.getElementById(selectedstate);
		for(var k = 0; k < selStateObjT.length; k++){
			if(selStateObjT[k].selected && selStateObjT[k].text == 'Other'){
				document.getElementById(otherState).removeAttribute('readonly');
				break;
			}
		}
	}
	
	function populateMBPCategory(chkboxName){
		var tempStr = "";
		var cbObj = document.getElementsByName(chkboxName);
		var previousCatVal = document.getElementById("mbpCategory").value;
		for(var i = 0; i < cbObj.length; i++){
			if(cbObj[i].checked){
				if(Trim(tempStr).length == 0)
					tempStr = cbObj[i].value;
				else
					tempStr = tempStr + "," + cbObj[i].value;
			}
		}
		ajaxService.populateCategory(tempStr, {callback: function(data){
			if(data){					
				DWRUtil.removeAllOptions("mbpCategory");
				DWRUtil.addOptions("mbpCategory", data);
			}
		},async:false})
		
		//alert(previousCatVal);
		var flag = true;
		if(previousCatVal != "-1"){
			var catObj = document.getElementById("mbpCategory");
			for(var i = 0; i < catObj.length; i++){
				//alert(catObj[i].value +"::"+ previousCatVal);
				if(catObj[i].value == previousCatVal){
					catObj[i].selected = previousCatVal;
					flag = false;
					break;
				}
			}
		}
		
		if(flag || Trim(tempStr).length == 0)
			populateSubCatTemp(null);
			
		if(Trim(tempStr) == "D"){
			document.getElementById("domBudgId").style.display = "";
			document.getElementById("comBudgId").style.display = "none";
			document.getElementById("commertialMinBudget").value = "";
			document.getElementById("commertialMaxBudget").value = "";
		}else if(Trim(tempStr) == "C"){
			document.getElementById("domBudgId").style.display = "none";
			document.getElementById("comBudgId").style.display = "";
			document.getElementById("domesticMinBudget").value = "";
			document.getElementById("domesticMaxBudget").value = "";
		}else if(Trim(tempStr) == "D,C"){
			document.getElementById("domBudgId").style.display = "";
			document.getElementById("comBudgId").style.display = "";
		}else{
			document.getElementById("domBudgId").style.display = "none";
			document.getElementById("comBudgId").style.display = "none";
			document.getElementById("commertialMinBudget").value = "";
			document.getElementById("commertialMaxBudget").value = "";
			document.getElementById("domesticMinBudget").value = "";
			document.getElementById("domesticMaxBudget").value = "";
		}
	}
	
	function populateSubCatTemp(categoryObj){
		var selCategory = "";
		if(categoryObj != null && categoryObj != undefined)
			selCategory = categoryObj.value;
		if(selCategory == "-1")
			selCategory = "";
		ajaxService.populateSubCategory(selCategory, {callback: function(data){
			if(data){					
				DWRUtil.removeAllOptions("mbpSubCategory");
				DWRUtil.addOptions("mbpSubCategory", data);
			}
		},async:false})
	}
	
	function validateEditCompanyDetailsMBP(form){
	
	 	document.getElementById("operatingInCount").value = operatingInCount;
	 	
	 	var rulesMBPEditForm = new Rules(); 
		rulesMBPEditForm.addRule('abiContactPerson','required',{args:'', errorMessage:'Contact person name is required', errorDiv:'contactPersonErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('abiContactPerson','mask',{args:'^[a-zA-Z. ]*$', errorMessage:'Contact person name is invalid', errorDiv:'contactPersonErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('abiCompanyName','required',{args:'', errorMessage:'Company name is required', errorDiv:'companyNameErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('abiCompanyName','mask',{args:'^[a-zA-Z0-9.,() &/]*$', errorMessage:'Company name is invalid', errorDiv:'companyNameErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('abiOperatingSince','required',{args:'', errorMessage:'Operating Since is required', errorDiv:'operatingSinceErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('abiTitle','required',{args:'', errorMessage:'Title is required', errorDiv:'titleErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('abiTitle','mask',{args:'^[a-zA-Z0-9.&,/() ]*$', errorMessage:'Title is invalid', errorDiv:'titleErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('serviceType','required',{args:'', errorMessage:'Please select at least one of the Services type you deal in.', errorDiv:'serviceTypeErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('mbpSubCategory','required',{args:'', errorMessage:'Please select a service sub category.', errorDiv:'mbpCategoryErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('mbpSubCategory','maxlength',{args:'15', errorMessage:'Please select maximum 15 sub categories.', errorDiv:'mbpCategoryErr', failedDiv:'', okDiv:''});
		
		rulesMBPEditForm.addRule('mbpCategory','required',{args:'', errorMessage:'Please select a service category.', errorDiv:'mbpCategoryErr', failedDiv:'', okDiv:''});
		
		if(document.getElementById("domBudgId").style.display == ""){
			rulesMBPEditForm.addRule('domesticMaxBudget','mask',{args:'^[0-9]*$', errorMessage:'Please enter valid maximum domestic  budget.', errorDiv:'domesticBudgetErr', failedDiv:'', okDiv:''});
			rulesMBPEditForm.addRule('domesticMinBudget','required',{args:'', errorMessage:'Please enter minimum domestic  budget.', errorDiv:'domesticBudgetErr', failedDiv:'', okDiv:''});
			rulesMBPEditForm.addRule('domesticMinBudget','mask',{args:'^[0-9]*$', errorMessage:'Please enter valid minimum domestic  budget.', errorDiv:'domesticBudgetErr', failedDiv:'', okDiv:''});
		}
		
		if(document.getElementById("comBudgId").style.display == ""){
			rulesMBPEditForm.addRule('commertialMaxBudget','mask',{args:'^[0-9]*$', errorMessage:'Please enter valid maximum commercial  budget.', errorDiv:'commertialBudgetErr', failedDiv:'', okDiv:''});
			rulesMBPEditForm.addRule('commertialMinBudget','required',{args:'', errorMessage:'Please enter minimum commercial  budget.', errorDiv:'commertialBudgetErr', failedDiv:'', okDiv:''});
			rulesMBPEditForm.addRule('commertialMinBudget','mask',{args:'^[0-9]*$', errorMessage:'Please enter valid minimum commercial  budget.', errorDiv:'commertialBudgetErr', failedDiv:'', okDiv:''});
		}
		
		rulesMBPEditForm.addRule('abiDescription','required',{args:'', errorMessage:'Description is required', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('abiDescription','minlength',{args:'100', errorMessage:'Description cannot be less than 100 characters.', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		rulesMBPEditForm.addRule('abiDescription','maxlength',{args:'3000', errorMessage:'Description cannot be more than 3000 characters.', errorDiv:'descriptionErr', failedDiv:'', okDiv:''});
		
		
		var v = new Validator(form, rulesMBPEditForm);
		v.method = TEXT;
		v.globalDiv = 'allError';
		var returnFlag = v.validate(true);
		var operatingInFlag = validateOperatingIn(form, v.focus);
		var budgetFlag = validateBudgetValues(form, v.focus);
		
		if(returnFlag && operatingInFlag && budgetFlag){
			document.getElementById('error_top_Div').innerHTML = imgStr + '<form:errors />';
			return true;
		}else{
			document.getElementById('error_top_Div').style.display = "block";
			document.getElementById('error_top_Div').innerHTML = imgStr + 'Please correct the errors shown in red below.';
			return false;
		}
	}
	
	function validateBudgetValues(form, focus){
		var focus1 = ""
		var budgetFlag = true;
		if(document.getElementById("domesticBudgetErr").style.display == "none"){
			var domMinB = eval(document.getElementById("domesticMinBudget").value);
			var domMaxB = domMinB;
			if(Trim(document.getElementById("domesticMaxBudget").value).length > 0)
				domMaxB = eval(document.getElementById("domesticMaxBudget").value);
				
			if(domMinB < 100){
				document.getElementById("domesticBudgetErr").innerHTML = "Domestic minimum budget can not be less than 100.";
				document.getElementById("domesticBudgetErr").style.display = "block";
				focus1 = "domesticMinBudget";
				budgetFlag = false;
			}else if(domMinB > domMaxB){
				document.getElementById("domesticBudgetErr").style.display = "block";
				document.getElementById("domesticBudgetErr").innerHTML = "Domestic maximum budget can not be less than minimum budget.";
				focus1 = "domesticMaxBudget";
				budgetFlag = false;
			}
		}
		
		if(document.getElementById("commertialBudgetErr").style.display == "none"){
			var comMinB = eval(document.getElementById("commertialMinBudget").value);
			var comMaxB = comMinB;
			if(Trim(document.getElementById("commertialMaxBudget").value).length > 0)
				comMaxB = eval(document.getElementById("commertialMaxBudget").value);
			if(comMinB < 100){
				document.getElementById("commertialBudgetErr").style.display = "block";
				document.getElementById("commertialBudgetErr").innerHTML = "Commercial minimum budget can not be less than 100.";
				if(focus1.length == 0)
					focus1 = "commertialMinBudget";
				budgetFlag = false;
			}else if(comMinB > comMaxB){
				document.getElementById("commertialBudgetErr").style.display = "block";
				document.getElementById("commertialBudgetErr").innerHTML = "Commercial maximum budget can not be less than minimum budget.";
				if(focus1.length == 0)
					focus1 = "commertialMaxBudget";
				budgetFlag = false;
			}
		}
			if(focus == "abiDescription" && focus1.length > 0)
				document.getElementById(focus1).focus();
		return budgetFlag;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
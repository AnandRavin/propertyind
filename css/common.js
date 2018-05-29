	function populateState(countryId, stateId, cityId, localityId){
		var selCountry = DWRUtil.getValue(countryId);
		ajaxService.getStateList(selCountry, {callback: function(beanObj){
			DWRUtil.removeAllOptions(stateId);
			DWRUtil.removeAllOptions(cityId);
			DWRUtil.addOptions(stateId, beanObj);
			var cityObj = new Object();
			cityObj["-1"] = "--- Select City ---"; 
			DWRUtil.addOptions(cityId, cityObj);
		},async:false})
		
		if(localityId.length > 0){
			var localityObj = new Object();
			localityObj["-1"] = "--- Locality ---"; 
			DWRUtil.removeAllOptions(localityId);
			DWRUtil.addOptions(localityId, localityObj);
		}
	}
	
	function populateCity(stateId, cityId, localityId){
		var selState = DWRUtil.getValue(stateId);
		ajaxService.getCityList(selState, {callback: function(beanObj){
			DWRUtil.removeAllOptions(cityId);
			DWRUtil.addOptions(cityId, beanObj);
		},async:false})
		
		if(localityId.length > 0){
			var localityObj = new Object();
			localityObj["-1"] = "--- Locality ---"; 
			DWRUtil.removeAllOptions(localityId);
			DWRUtil.addOptions(localityId, localityObj);
		}
	}
	
	
	function populateLocality(cityId, localityId){
		var selCity = DWRUtil.getValue(cityId);
		ajaxService.getLocalityList(selCity, {callback: function(beanObj){
			DWRUtil.removeAllOptions(localityId);
			if(beanObj){
				DWRUtil.addOptions(localityId, beanObj);
				for(var k = 0; k < document.getElementById(localityId).options.length; k++){
					for(var j = 0; j < localitySelected.length; j++){
						if(document.getElementById(localityId).options[k].value == localitySelected[j])
							document.getElementById(localityId).options[k].selected = true; 
					}
				}
			}else{
				var noLocalityObj = new Object();
				noLocalityObj[""] = "No Locality Found"; 
				DWRUtil.addOptions(localityId, noLocalityObj);
			}
		},async:false})
	}

		var localitySelected = new Array();
	function getLocality(localityId){
		localitySelected = DWRUtil.getValue(localityId);
	}
	
	function refreshImg(){
		var randomNumber = Math.floor(Math.random()*123456);
		document.getElementById("jcaptchaIMG").src = "jcaptcha.html?"+randomNumber;
		return false;
	}
	
/**  Method to limit the number of characters written in text area of the backend pages.
Usage:
U have to call this method in ur pages where there is text area in the following way:

onkeydown="javascript:textAreaCharCounter(this,no of characters,counterField)"
onkeyup="javascript:textAreaCharCounter(this,no of characters,counterField)"

U have to use the following code to get the text box beside the textarea which specifies the number of
allowed characters in the textarea.<b>
			 
<input readonly type="text" id="counterField" size="4" maxlength="4" value="3000">				
*/
		function textAreaCharCounter(element,length,counterField,counterType){
			if(element != null){
				if(counterType == 'increment'){
					counterField.value = element.value.length;
				}else{
					if(element.value.length > length)
						element.value = element.value.substring(0,length);
					else
						counterField.value = length - element.value.length;
				}
				
			}
		}	
		
		function loginNow(loginEleId, loginDiv, passEleId, passDiv){
			var loginId = Trim(document.getElementById(loginEleId).value);
			var password = Trim(document.getElementById(passEleId).value);
			document.getElementById("topErrDiv").style.display = "none";
			var flag = true;
			if(loginId.length == 0){
				document.getElementById(loginDiv).innerHTML = "Username cannot be blank.";
				document.getElementById(loginDiv).style.display = "";
				flag = false;
			}
			if(password.length == 0){
				document.getElementById(passDiv).innerHTML = "Password cannot be blank.";
				document.getElementById(passDiv).style.display = "";
				flag = false;
			}
			return flag;
		}
	
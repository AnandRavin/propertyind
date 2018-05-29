	function strTemp(strVar){	
		document.getElementById("availabilityStatus").innerHTML = strVar;
	}
	
	function Trim(TRIM_VALUE){		
		if(TRIM_VALUE.length < 1){
			return"";
		}
		TRIM_VALUE = RTrim(TRIM_VALUE);
		TRIM_VALUE = LTrim(TRIM_VALUE);
		if(TRIM_VALUE==""){
			return "";
		}else{
			return TRIM_VALUE;
		}
	}
	function RTrim(VALUE){
		var w_space = String.fromCharCode(32);
		var v_length = VALUE.length;
		var strTemp = "";
		if(v_length < 0){
			return"";
		}
		var iTemp = v_length -1;
	
		while(iTemp > -1){
			if(VALUE.charAt(iTemp) == w_space){
			}else{
				strTemp = VALUE.substring(0,iTemp +1);
				break;
			}
			iTemp = iTemp-1;
		}
		return strTemp;
	}
	
	function LTrim(VALUE){
		var w_space = String.fromCharCode(32);
		if(v_length < 1){
			return"";
		}
		var v_length = VALUE.length;
		var strTemp = "";
		var iTemp = 0;
	
		while(iTemp < v_length){
			if(VALUE.charAt(iTemp) == w_space){
			}else{
				strTemp = VALUE.substring(iTemp,v_length);
				break;
			}
			iTemp = iTemp + 1;
		}
		return strTemp;
	}	
	
	function validateOnlyNumericalhyphen(component, errorMessage ){
		var componentValue;
		if( component != null ) componentValue = Trim( component.value );
	    var ValidChars = "0123456789/-";
	    var IsNumber=true;
	    var Char;
		for (i = 0; i < componentValue.length && IsNumber == true; i++) 
		{ 
		  Char = componentValue.charAt(i);
		  if (ValidChars.indexOf(Char) == -1){
					alert( errorMessage );
					component.focus();
					IsNumber = false;
		   }
	   }
		return IsNumber;
	}
	function validateRequired(component,errorMessage ){
			var componentValue;
			if( component != null && component.value != 'undefined') componentValue = Trim( component.value );
			if( component.value != 'undefined' && componentValue != null && componentValue != "" ){
				return true;
			}
			else{
				alert( errorMessage );
				component.focus();
				return false;
			}
	}
	function validateMinLength(component, minLength, errorMessage ){
	   try{
				var componentValue;
				if( component != null ) componentValue = Trim( component.value );
				if( eval(componentValue.length) <  eval(minLength) ) {
					alert( errorMessage );
					component.focus();
					return false;
				}
				else
					return true;
		}
		catch(err){
		  txt="There was an error on this page.\n\n"
		  txt+="Error description: " + err.description + "\n\n"
		  txt+="Click OK to continue.\n\n"
		  alert(txt)
		}
	}

	function validateMaxLength(component, maxLength, errorMessage ){
	   try{
				
				var componentValue;
				if( component != null ) componentValue = Trim( component.value );

				if( eval(componentValue.length) >  eval(maxLength) ) {
					alert( errorMessage );
					component.focus();
					return false;
				}
				else
					return true;
		}
		catch(err){
		  txt="There was an error on this page.\n\n"
		  txt+="Error description: " + err.description + "\n\n"
		  txt+="Click OK to continue.\n\n"
		  alert(txt)
		}
	}
	function disableAnchor(obj, disable) 
	{ 
		if(obj != null) 
		{ 
			if(disable) 
			{ 
				var href = obj.getAttribute("href"); 
				var onclick = obj.getAttribute("onclick"); 
				//First we store previous value in a new attribute 
				if(href && href != "" && href != null) 
				{ 
					obj.setAttribute('href_bak', href); 
				} 
				if(onclick != null) 
				{ 
					obj.setAttribute('onclick_back', onclick); 
					obj.setAttribute('onclick', "void(0);"); 
				} 
				obj.removeAttribute('href'); 
				//obj.style.color="gray"; 
			} 
			else 
			{ 
				var hrefBack = obj.getAttribute("href_bak"); 
				var onclickBack = obj.getAttribute("onclick_back"); 
				if(onclickBack !=null ) 
				{ 
					obj.setAttribute('onclick', onclickBack); 
					obj.removeAttribute('onclick_back'); 
				} 
				if(hrefBack !=null ) 
				{ 
					obj.setAttribute('href', hrefBack); 
					obj.removeAttribute('href_bak'); 
					//obj.style.color="blue"; 
				} 
			} 
		} 
	} 
	function validateEmail( component, errorMessage){
		var componentValue;
		if( component != null ) componentValue = Trim( component.value );
		if(componentValue.length <= 0){
		  return true;
		}
		var splitted = componentValue.match("^(.+)@(.+)$");
		if(splitted == null){
			alert( errorMessage );
			component.focus();
			return false;
		}
		if (componentValue.indexOf('..',0) != -1) {
		 alert(errorMessage);
		 component.focus();
		 return false;
		}
		if(splitted[1] != null) {
		   var regexp_user=/^\"?[\w-_\.]*\"?$/;
		  if(splitted[1].match(regexp_user) == null){
				alert( errorMessage );
				component.focus();
				return false;
		  }
		}
		if(splitted[2] != null){
		  var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
		  if(splitted[2].match(regexp_domain) == null){
			var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
			if(splitted[2].match(regexp_ip) == null) {
				alert( errorMessage );
				component.focus();
				return false;
			}
		  }
		  return true;
		}
		return false;
	}
	
	function checkSelections(element,length)
	{
		var j = 0;
		var flag =0;
		for(i=1;i<element.options.length;i++)
		 {
			if (element.options[0].selected == true && element.options[i].selected == true ){
				flag = 1;
				for(i=1;i<element.options.length;i++)
					element.options[0].selected = false;
				break;
			}
			else if(element.options[i].selected == true)
				j = j+1;
		}
		//if(flag == 1)
			//alert("You can select either All or any "+length+" different locations");
		if (j > length)
		{
			alert("You can only select upto " + length + " " + element.id);
			for(i=0;i<element.options.length;i++)
			{
				element.options[i].selected = false
			}
		}
	}

	function textAreaCharacterCounterTrim(element,length,charLength_omit_clear_field){
		if(element != null){
			if(element.value.length > length)
			element.value = element.value.substring(0,length);
			else
			charLength_omit_clear_field.value = length - element.value.length;
		}
	}	
	
	function detectxss(form, elementId, divId){
		var m = new RegExp('((\%3[cC])|<)((\%2[Ff])|\/)*[A-Za-z0-9\%]+((\%3[Ee])|>)');
		var retFlag = true;
		if(divId == ""){
			for(var k in divErrorObj){
				if(document.getElementById(divErrorObj[k]) != null)
					document.getElementById(divErrorObj[k]).style.display = "none";
			}
			for(i=0; i<form.elements.length; i++) {
				var field = form.elements[i];
				if(field.type == 'text'||
				field.type == 'textarea'||
				field.type == 'password') {
				//alert(field.name + "/" + field.id + "/" + divErrorObj[field.id]);
					if (m.exec(field.value)) {
						document.getElementById(divErrorObj[field.id]).innerHTML = "Scripts / Tags are not allowed.";
						document.getElementById(divErrorObj[field.id]).style.display = "block";
						retFlag = false;
					}
				}
			}
		}else{
			if(document.getElementById(elementId)){
				if (m.exec(document.getElementById(elementId).value)) {
					document.getElementById(divId).innerHTML = "Scripts / Tags are not allowed.";
					document.getElementById(divId).style.display = "block";
					retFlag = false;
				}
			}
		}
		return retFlag;
	}
	function validateContent(form, elementId){
		var retFlag = true;
		for(var k in divErrorObj){
			if(document.getElementById(divErrorObj[k]) != null)
				document.getElementById(divErrorObj[k]).style.display = "none";
		}
		for(i=0; i<form.elements.length; i++) {
			var field = form.elements[i];
			if(elementId.indexOf(field.id)>=0 && document.getElementById(divErrorObj[field.id])) {
			//alert(field.name + "/" + field.id + "/" + divErrorObj[field.id]);
				if (!isValidContent(field.value)) {
					document.getElementById(divErrorObj[field.id]).innerHTML = "Email / Phone / Web URL are not allowed.";
					document.getElementById(divErrorObj[field.id]).style.display = "block";
					retFlag = false;
				}
			}
		}
		return retFlag;
	}
	
	function isValidContent(value){
		if(value==null ||value=='')return true;
		var m = new RegExp("[0-9, \\(\\)\\[\\].\\+\\-_':;!@#$%&]{10}");
		if (m.test(value)) {			
			return false;
		}
		m = new RegExp("[a-z0-9_-]+(?:\\.[a-z0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?","i");
		if (m.test(value)) {			
			return false;
		}
		//m = new RegExp("([a-z0-9.-_//:]*)(\\.|dot)(com|info|net|org|me|mobi|us|biz|mx|ca|ws|ag|comco|netco|nomco|comag|netag|it|fr|orgag|am|asia|at|be|bz|combz|netbz|netbr|combr|cc|de|es|comes|nomes|orges|eu|fm|gs|in|coin|firmin|genin|indin|netin|orgin|jobs|jp|ms|commx|nl|nu|conz|netnz|orgnz|tc|tk|tv|tw|comtw|orgtw|idvtw|couk|meuk|orguk|vg|name)","i");
		m = new RegExp("([a-z0-9.-_//:]*)(\\.|dot)(com|info|net|org|me|mobi|us|biz|mx|ca|ws|ag|comco|netco|nomco|comag|netag|fr|orgag|am|asia|at|be|bz|combz|netbz|netbr|combr|cc|de|es|comes|nomes|orges|eu|fm|gs|coin|firmin|genin|indin|netin|orgin|jobs|jp|ms|commx|nl|nu|conz|netnz|orgnz|tc|tk|tv|tw|comtw|orgtw|idvtw|couk|meuk|orguk|vg|name)","i");
		if (m.test(value)) {			
			return false;
		}
		return true;
	}
	
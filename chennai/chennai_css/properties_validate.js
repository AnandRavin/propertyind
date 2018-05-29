function submitform20()
{
  var selectBox = document.form20.title;

 if(selectBox.options[selectBox.selectedIndex].value=='')
    {
	 alert("Please enter your Title");
	 document.form20.title.select();
	 document.form20.title.focus();
     return false;
	}
    
 if(document.form20.first_name.value.search(/\S/)==-1 || document.form20.first_name.value=='F.Name')
   {
     alert("Please enter your first name");
	 document.form20.first_name.select();
	 document.form20.first_name.focus();
     return false;
   }
 else if (document.form20.last_name.value.search(/\S/)==-1 || document.form20.last_name.value=='L.Name')
   {
     alert("Please enter your last name");
	 document.form20.last_name.select();
	 document.form20.last_name.focus();
	 return false;
   }
 
  else if (document.form20.email.value.search(/\S/)==-1 || document.form20.email.value=='E-mail')
   {
     alert("Please enter your Email");
	 document.form20.email.select();
	 document.form20.email.focus();
	 return false;
   }
   else if(echeck(document.form20.email.value)==false){
	 //   alert("Please enter Valid Email");
	    document.form20.email.select();
	    document.form20.email.focus();
	    return false;
		
   }
   else if (document.form20.city.value.search(/\S/)==-1 || document.form20.city.value=='City')
   {
     alert("Please enter your City");
	 document.form20.city.select();
	 document.form20.city.focus();
	 return false;
   }
   else if (document.form20.country.value.search(/\S/)==-1 )
   {
     alert("Please select your country");
	 document.form20.country.focus();
	 return false;
   }
   else
   {
    document.form20.submit();
   }
}
function submitform2()
{
  var selectBox = document.form2.title;

 if(selectBox.options[selectBox.selectedIndex].value=='')
    {
	 alert("Please enter your Title");
	 document.form2.title.select();
	 document.form2.title.focus();
     return false;
	}
    
 if(document.form2.first_name.value.search(/\S/)==-1 || document.form2.first_name.value=='F.Name')
   {
     alert("Please enter your first name");
	 document.form2.first_name.select();
	 document.form2.first_name.focus();
     return false;
   }
 else if (document.form2.last_name.value.search(/\S/)==-1 || document.form2.last_name.value=='L.Name')
   {
     alert("Please enter your last name");
	 document.form2.last_name.select();
	 document.form2.last_name.focus();
	 return false;
   }
 
  else if (document.form2.email.value.search(/\S/)==-1 || document.form2.email.value=='E-mail')
   {
     alert("Please enter your Email");
	 document.form2.email.select();
	 document.form2.email.focus();
	 return false;
   }
   else if(echeck(document.form2.email.value)==false){
	 //   alert("Please enter Valid Email");
	    document.form2.email.select();
	    document.form2.email.focus();
	    return false;
		
   }
  /* else if (document.form2.city.value.search(/\S/)==-1 || document.form2.city.value=='City')
   {
     alert("Please enter your City");
	 document.form2.city.select();
	 document.form2.city.focus();
	 return false;
   }
   else if (document.form2.country.value.search(/\S/)==-1 )
   {
     alert("Please select your country");
	 document.form2.country.focus();
	 return false;
   }*/
   else
   {
    document.form2.submit();
   }
}
function submitform_chat()
{
  var selectBox         =   document.form_chat.title;
  var title             =   document.form_chat.title.value;;
  var first_name  	 	= 	document.form_chat.first_name.value;
  var last_name   	 	= 	document.form_chat.last_name.value;
  var email 	 	    = 	document.form_chat.email.value;
  var aa    		    = 	document.form_chat.aa.value;

 if(selectBox.options[selectBox.selectedIndex].value=='')
    {
	 alert("Please enter your Title");
	// document.form2.title.select();
	 document.form_chat.title.focus();
     return false;
	}
    
 if(document.form_chat.first_name.value.search(/\S/)==-1 || document.form_chat.first_name.value=='F.Name')
   {
     alert("Please enter your first name");
	 document.form_chat.first_name.select();
	 document.form_chat.first_name.focus();
     return false;
   }
 else if (document.form_chat.last_name.value.search(/\S/)==-1 || document.form_chat.last_name.value=='L.Name')
   {
     alert("Please enter your last name");
	 document.form_chat.last_name.select();
	 document.form_chat.last_name.focus();
	 return false;
   }
 else if (document.form_chat.email.value.search(/\S/)==-1 || document.form_chat.email.value=='E-mail')
   {
     alert("Please enter your Email");
	 document.form_chat.email.select();
	 document.form_chat.email.focus();
	 return false;
   }
   else if(echeck(document.form_chat.email.value)==false){
	 //   alert("Please enter Valid Email");
	    document.form_chat.email.select();
	    document.form_chat.email.focus();
	    return false;
		
   }
     
   else
   {
     pageload('chatnow.php?title='+title+'&first_name='+first_name+'&last_name='+last_name+'&email='+email+'&aa='+aa,'global');
	 document.form_chat.title.options[document.form_chat.title.selectedIndex].value = '';
     document.form_chat.title.options[document.form_chat.title.selectedIndex].text = 'Title';
     document.form_chat.first_name.value = 'F.Name';
     document.form_chat.last_name.value = 'L.Name';
     document.form_chat.email.value = 'E-mail';
     window.open('http://livechat.boldchat.com/aid/10355791415374149/bc.chat?cwdid=1806110296430402965&amp;url=' + escape(document.location.href), 'Chat1816179041737551056', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=440,height=280,screenX=400,screenY=400,top=300,left=250');return false;
	 //window.open('http://livechat.boldchat.com/aid/10355791415374149/bc.chat?cwdid=1806110296430402965&amp;url=' + escape(document.location.href), 'Chat1816179041737551056', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=440,height=280');return false;
     //onClick="window.open('http://livechat.boldchat.com/aid/10355791415374149/bc.chat?cwdid=1806110296430402965&amp;url=' + escape(document.location.href), 'Chat1816179041737551056', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=440,height=280');return false;
   }
}
function submitform_callback()
{
  var selectBox         =   document.form_callback.title;
  var title             =   document.form_callback.title.value;;
  var first_name  	 	= 	document.form_callback.first_name.value;
  var last_name   	 	= 	document.form_callback.last_name.value;
  var phone_type 	 	= 	document.form_callback.phone_type.value;
  var phone      		= 	document.form_callback.phone.value;
  var country    		= 	document.form_callback.country.value;
  var aa    		    = 	document.form_callback.aa.value;
  
  if(selectBox.options[selectBox.selectedIndex].value=='')
    {
	 alert("Please enter your Title");
	// document.form2.title.select();
	 document.form_callback.title.focus();
     return false;
	}
    
 if(document.form_callback.first_name.value.search(/\S/)==-1 || document.form_callback.first_name.value=='F.Name')
   {
     alert("Please enter your first name");
	 document.form_callback.first_name.select();
	 document.form_callback.first_name.focus();
     return false;
   }
 else if (document.form_callback.last_name.value.search(/\S/)==-1 || document.form_callback.last_name.value=='L.Name')
   {
     alert("Please enter your last name");
	 document.form_callback.last_name.select();
	 document.form_callback.last_name.focus();
	 return false;
   }
 
  
   else if (document.form_callback.phone.value.search(/\S/)==-1)
   {
     alert("Please enter your phone no with country & city code");
	 document.form_callback.phone.select();
	 document.form_callback.phone.focus();
	 return false;
   }
   else if (document.form_callback.country.value.search(/\S/)==-1 )
   {
     alert("Please select your country");
	 document.form_callback.country.focus();
	 return false;
   }
   else
   {
    pageload('EnquiryMail_callback.php?title='+title+'&first_name='+first_name+'&last_name='+last_name+'&phone_type='+phone_type+'&phone='+phone+'&country='+country+'&aa='+aa,'global');
   document.form_callback.title.options[document.form_callback.title.selectedIndex].value = '';
   document.form_callback.title.options[document.form_callback.title.selectedIndex].text = 'Title';
   document.form_callback.first_name.value = 'F.Name';
   document.form_callback.last_name.value = 'L.Name';
   document.form_callback.phone_type.options[document.form_callback.phone_type.selectedIndex].value = 'mobile';
   document.form_callback.phone_type.options[document.form_callback.phone_type.selectedIndex].text = 'mobile';
   document.form_callback.phone.value = '';
   document.form_callback.country.options[document.form_callback.country.selectedIndex].value = '';
   document.form_callback.country.options[document.form_callback.country.selectedIndex].text = 'Country';
 
  
   }
}
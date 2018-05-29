// JavaScript Document
//new js for validate

function checkmyvalidation(thisform){
	
	thisform.action = actionString;
//	thisform.subject.value = thisform.subject.value;

	
	//alert(thisform.action);
	
	if (thisform.Name.value==""){
			alert("Please Enter Your Name");
			thisform.Name.focus();
			return false;
		}
		check=thisform.Name.value;
		if((check.indexOf(",",0) >= 0) || (check.indexOf(".",0) >=0) || (check.indexOf("/",0) >= 0) || (check.indexOf("?",0) >=0) || (check.indexOf(">",0) >= 0) || (check.indexOf("<",0) >=0) || (check.indexOf(";",0) >= 0) || (check.indexOf("'",0) >=0) || (check.indexOf(":",0) >= 0) || (check.indexOf("[",0) >=0) || (check.indexOf("]",0) >= 0) || (check.indexOf("{",0) >=0) || (check.indexOf("}",0) >= 0) || (check.indexOf("|",0) >=0) || (check.indexOf("+",0) >= 0) || (check.indexOf("=",0) >=0) || (check.indexOf("_",0) >= 0) || (check.indexOf(")",0) >= 0) || (check.indexOf("(",0) >=0) || (check.indexOf("*",0) >= 0) || (check.indexOf("&",0) >=0) || (check.indexOf("^",0) >= 0) || (check.indexOf("%",0) >=0) || (check.indexOf("$",0) >= 0) || (check.indexOf("#",0) >=0) || (check.indexOf("@",0) >= 0) || (check.indexOf("!",0) >=0) || (check.indexOf("0",0) >= 0) || (check.indexOf("1",0) >=0) || (check.indexOf("2",0) >= 0) || (check.indexOf("3",0) >=0) || (check.indexOf("4",0) >= 0) || (check.indexOf("5",0) >=0) || (check.indexOf("6",0) >= 0) || (check.indexOf("7",0) >=0) || (check.indexOf("8",0) >= 0) || (check.indexOf("9",0) >=0)) 
		{
			alert("Please enter only alphabets in Name");
			thisform.Name.focus();
			return false;
		}
		
		
		if (echeck(thisform.Email.value)==false){
		thisform.Email.focus()
		return false
	}



		 	if (thisform.City.value == ""){
			alert("Please Enter City Name");
			thisform.City.focus();
			return false;
	  	}


				
	  	if (thisform.Mobile.value == ""){
			alert("Please Enter Contact No");
			thisform.Mobile.focus();
			return false;
	  	}
	  	if (thisform.Mobile.value.length < 10){
			alert("Please Enter Correct Contact No");
			thisform.Mobile.focus();
			return false;
	  	}
	  	check=thisform.Mobile.value;
		if((check.indexOf(",",0) >= 0) || (check.indexOf(".",0) >=0) || (check.indexOf("/",0) >= 0) || (check.indexOf("?",0) >=0) || (check.indexOf(">",0) >= 0) || (check.indexOf("<",0) >=0) || (check.indexOf(";",0) >= 0) || (check.indexOf("'",0) >=0) || (check.indexOf(":",0) >= 0) || (check.indexOf("[",0) >=0) || (check.indexOf("]",0) >= 0) || (check.indexOf("{",0) >=0) || (check.indexOf("}",0) >= 0) || (check.indexOf("|",0) >=0) || (check.indexOf("+",0) >= 0) || (check.indexOf("=",0) >=0) || (check.indexOf("_",0) >= 0) || (check.indexOf(")",0) >= 0) || (check.indexOf("(",0) >=0) || (check.indexOf("*",0) >= 0) || (check.indexOf("&",0) >=0) || (check.indexOf("^",0) >= 0) || (check.indexOf("%",0) >=0) || (check.indexOf("$",0) >= 0) || (check.indexOf("#",0) >=0) || (check.indexOf("@",0) >= 0) || (check.indexOf("!",0) >=0) || (check.indexOf("a",0) >= 0) || (check.indexOf("b",0) >=0) || (check.indexOf("c",0) >= 0) || (check.indexOf("d",0) >=0) || (check.indexOf("e",0) >= 0) || (check.indexOf("f",0) >=0) || (check.indexOf("g",0) >= 0) || (check.indexOf("h",0) >=0) || (check.indexOf("i",0) >= 0) || (check.indexOf("j",0) >=0) || (check.indexOf("k",0) >= 0) || (check.indexOf("l",0) >=0) || (check.indexOf("m",0) >= 0) || (check.indexOf("n",0) >=0) || (check.indexOf("o",0) >= 0) || (check.indexOf("p",0) >=0) || (check.indexOf("q",0) >= 0) || (check.indexOf("r",0) >=0) || (check.indexOf("s",0) >= 0) || (check.indexOf("t",0) >=0) || (check.indexOf("u",0) >= 0) || (check.indexOf("v",0) >=0) || (check.indexOf("w",0) >= 0) || (check.indexOf("x",0) >=0) || (check.indexOf("y",0) >= 0) || (check.indexOf("z",0) >=0) || (check.indexOf("A",0) >= 0) || (check.indexOf("B",0) >=0) || (check.indexOf("C",0) >= 0) || (check.indexOf("D",0) >=0) || (check.indexOf("E",0) >= 0) || (check.indexOf("F",0) >=0) || (check.indexOf("G",0) >= 0) || (check.indexOf("H",0) >=0) || (check.indexOf("I",0) >= 0) || (check.indexOf("J",0) >=0) || (check.indexOf("K",0) >= 0) || (check.indexOf("L",0) >=0) || (check.indexOf("M",0) >= 0) || (check.indexOf("N",0) >=0) || (check.indexOf("O",0) >= 0) || (check.indexOf("P",0) >=0) || (check.indexOf("Q",0) >= 0) || (check.indexOf("R",0) >=0) || (check.indexOf("S",0) >= 0) || (check.indexOf("T",0) >=0) || (check.indexOf("U",0) >= 0) || (check.indexOf("V",0) >=0) || (check.indexOf("W",0) >= 0) || (check.indexOf("X",0) >=0) || (check.indexOf("Y",0) >= 0) || (check.indexOf("Z",0) >=0))
		{
			alert("Please enter only numeric characters in Contact No field");
			thisform.Mobile.focus();
			return false;
		}



if (thisform.Buy_In.value == ""){
			alert("Please Select Looking to Buy");
			thisform.Buy_In.focus();
			return false;
	  	}

	
		
 if (thisform.Project.value == ""){
			alert("Please Select Property Type");
			thisform.Project.focus();
			return false;
	  	}  
//	thisform.subject.value = "Query from propertyind.com - Aqua City  - AG8 Ventures Ltd.";
	thisform.subject.value = thisform.subject.value +" - propertyind.com";
//	alert (thisform.subject.value);
}

/*
function validemail(theField)
 {
   var theInput = theField.value;
   var theLength = theInput.length;
   var goodemail = 0;

     if(theLength != 0) {
      i = 0;
      while (i<=theLength-1) {
         var theChar = theInput.substring(i,i+1);
         if (theChar == "@"){
         goodemail= goodemail+1;
         }
         i++;
      }
    }
    if(goodemail != 1 && theLength != 0) {
    alert("This is not a valid Email address.");
    theField.value="";
    theField.focus();
    }
}


*/

function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

 				
	}

function ValidateForm(){
	var emailID=document.form1.Email
	
	
	if ((emailID.value==null)||(emailID.value=="")){
		alert("Please Enter your Email ID")
		emailID.focus()
		return false
	}
	if (echeck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false
	}

 }

function fillpopupform(t)
{
t.document.form1.Message.value=v;
}
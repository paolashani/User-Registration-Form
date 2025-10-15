alert("Welcome to the site's register page");
document.getElementById("loginForm").onsubmit = function(e){
  var fieldValueUn=document.getElementById("usernm").value;
  var fieldValuePa=document.getElementById("passwd").value;
  var fieldValuePa_retype=document.getElementById("passwd_retype").value;
  var message="";
  var error_messages = 0;
  if (fieldValueUn == null || fieldValueUn == ""){
	  error_messages++;
	  message = message + error_messages + ") enter login "; 
  }
  if (fieldValuePa == null || fieldValuePa == ""){
	  error_messages++;
	  message = message + error_messages + ") enter password "; 
  }
  if (fieldValuePa_retype == null || fieldValuePa_retype == ""){
	  error_messages++;
	  message = message + error_messages + ") retype password"; 
  }


  if (message != ""){
		e.preventDefault();
		alert("You must: " + message);
  }	
  else {	//the form is filled
	  e.preventDefault();
	  if (fieldValuePa != fieldValuePa_retype)
		  alert("Passwords do not match");
	  else {
		var formExample = document.getElementById("loginForm");
		var oldmessage = formExample.innerHTML;
		var d = new Date();
		formExample.innerHTML = oldmessage + "<input type='hidden' name='date' id = 'date'/>";
		document.getElementById("usernm").value = fieldValueUn;
		document.getElementById("passwd").value = fieldValuePa;
		document.getElementById("passwd_retype").value = fieldValuePa_retype;
		document.getElementById("date").value = d.toString();
		formExample.submit();
	  }
  }
}
//Onsubmit the message to users
function reply(){
    //get element which is to be replaced
    const form = document.getElementsByClassName(forms);
    const name = document.getElementById(username);
    const mobNo = document.getElementById(phone);
    //message after form submission
    const otpField = document.createElement("input");
    otpField.setAttribute("type", "text");

    const verifyOtpBtn = document.createElement("button");
    verifyOtpBtn.setAttribute("value","Verify");

    const message = document.createElement("p");
    message.innerHTML = `Dear ${name} , Thank you for your inquiry. A 4 digit verification
     number has been sent to your phone number: ${mobNo}, please enter in the following box and submit for confirmation: ${otpField}`;
     
     //replace form for message
     form.parentNode.replaceChild(message, form);
    
}     
function validate()
{
  var text = document.getElementById("phone").value;
  // var regx = ([0-9]{1,3})-[0-9]{1,3}-[0-9]{1,4};
  if(regx.regx.test(text))
  {
    document.getElementById("lbltext").innerHTML="validation successful";
    document.getElementById("lbltext").style.visibility="visible";
    document.getElementById("lbltext").style.color="green";
  }
  else{
    document.getElementById("lbltext").innerHTML="invalid";
    document.getElementById("lbltext").style.visibility="invisible";
    document.getElementById("lbltext").style.color="red";

  }
}
function myFun()
{
  var a=document.myFun.Email.value;
  if(a.indexOf('@')<=0){
    document.getElementById("email").innerHTML="invalid email";
    return false;
  
  }
}
  /*change phone number patter as typed*/
  function phonePattern(element) {
   var phoneNo = document.getElementById(element.phone);

   for(var i=0; i < phoneNo.length; i++){
  var inputNo = phoneNo[i];
  if(inputNo.type.toLowerCase() == "text"){
  inputNo.addEventListener("keydown", onKeyDown);
  inputNo.addEventListener("keyup", onKeyUp);
  }
}
}
/*
* onKeyUp(e)
* when a key is pressed up, grab the contents in that
* input field, format them in line with XXX-XXX-XXXX
* format and validate if the text is infact a complete
*/
function onKeyUp(e){
var inputNo = e.target;
var formatted = formatPhoneText(inputNo.value);
var isError = (validatePhone(formatted) || formatted.length == 0);
var color =  (isError) ? "gray" : "red";
var borderWidth =  (isError)? "1px" : "3px";
inputNo.style.borderColor = color;
inputNo.style.borderWidth = borderWidth;
inputNo.value = formatted;
}

function onKeyDown(e){  
e.preventDefault();

}

/*
* formatPhoneText
* returns a string that is in (XXX)-XXX-XXXX format
*/
function formatPhoneText(value){
let ele = value;
    ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1,3}/g).join('-');
    return finalVal;
// value = this.replaceAll(value.trim(),"-","");

// if(value.length > 3 && value.length <= 6) 
//   value = value.slice(0,3) + "-" + value.slice(3);
// else if(value.length > 6) 
//   value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

return value;
}

/**
* validatePhone
* return true if the string 'p' is a valid phone
*/
function validatePhone(p){
var phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
var digits = p.replace(/\D/g, "");
return phoneRe.test(digits);
}



function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    // if(name==null || name==""){
    //   text = "Please Enter Your name";
    //   error_message.innerHTML = text;
    //   return false;
    // }
    if(name==null || name==""){
        alert("Name can't be blank");
        text = "Please Enter Your name";
        error_message.innerHTML = text;
        return false;
      }

    if(subject.length < 5 || subject==null){
      text = "Please Enter Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 50){
      text = "Please Enter More Than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    // alert("Visit Our Website - https://www.google.co.in/")
    return true;
  }
jQuery(".hide-design-image").click(function(){
    jQuery(".icon1").toggle();
    jQuery(".hide1").toggle();
})

jQuery(".hide-development-image").click(function(){
    jQuery(".icon2").toggle();
    jQuery(".hide2").toggle();
})


jQuery("#productManagement").click(function(){
    jQuery("#product-management-showing").toggle();
    jQuery(".hide-product-management").toggle();
});

function validateform(){
    let name = document.myForm.inputName.value;
    let email = document.myForm.inputEmail.value;
    let message = document.myForm.inputMessage.value;

    if( name == null || name == ""){
        alert("Kindly fill your name");
        return false;
    }else if(email == null || email == ""){
        alert("Please enter your email address");
        return false;
    }else if(message == null || message == ""){
        alert("Please enter your message");
        return false;
    }else{
        alert("Thank you " + name + " your message has been received");
    }
}

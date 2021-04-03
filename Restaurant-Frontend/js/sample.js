function onContactUsSubmit() {
    var email = document.contactUsForm.email.value;
    var comment = document.contactUsForm.comment.value;
    if(email === "" || comment === "") {  
        alert("Please fill out all fields before submitting");
    } else {
        alert("Submission recieved, thanks for your feedback!");
    }
    
}

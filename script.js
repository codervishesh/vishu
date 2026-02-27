(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }, (error) => {
        alert("Failed to send message");
        console.log(error);
    });
});

// script.js

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        form_email: document.getElementById("email_id").value,
        subject: document.getElementById("sub").value,
        message: document.getElementById("msg").value
    };

    emailjs.send("service_y631h78", "template_w6a1mnp", params)
        .then(function(res) {
            var alertBox = document.getElementById("alert-box");
            alertBox.classList.remove("d-none");
            alertBox.classList.add("show");
            alertBox.innerText = "Message sent successfully! Status: " + res.status;

            document.getElementById("fullName").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("sub").value = "";
            document.getElementById("msg").value = "";

            setTimeout(function() {
                alertBox.classList.add("d-none");
            }, 3000);
        })
        .catch(function(error) {
            console.error("Failed to send message:", error);
        });
}
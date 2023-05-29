function showAlert() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (checkbox) {
      var message = "Welcome " + name + " " + surname + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".";
      alert(message);
    }
    else if (!checkbox.checked) {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + " " + surname + "! If you want to sign up, you better CHECK that newsletter box!");
      }
    }
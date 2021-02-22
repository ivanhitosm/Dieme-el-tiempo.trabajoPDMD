
window.onload = function (){

    document.getElementById("id-submit").addEventListener("change", passworVerification);


};
   
function passworVerification () {
    const pass1 = document.getElementById=("password").value;
    const pass2 = document.getElementById=("password2").value;
    if (pass1!=pass2) {
        alert("Password does not mach")
    }
}

 /*   
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice
    .call(forms)

    .forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();

            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
})();*/

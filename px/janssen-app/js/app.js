// Showing modal on page load

$(window).on('load',function() {
  $('#indexModal').modal({backdrop: 'static', keyboard: false},'show');
});

// Brand switcher

$('#generic-brand').click(function() {
  document.getElementById("brand-theme").className = "brand-generic";
});

$('#stelara-brand').click(function() {
  document.getElementById("brand-theme").className = "brand-stelara";
});

// Show entered zip code

function getInputValue() {
  
  var zipVal = document.getElementById('zipInput').value;
  var re = /^\d{5}(?:[-\s]\d{4})?$/;
  
  // Selecting the input element and get its value 
  
  var zipInputVal = document.getElementById("zipInput").value;
  
  // Displaying the value in the text field on the main page

  document.getElementById("zipTextValue").innerHTML = zipInputVal;

  // Hide the modal window on valid zip entry

  if (re.test(zipVal)) {
    event.preventDefault()
    $('#indexModal').modal('hide');
    } else {
    $('#indexModal').modal('show');
  }
}

// Basic form validation

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

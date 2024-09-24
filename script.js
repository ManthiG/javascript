document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      contactMethod: document.getElementById('contactMethod').value,
      termsAccepted: document.getElementById('terms').checked
    };
  
   
    if (validateForm(formData)) {
      displayData(formData);
      displaySuccessMessage();
    }
  });
  
  
  function validateForm(data) {
    let valid = true;
    let message = "";
  
    if (!data.name) {
      message += "Name is required.\n";
      valid = false;
    }
  
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(data.email)) {
      message += "Please enter a valid email.\n";
      valid = false;
    }
  
    if (!data.contactMethod) {
      message += "Please select a preferred contact method.\n";
      valid = false;
    }
  
    if (!data.termsAccepted) {
      message += "You must accept the terms and conditions.\n";
      valid = false;
    }
  
    if (!valid) {
      alert(message);
    }
  
    return valid;
  }
  

  function displayData(data) {
    const summarySection = document.getElementById('formSummary');
    summarySection.innerHTML = `
      <h3>Form Summary</h3>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Preferred Contact Method: ${data.contactMethod}</p>
      <p>Terms Accepted: ${data.termsAccepted ? "Yes" : "No"}</p>
    `;
  }
  

  document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const message = document.getElementById('emailMessage');
    
    if (!emailPattern.test(email)) {
      message.textContent = "Invalid email format";
    } else {
      message.textContent = "";
    }
  });
  

  function displaySuccessMessage() {
    alert("Form submitted successfully!");
  }
  
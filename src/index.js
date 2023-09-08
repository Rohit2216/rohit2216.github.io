const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/13NOplGRKospEeCsnxJYPL8iGWhwKR5h8/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=13NOplGRKospEeCsnxJYPL8iGWhwKR5h8";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/13NOplGRKospEeCsnxJYPL8iGWhwKR5h8/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=13NOplGRKospEeCsnxJYPL8iGWhwKR5h8";
});



async function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get values from form inputs
  const email = document.getElementById('user-email').value;
  const contact = document.getElementById('user-contact').value;
  const message = document.getElementById('user-message').value;

  // Create an object to store form data
  const formData = {
      email: email,
      contact: contact,
      message: message
  };

  // Send a POST request to your server for email sending
  try {
      const response = await fetch('https://nodemailer-82ga.onrender.com/send-email', { // Change the URL to match your backend
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      if (response.ok) {
          showModal('Email sent successfully.', 'email-sent'); // Display a modal pop-up when email is sent successfully
          console.log('Email sent successfully.');
      } else {
          showModal('Email sending failed.'); // Display a modal pop-up when email sending fails
          console.error('Email sending failed.');
      }
  } catch (error) {
      showModal('An error occurred: ' + error.message); // Display a modal pop-up for errors
      console.error('An error occurred:', error);
  }
}

// Show the modal
function showModal(message, className = '') {
  const modal = document.getElementById('myModal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modalMessage.className = className; // Apply the provided CSS class to the message
  modal.style.display = 'block';
}

// Close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  const form = document.querySelector('.contact_form'); // Select the form element

  // Clear the form fields
  form.reset();

  modal.style.display = 'none';
}


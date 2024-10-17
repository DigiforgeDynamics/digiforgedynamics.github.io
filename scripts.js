document.addEventListener("DOMContentLoaded", () => {
  const sendOtpBtn = document.getElementById("send-otp");
  const verifyOtpBtn = document.getElementById("verify-otp");
  const otpContainer = document.getElementById("otp-container");
  const formStatus = document.getElementById("form-status");
  let generatedOtp;

  // Function to check if the email has sent a message within the last 2 days
  function checkMessageLimit(email) {
    const lastSentTime = localStorage.getItem(email);
    if (lastSentTime) {
      const currentTime = new Date().getTime();
      const twoDays = 2 * 24 * 60 * 60 * 1000; // Milliseconds in 2 days
      if (currentTime - lastSentTime < twoDays) {
        return true; // Message was sent within the last 2 days
      }
    }
    return false;
  }

  // EmailJS OTP sending function
  sendOtpBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;

    if (!validateEmail(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.style.color = "red";
      return;
    }

    // Check if the user can send another message (once in 2 days)
    if (checkMessageLimit(email)) {
      formStatus.textContent =
        "You can only send a message once every 2 days. If you want to really ask something mail to DigiforgeDynamics@gmail.com";
      formStatus.style.color = "red";
      return;
    }

    // Generate OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

    // Send OTP to user's email via EmailJS
    emailjs
      .send("service_kmvl15o", "template_auaksj9", {
        to_email: email,
        otp: generatedOtp,
      })
      .then(() => {
        formStatus.textContent = "OTP sent to your email. Please check!";
        formStatus.style.color = "green";
        otpContainer.style.display = "block";
      })
      .catch((error) => {
        formStatus.textContent = "Failed to send OTP. Try again.";
        formStatus.style.color = "red";
      });
  });

  // OTP Verification function
  verifyOtpBtn.addEventListener("click", () => {
    const enteredOtp = document.getElementById("otp").value;

    if (enteredOtp == generatedOtp) {
      formStatus.textContent = "OTP Verified! You can now send your message.";
      formStatus.style.color = "green";
      otpContainer.style.display = "none";

      // Enable the submit message form function here
      sendMessage();
    } else {
      formStatus.textContent = "Invalid OTP. Please try again.";
      formStatus.style.color = "red";
    }
  });

  // Function to send the message after OTP verification
  function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_tvgdbui", "template_01jos8n", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        document.getElementById("contact-form").reset();

        // Store the current timestamp after message is sent
        localStorage.setItem(email, new Date().getTime());
      })
      .catch((error) => {
        formStatus.textContent = "Failed to send message. Try again.";
        formStatus.style.color = "red";
      });
  }

  // Validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});document.addEventListener("DOMContentLoaded", () => {
  const sendOtpBtn = document.getElementById("send-otp");
  const verifyOtpBtn = document.getElementById("verify-otp");
  const otpContainer = document.getElementById("otp-container");
  const formStatus = document.getElementById("form-status");
  let generatedOtp;

  // Function to check if the email has sent a message within the last 2 days
  function checkMessageLimit(email) {
    const lastSentTime = localStorage.getItem(email);
    if (lastSentTime) {
      const currentTime = new Date().getTime();
      const twoDays = 2 * 24 * 60 * 60 * 1000; // Milliseconds in 2 days
      if (currentTime - lastSentTime < twoDays) {
        return true; // Message was sent within the last 2 days
      }
    }
    return false;
  }

  // EmailJS OTP sending function
  sendOtpBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;

    if (!validateEmail(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.style.color = "red";
      return;
    }

    // Check if the user can send another message (once in 2 days)
    if (checkMessageLimit(email)) {
      formStatus.textContent =
        "You can only send a message once every 2 days. If you want to really ask something mail to DigiforgeDynamics@gmail.com";
      formStatus.style.color = "red";
      return;
    }

    // Generate OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

    // Send OTP to user's email via EmailJS
    emailjs
      .send("service_kmvl15o", "template_auaksj9", {
        to_email: email,
        otp: generatedOtp,
      })
      .then(() => {
        formStatus.textContent = "OTP sent to your email. Please check!";
        formStatus.style.color = "green";
        otpContainer.style.display = "block";
      })
      .catch((error) => {
        formStatus.textContent = "Failed to send OTP. Try again.";
        formStatus.style.color = "red";
      });
  });

  // OTP Verification function
  verifyOtpBtn.addEventListener("click", () => {
    const enteredOtp = document.getElementById("otp").value;

    if (enteredOtp == generatedOtp) {
      formStatus.textContent = "OTP Verified! You can now send your message.";
      formStatus.style.color = "green";
      otpContainer.style.display = "none";

      // Enable the submit message form function here
      sendMessage();
    } else {
      formStatus.textContent = "Invalid OTP. Please try again.";
      formStatus.style.color = "red";
    }
  });

  // Function to send the message after OTP verification
  function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_tvgdbui", "template_01jos8n", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        document.getElementById("contact-form").reset();

        // Store the current timestamp after message is sent
        localStorage.setItem(email, new Date().getTime());
      })
      .catch((error) => {
        formStatus.textContent = "Failed to send message. Try again.";
        formStatus.style.color = "red";
      });
  }

  // Validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});

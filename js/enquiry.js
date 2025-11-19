document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enquiryForm');
    const feedback = document.getElementById('formFeedback');

    // Example service cost mapping
    const serviceCosts = {
        'residential': 50,
        'commercial': 150,
        'specialized': 200,
        'volunteer': 0,
        'sponsor': 0
    };

    // Form submit event
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const fname = formData.get('fname').trim();
        const lname = formData.get('lname').trim();
        const email = formData.get('email').trim();
        const phone = formData.get('phone').trim();
        const serviceType = formData.get('serviceType');
        const message = formData.get('message').trim();
        const privacy = formData.get('privacy');

        // Validate required fields
        if (!fname || !lname || !email || !phone || !message || !privacy) {
            feedback.textContent = "Please fill out all required fields and accept the privacy policy.";
            feedback.style.color = "red";
            return;
        }

        // Generate response
        let responseMsg = `Thank you, ${fname} ${lname}, for your enquiry.\n`;

        if (serviceType === 'volunteer') {
            responseMsg += "We appreciate your interest in volunteering. Our team will contact you with opportunities.";
        } else if (serviceType === 'sponsor') {
            responseMsg += "Thank you for considering sponsorship. We will reach out to discuss details.";
        } else {
            const cost = serviceCosts[serviceType] || 'to be calculated';
            responseMsg += `The estimated cost for the ${serviceType} service is $${cost}. Our team will contact you soon.`;
        }

        feedback.textContent = responseMsg;
        feedback.style.color = "green";

        // Reset form
        form.reset();
    });

    // Real-time email validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "green";
        }
    });
});


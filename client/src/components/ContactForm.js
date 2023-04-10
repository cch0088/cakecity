import { React, useState } from 'react';

function ContactForm() {

return (
    <div id="site-form">
        <div className="title-label">CONTACT US</div>
        <div className="label">Questions or comments?</div>
        <div className="label">✉️ info@cakecity.biz</div>
        <div className="label">☎️ (555) 555-5555</div>
        <div className="label">Our Location</div>
        <img src="./photos/location.jpg" alt="Location" />
        <div className="label">123 Fake St</div>
        <div className="label">New York, NY</div>
    </div>
    )
}

export default ContactForm;
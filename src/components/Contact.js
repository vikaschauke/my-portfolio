import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </section>
    );
};

export default Contact;
import React, { useState } from "react";
import emailjs from 'emailjs-com'; // Import emailjs

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the email using EmailJS
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Using environment variable
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,   // Using environment variable
            {
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_USER_ID        // Using environment variable
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccessMessage("Message sent successfully!");
        })
        .catch((err) => {
            console.error('FAILED...', err);
            setSuccessMessage("Failed to send the message. Please try again later.");
        });

        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 rounded-lg overflow-hidden border-2 border-[rgba(38,38,38,0.5)] hover:border-[rgba(145,86,101,0.5)] transition-all duration-300">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-xl space-y-6 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 md:text-xl">
                            Have a project in mind? Let's discuss.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <input
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="block w-full border border-gray-300 rounded-lg py-2 px-3 bg-gray-100"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your email"
                                    className="block w-full border border-gray-300 rounded-lg py-2 px-3"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                className="block w-full border border-gray-300 rounded-lg py-2 px-3 min-h-[120px]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white py-2 px-4 rounded-lg bg-[rgba(102,102,102,0.5)] hover:bg-zinc-500 transition hover:text-slate-800"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Display success message */}
                    {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
                </div>
            </div>
        </section>
    );
}

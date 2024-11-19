import { Link } from 'react-router-dom';

function ContactPage() {
    return (
        <>
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Please feel free to reach out to us for any inquiries, feedback, or information about our programs and services. Our team is here to assist you.</p>

            <h2>Get in Touch</h2>
            <p>If you have any questions or need more information, use the form below to get in touch with us.</p>

            <form>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Your Full Name" 
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email Address" 
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        placeholder="Your Phone Number" 
                    />
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="" disabled selected>Select Subject</option>
                        <option value="Enrollment">Enrollment</option>
                        <option value="Job Application">Job Application</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Events">Events</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your Message" 
                        rows="5" 
                        required 
                    ></textarea>
                </div>

                <div>
                    <label>Preferred Contact Method</label>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="contact_method" 
                                value="email" 
                                required 
                            /> Email
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="contact_method" 
                                value="phone" 
                            /> Phone
                        </label>
                    </div>
                </div>

                <button type="submit">Send Message</button>
            </form>

            <h4>Our Location</h4>
            <p>If you'd like to visit us in person or mail any documents, here’s our address:</p>
            <address>
                <strong>Pines Montessori School</strong><br />
                #32 Gibraltar, Baguio City
            </address>

            <h4>Other Contact Information</h4>
            <p>Phone: +63 123 456 789</p>
            <p>Email: <a href="mailto:info@pinesmontessori.edu.ph">info@pinesmontessori.edu.ph</a></p>

            <h4>Follow Us on Social Media</h4>
            <ul>
                <li><a href="https://facebook.com/PinesMontessori" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com/PinesMontessori" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com/PinesMontessori" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>

            <p><small>By submitting this form, you consent to us collecting and using your data for the purpose of addressing your inquiry. Your information will not be shared with third parties without your consent.</small></p>
        </>
        
    )
}

export default ContactPage;
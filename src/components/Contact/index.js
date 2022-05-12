import React from 'react';

function Contact () {
    return (
        <section>
            <form className="mx-4">
                <h1>Contact Me</h1>
                <h6 className="text-muted mb-3">Fill out the following information to get in touch!</h6>
                <div className="form-group" id="contact-form">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                    <textarea className="form-control" id="message" placeholder="Enter message" rows="5" />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(email, message);

        emailjs.sendForm('service_ibh4v3j', 'template_i61ci27', form.current, 'DKhDt38rABfRhWYlZ')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='my-40' id='contact'>
            <h1 className='text-2xl md:text-4xl text-center font-bold mb-2'><span className='bg-gray-400 text-black p-2 rounded-lg'>Contact me</span></h1>
            <div className='w-1/2 mx-auto'>
                <form className="form-control w-full" ref={form} onSubmit={sendEmail}>
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group w-full">
                        <span>Email</span>
                        <input type="text" name='email' placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                    <label className="label">
                        <span className="label-text">Your Contact</span>
                    </label>
                    <label className="input-group w-full">
                        <span>Phone</span>
                        <input type="tel" placeholder="+880" className="input input-bordered w-full" />
                    </label>
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <label className="flex-none md:input-group w-full">
                        <span>Message</span>
                        <textarea name="message" id="" cols="60" rows="10"></textarea>
                    </label>
                    <button type="submit" className='btn glass w-1/2 mx-auto my-5 text-white font-bold'>Submit</button>
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default Contact;
// import React, { useRef, useLayoutEffect } from 'react';
import React from 'react';
// import styled from 'styled-components';

interface Form {
    email: string;
    subject: string;
    message: string;
}
interface Props {
    handleSubmit: (event: React.FormEvent) => void;
    handleFormChange: () => void;
    formEmail: React.RefObject<HTMLInputElement>;
    formSubject: React.RefObject<HTMLInputElement>;
    formMessage: React.RefObject<HTMLTextAreaElement>;
    formValue: Form;
    messageSent: boolean;
    popMessage: () => void;
}

const ContactForm: React.FC<Props> = (Props) => {
    const { handleSubmit, handleFormChange, formEmail, formSubject, formMessage, formValue, messageSent, popMessage } = Props;

    // useLayoutEffect(() => {}, messageSent);

    // const noticeX = useRef<HTMLButtonElement>(null);

    const messageSentNotification = () => {
        return messageSent ? (
            <ul>
                <li className="notice" role="alert">
                    message Sent
                    <button className="noticeX" onKeyDown={() => popMessage()} onClick={() => popMessage()} tabIndex={-1}>
                        x
                    </button>
                </li>
            </ul>
        ) : null;
    };

    return (
        <form name="Contact Form" className="flex-col" data-netlify="true" onSubmit={(event) => handleSubmit(event)}>
            <input type="hidden" name="form-name" value="Contact Form" />
            <fieldset>
                <legend>Contact Form</legend>
                <p>
                    Required fields are marked with a <span>*</span>
                </p>
                {/* Create a list of possible issues and update the contents of the div depending on what went wrong on form submission */}
                <div id="form-issues"></div>
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={formEmail}
                        value={formValue.email}
                        onChange={() => handleFormChange()}
                        autoComplete="email"
                        required
                    ></input>
                </label>
                <label htmlFor="subject">
                    <h4>Subject</h4>
                    <input
                        min="1"
                        pattern="/([ ]*+[0-9A-Za-z]++[ ]*+)+/"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        ref={formSubject}
                        value={formValue.subject}
                        onChange={() => handleFormChange()}
                        required
                    ></input>
                </label>
                <label htmlFor="message">
                    <h4>Message</h4>
                    <textarea required rows={8} placeholder="Your message..." id="message" name="message" ref={formMessage} value={formValue.message} onChange={() => handleFormChange()}></textarea>
                </label>
                <button type="submit" value="Submit">
                    SUBMIT
                </button>
                {messageSentNotification()}
            </fieldset>
        </form>
    );
};

export default ContactForm;

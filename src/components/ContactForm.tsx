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
    formMessage: React.RefObject<HTMLInputElement>;
    formValue: Form;
    messageSent: boolean;
    popMessage: () => void;
    // handleBlur: () => void;
    // handleSelect: () => void;
    // invalidMessages: { [key: string]: string };
}

const ContactForm: React.FC<Props> = (Props) => {
    const { handleSubmit, handleFormChange, formEmail, formSubject, formMessage, formValue, messageSent, popMessage } = Props;

    const messageSentNotification = () => {
        return messageSent ? (
            <ul>
                <li className="notice">
                    message Sent
                    <button className="noticeX" onKeyDown={() => popMessage()} onClick={() => popMessage()}>
                        x
                    </button>
                </li>
            </ul>
        ) : null;
    };

    return (
        <form className="flex-col" onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
                <legend>Contact Form</legend>

                <label htmlFor="email">
                    Email
                    <input
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={formEmail}
                        value={formValue.email}
                        onChange={() => handleFormChange()}
                        required
                    ></input>
                </label>
                <label htmlFor="subject">
                    Subject
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
                    Message
                    <input
                        min="1"
                        required
                        pattern="/([ ]*+[0-9A-Za-z]++[ ]*+)+/"
                        placeholder="     Your message..."
                        type="text"
                        id="message"
                        name="message"
                        ref={formMessage}
                        value={formValue.message}
                        onChange={() => handleFormChange()}
                    ></input>
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

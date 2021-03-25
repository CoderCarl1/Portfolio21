import React, { useState, useRef } from 'react';
import * as EmailValidator from 'email-validator';
import ContactForm from './ContactForm';

interface Form {
    email: string;
    subject: string;
    message: string;
}

const ContactFormBL: React.FC = () => {
    const encode = (data: any) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };
    const [formValue, setFormValue] = useState<Form>({
        email: '',
        subject: '',
        message: ''
    });
    const [messageSent, setmessageSent] = useState<boolean>(false);

    const formEmail = useRef<HTMLInputElement>(null);
    const formSubject = useRef<HTMLInputElement>(null);
    const formMessage = useRef<HTMLTextAreaElement>(null);

    const popMessage = () => {
        setmessageSent(false);
    };
    const handleFormChange = () => {
        if (formEmail.current && formSubject.current && formMessage.current) {
            setmessageSent(false);
            setFormValue({
                email: formEmail.current.value,
                subject: formSubject.current.value,
                message: formMessage.current.value
            });

            //email validation
            if ((formEmail.current.value.length > 1 && EmailValidator.validate(formEmail.current.value)) || formEmail.current.value.length == 0) {
                formEmail.current.className = '';
                if (formEmail.current.labels) {
                    formEmail.current.labels[0].className = '';
                }
            } else {
                formEmail.current.className = ' invalid';
                if (formEmail.current.labels) {
                    formEmail.current.labels[0].className = ' invalidLabel';
                }
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        //replace this next line with the ajax call when able.
        try {
            if (EmailValidator.validate(formValue.email)) {
                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({ 'form-name': 'contact', ...formValue })
                })
                    .then(() => {
                        setmessageSent(!messageSent);
                    })
                    .catch(() => alert('There was an issue with sending the form'));
            }
        } catch (err) {
            console.log(err);
        }

        setFormValue({ email: '', subject: '', message: '' });

        setTimeout(() => {
            setmessageSent(!messageSent);
        }, 5000);
    };
    return (
        <ContactForm
            handleSubmit={handleSubmit}
            handleFormChange={handleFormChange}
            formEmail={formEmail}
            formSubject={formSubject}
            formMessage={formMessage}
            formValue={formValue}
            messageSent={messageSent}
            popMessage={popMessage}
        />
    );
};

export default ContactFormBL;

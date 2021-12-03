// Dependencies
import React from 'react';

// Components
import DesktopContactForm from './DesktopContactForm';
import MobileContactForm from './MobileContactForm';

export default class ContactForm extends React.Component {
    isMobile = () => {
        return window.innerWidth < 768;
    };

    render() {
        return (
            <div>
                {this.isMobile() ? (
                    <MobileContactForm />
                ) : (
                    <DesktopContactForm />
                )}
            </div>
        );
    }
}

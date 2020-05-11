import React from 'react';

import Layout from '../components/layout';
import contactStyles from './contact.module.scss';

const ContactPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contact}>
                <h1 className={contactStyles.heading}>Contact</h1>
                <p className={contactStyles.description}>You can find me on <a href="https://github.com/onecodeman" target="_blank" >Github</a>.
                </p>
            </div>
        </Layout>
    )
}

export default ContactPage;
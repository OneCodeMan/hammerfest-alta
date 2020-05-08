import React from 'react';

import Layout from '../components/layout';
import contactStyles from './contact.module.scss';

const ContactPage = () => {
    return (
        <Layout>
            <h1 className={contactStyles.heading}>Contact</h1>
            <p><a href="https://github.com/onecodeman" target="_blank">OneCodeMan</a> on Github :D</p>
        </Layout>
    )
}

export default ContactPage;
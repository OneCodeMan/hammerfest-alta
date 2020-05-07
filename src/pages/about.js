import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am currently learning German.</p>
            <p><Link to="/contact">Contact me!</Link></p>
        </Layout>
    )
}

export default AboutPage;
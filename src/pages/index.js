import React from 'react';

import Layout from '../components/layout';
import indexStyles from './index.module.scss';

const IndexPage = () => {

    return (
        <Layout>
            <h1 className={indexStyles.heading}>Hello.</h1>
            <p className={indexStyles.description}>
                Welcome to my blog! 😃
                <br />
                I'm teaching myself German and Latin. 
                <br />
                I live in Canada. 🇨🇦
                <br />
                I'm currently doing my undergrad in computer science. 👨‍💻
                <br />
                <br />
                Here you can find:
            </p>
            <ul>
                <li>German stories that will make you laugh 😂, cry 😭, and feel alive. 🙌</li>
                <li>Some material I use to study German. 📄</li>
                <li>Musings on topics that interest me. 📝</li>
                <li>Fun 🎉</li>
            </ul>
            <p className={indexStyles.description}>
                Hope you enjoy!
            </p>
        </Layout>
    )
}

export default IndexPage;
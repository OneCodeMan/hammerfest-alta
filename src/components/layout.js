import React from 'react';
import { Helmet } from "react-helmet"
import { Link, graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Short stories and musings of an average dude."></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>{data.site.siteMetadata.title}</title>
                </Helmet>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
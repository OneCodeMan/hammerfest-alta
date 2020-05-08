import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {

    return (
        <Layout>
            <h1 className={blogStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p className={blogStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
            <div className={blogStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )

}

export default Blog;
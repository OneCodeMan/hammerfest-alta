import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    synopsis
                    date
                    type
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
    `)

    return (
        <Layout>
            <h1 className={blogStyles.heading}>Musings</h1>
            <ul className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        edge.node.frontmatter.type === "musing" ? 
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                              <h2 className={blogStyles.title}>{edge.node.frontmatter.title}</h2>
                              <p>{edge.node.frontmatter.synopsis}</p>
                            </Link>
                        </li> : <div></div>
                    )
                })}
            </ul>
        </Layout>
    )

}

export default BlogPage;
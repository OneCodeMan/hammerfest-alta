import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import poetryStyles from './poetry.module.scss';

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
            <h1 className={poetryStyles.heading}>Poetry</h1>
            <ul className={poetryStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        edge.node.frontmatter.type === "poetry" ? 
                        <Link to={`/poetry/${edge.node.fields.slug}`}>
                          <li className={poetryStyles.post}>
                            <h2 className={poetryStyles.title}>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.synopsis}</p>
                          </li> 
                        </Link>: <div></div>
                    )
                })}
            </ul>
        </Layout>
    )

}

export default BlogPage;
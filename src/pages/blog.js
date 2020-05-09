import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import BlogHeader from './../components/blogHeader'




const blog = ({ data }) => (
    <Layout>
        <div>
            <BlogHeader />
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default blog

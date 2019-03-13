import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import CTA from '../components/call-to-action/call-to-action'
import SEO from '../components/SEO/SEO'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={
          post.frontmatter.meta_description || post.excerpt || 'nothin’'
        }
        image={post.frontmatter.cover}
        pathname={post.frontmatter.slug}
        article
      />
      <div className="container">
        <section className="section">
          <div className="content page-introduction">
            <h1 className="has-text-centered">{post.frontmatter.title}</h1>
            <div className="columns">
              <div className="column">
                <p className="blog-sub-text has-text-left">
                  {post.frontmatter.date}
                </p>
              </div>
              <div className="column">
                <p className="has-text-right blog-sub-text">
                  {post.frontmatter.tags}
                </p>
              </div>
            </div>
            <hr className="border" />
          </div>
          <div className="content">
            <article
              className="mainPostStyle"
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            />
          </div>
        </section>
      </div>
      <CTA />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.string.isRequired,
}

export default BlogPost

export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        author
        path
        tags
        cover
        meta_description
      }
    }
  }
`

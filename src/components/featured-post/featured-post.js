import React from "react"
import Link from "gatsby-link"

const FeaturedPost = ({post}) => (
  <div className='card blog-card'>
    <div className="card-title">
      <h3 className='blog-card-title'>
        <Link to ={`/blog/${post.frontmatter.path}`}>{post.frontmatter.title}
        </Link>
      </h3>
    </div>
    <div className="card-content">
      <p>
        {post.excerpt}
      </p>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item bx-fade-right-hover">
        <Link to={`/blog/${post.frontmatter.path}`}>Read the Rest of the Article</Link>
        <i className="bx bx-chevrons-right"></i>
      </div>
    </footer>
  </div>
);

export default FeaturedPost
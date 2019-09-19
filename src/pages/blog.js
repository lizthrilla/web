import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
import styled from 'styled-components'

const Media = styled.div`
  .media-content {
    overflow: hidden;
  }
  .media-right {
    align-self: flex-end;
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Section>
        <Container>
          <PageTitle>Blog</PageTitle>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="columns is-multiline">
            {posts.map(({ node: post }) => (
              <div className="column is-half" key={post.slug}>
                <div className="card">
                  <div className="card-image">
                    <Image
                      Tag="figure"
                      className="image"
                      fluid={post.heroImage.fluid}
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="title is-3">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: post.description.childMarkdownRemark.html,
                      }}
                    />
                    <hr />
                    <Media className="media">
                      <div className="media-left">
                        <Image
                          Tag="figure"
                          className="image"
                          fixed={post.author.image.fixed}
                          alt={post.author.image.description}
                        />
                      </div>
                      <div className="media-content">
                        <h4 className="title is-4">{post.author.name}</h4>
                      </div>
                      <div className="media-right">
                        <time>{post.publishDate}</time>
                      </div>
                    </Media>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 660, maxHeight: 495) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          author {
            name
            image {
              fixed(width: 24, height: 24) {
                ...GatsbyContentfulFixed_withWebp
              }
              description
            }
          }
        }
      }
    }
  }
`

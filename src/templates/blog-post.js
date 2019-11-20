import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = styled(BackgroundImage)`
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.66);
  background-position: center;
`

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  const authorTitle = [post.author.title, post.author.company]
    .filter(s => s)
    .join(' @ ')

  return (
    <Layout>
      <BackgroundSection
        tag="section"
        className="hero is-large"
        fluid={post.heroImage.fluid}
      >
        <div className="hero-body">
          <div className="container">
            <PageTitle className="has-text-white">{post.title}</PageTitle>
            <h2 className="subtitle has-text-light">{post.publishDate}</h2>
          </div>
        </div>
      </BackgroundSection>
      <Section>
        <Container>
          <div className="columns is-centered">
            <div className="column is-8">
              <article className="media">
                <figure className="media-left">
                  <Image
                    Tag="figure"
                    className="image"
                    fixed={post.author.image.fixed}
                  />
                </figure>
                <div className="media-content">
                  <h4 className="title is-4">{post.author.name}</h4>
                  <h5 className="subtitle heading">{authorTitle}</h5>
                </div>
              </article>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-8">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html
                }}
              />
              <hr />
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <Icon i="fas fa-tags" s="is-medium has-text-grey" />
                    <div className="tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Icon i="fab fa-facebook fa-lg" s="is-medium" />
                  </div>
                  <div className="level-item">
                    <Icon i="fab fa-linkedin fa-lg" s="is-medium" />
                  </div>
                  <div className="level-item">
                    <Icon i="fab fa-twitter fa-lg" s="is-medium" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </Container>
      </Section>
      <SEO
        title={post.title}
        description={post.description.childMarkdownRemark.excerpt}
        photo={post.heroImage.seo.src}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid_withWebp
        }
        seo: fixed(width: 1200, height: 630) {
          src
        }
      }
      description {
        childMarkdownRemark {
          excerpt(pruneLength: 200)
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      author {
        name
        title
        company
        image {
          fixed(width: 48, height: 48) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`

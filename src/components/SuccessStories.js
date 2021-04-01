import React from 'react'
import Image from 'gatsby-image'
import Link from 'gatsby-link'

const SuccessStories = ({ children, stories }) => (
  <>
    {stories.map(({ node: story }) => (
      <React.Fragment key={story.slug}>
        <div className="columns">
          <div className="column is-narrow has-text-centered">
            <Link to={`/academy/success/${story.slug}`}>
              <Image
                className="image"
                Tag="figure"
                fixed={story.student.image.fixed}
                alt={story.student.image.description}
              />
            </Link>
          </div>
          <div className="column">
            <h3 className="title is-3">
              <Link to={`/academy/success/${story.slug}`}>
                {story.student.name}
              </Link>
            </h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: story.story.childMarkdownRemark.html,
              }}
            />
          </div>
          <div
            className="column is-narrow has-text-centered"
            style={{ alignSelf: 'flex-end' }}
          >
            <Link to={`/academy/success/${story.slug}`}>
              <span className="icon is-medium">
                <span className="fa-stack">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse" />
                </span>
              </span>
            </Link>
          </div>
        </div>
        <hr />
      </React.Fragment>
    ))}
    {children}
  </>
)

export default SuccessStories

import React from 'react'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Icon from '../../components/Icon'
import GraduateSocialLinks from './GraduateSocialLinks'

const Graduate = ({
  student,
  description,
  tagLine,
  hireable,
  slug,
  cohortSlug
}) => (
  <React.Fragment>
    <div className="columns demo-day-graduate">
      <div className="column is-narrow has-text-centered">
        {student.image && (
          <Image
            className="image"
            Tag="p"
            fixed={student.image.fixed}
            alt={student.image.description}
          />
        )}
      </div>
      <div className="column">
        <h4 className="title is-4">
          {slug ? (
            <Link to={`/grads/${cohortSlug}/${slug}`}>{student.name}</Link>
          ) : (
            student.name
          )}
        </h4>
        <h5
          className="subtitle is-5"
          dangerouslySetInnerHTML={{
            __html: tagLine
          }}
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: description ? description.childMarkdownRemark.html : ''
          }}
        />
        <GraduateSocialLinks student={student} hireable={hireable} />
      </div>
    </div>
    <hr />
  </React.Fragment>
)

export default Graduate

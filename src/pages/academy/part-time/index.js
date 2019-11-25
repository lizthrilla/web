import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import wdtd from '../../../images/part-time/wdtd.svg'
import rbiw from '../../../images/part-time/rbiw.svg'
import uxnd from '../../../images/part-time/uxnd.svg'
import dmds from '../../../images/part-time/dmds.svg'

const CourseListing = ({
  title,
  path,
  registration,
  image,
  children,
  tags,
  day,
  month,
  days,
  time,
  tbd
}) => (
  <article className="columns">
    <div className="column">
      <div className="media">
        <div className="media-left is-hidden-mobile">
          <figure className="image is-128x128">
            <Link to={path}>
              <img src={image} alt="Course Image" width="128" height="128" />
            </Link>
          </figure>
        </div>
        <div className="media-content">
          <h3 className="title is-3">
            <Link to={path}>{title}</Link>
          </h3>
          <div className="subtitle tags">
            {tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="level is-block-mobile is-hidden-tablet">
            <div className="level-item">
              <figure className="image is-128x128">
                <Link to={path}>
                  <img
                    src={image}
                    alt="Course Image"
                    width="128"
                    height="128"
                  />
                </Link>
              </figure>
            </div>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
    <div className="column is-narrow">
      <nav className="level">
        <div className="level-item">
          <div className="has-text-centered">
            {tbd ? (
              <>
                <span className="tag">TBD</span>
              </>
            ) : (
              <>
                <div className="calendar-date">
                  <span className="month">{month}</span>
                  <span className="day">{day}</span>
                </div>
                <div>
                  {days.map(day => (
                    <React.Fragment key={day}>
                      <span className="tag">{day}</span>{' '}
                    </React.Fragment>
                  ))}
                </div>
                <div className="time is-size-7 content">
                  <p>{time}</p>
                </div>
                <Link to={registration} className="button is-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  </article>
)

const PartTimeCourses = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Part-Time Courses</PageTitle>
        <div className="content">
          <p>
            Our <Link to="/academy">Web Development Program</Link> is an
            immersive, full-time program designed to prepare you for a career in
            software development. However, we realize that the cost and time
            commitment required for the program isn't for everyone.
          </p>
          <p>
            If you're just curious and want to dip your toes in web development
            or if you're an experienced programmer looking to upskill in
            specific areas, one of our part-time courses might be right for you.
          </p>
        </div>
        <hr />

        <CourseListing
          title="Web Development Test Drive"
          image={wdtd}
          path="/academy/part-time/test-drive"
          month="January"
          day={16}
          days={['Sat']}
          tags={['6-WEEKS', 'BEGINNER']}
          time="10:00 a.m. - 3:00 p.m."
          registration="/academy/part-time/register?course=wdtd"
        >
          <p>
            In this six-week course, students learn the basics of front-end web
            development. Students will learn the basic practices, fundamentals,
            and ideas behind creating dynamic websites with HTML, CSS, and
            JavaScript.{' '}
            <Link to="/academy/part-time/test-drive">Learn more</Link>.
          </p>
        </CourseListing>
        <hr />
        <CourseListing
          title="React I: Building Interactive Websites"
          image={rbiw}
          path="/academy/part-time/react-i"
          tbd={true}
          // month="July"
          // day={30}
          // days={['Tues', 'Thur']}
          // time="6:30 - 8:30 p.m."
          tags={['6-WEEKS', 'INTERMEDIATE']}
          registration="/academy/part-time/register?course=rbiw"
        >
          <p>
            Get up and running with React, one of the most popular JavaScript
            libraries for building powerful interactive web applications.
            Students should have prior experience with HTML, CSS, and
            JavaScript. <Link to="/academy/part-time/react-i">Learn more</Link>.
          </p>
        </CourseListing>

        <hr />
        <CourseListing
          title="User Experience (UX) for Non-Designers"
          image={uxnd}
          path="/academy/part-time/user-experience"
          tbd={true}
          // month="March"
          // day={30}
          // days={['Saturday']}
          // time="10:00 a.m. - 3:00 p.m."
          tags={['6-WEEKS', 'ALL SKILL LEVELS']}
          registration="/academy/part-time/register?course=uxnd"
        >
          <p>
            Over the course of six weeks, students learn the theory and practice
            behind User Experience (UX) design through a series of lectures,
            sharing of professional examples, interactive team activities, and
            individual assignments. With a focus on solving problems creatively
            and systematically by putting your users and their needs first,
            students will utilize User Experience (UX) and User-Interface (UI)
            techniques and methodologies to develop a product or service of
            their choosing.{' '}
            <Link to="/academy/part-time/user-experience">Learn more</Link>.
          </p>
        </CourseListing>
        <hr />
        <CourseListing
          title="Digital Marketing"
          image={dmds}
          path="/academy/part-time/digital-marketing"
          tbd={true}
          // month="April"
          // day={13}
          // days={['Saturday']}
          tags={['6-WEEKS', 'ALL SKILL LEVELS']}
          // time="10:00 a.m. - 3:00 p.m."
          registration="/academy/part-time/register?course=dmds"
        >
          <p>
            Become Savvy at Digital Strategy in this 6-week Digital Marketing
            Course. From content strategy and social media to paid campaigns and
            analytics, learn digital-marketing tactics to increase engagement,
            drive growth, and acquire users.{' '}
            <Link to="/academy/part-time/digital-marketing">Learn more</Link>.
          </p>
        </CourseListing>
        <hr />

        <article className="message is-primary is-small">
          <div className="message-body content">
            <p>
              Our part-time courses are for personal and professional
              development. They award no credentials nor do they include any
              support services. If you're looking to fast-track a career change,
              You might be interested in our full-time, immersive{' '}
              <Link to="/academy">Web Development Program</Link>.
            </p>
            <p>
              No matter which course offering is right for you; passion,
              dedication, and hard work will put you on the path to being the
              best software developer you can be.
            </p>
          </div>
        </article>
      </Container>
    </Section>
  </Layout>
)

export default PartTimeCourses

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Footer from './Footer'
import Head from './Head'
import UniversalLink from './UniversalLink'
import MainNavigation from './MainNavigation'
import MailingListForm from './MailingListForm'

import '../styles/screen.scss'

const Layout = ({ children, noMailingList }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <MDXProvider
          components={{
            a: UniversalLink,
            h1: ({ children, ...rest }) => (
              <h1 className="title is-1" {...rest}>
                {children}
              </h1>
            ),
            h2: ({ children, ...rest }) => (
              <h2 className="title is-2" {...rest}>
                {children}
              </h2>
            ),
            h3: ({ children, ...rest }) => (
              <h3 className="title is-3" {...rest}>
                {children}
              </h3>
            ),
            h4: ({ children, ...rest }) => (
              <h4 className="title is-4" {...rest}>
                {children}
              </h4>
            )
          }}
        >
          <Helmet>
            <html lang="en" className="has-navbar-fixed-top" />
            <link
              rel="stylesheet"
              href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css"
              integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt"
              crossorigin="anonymous"
            />
          </Helmet>
          <Head />
          <MainNavigation />
          {children}
          {!noMailingList && <MailingListForm />}
          <Footer />
        </MDXProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

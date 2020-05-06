require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://suncoast.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: 'Suncoast Developers Guild',
    description:
      'An immersive code school in Tampa Bay, Suncoast Developers Guild serves people, not profit. We are changing lives and teaching people to be the best software developers they can be.',
    siteUrl
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120953554-1'
      }
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '251940662322499'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Suncoast Developers Guild',
        short_name: 'SDG',
        start_url: '/',
        background_color: '#80ced2',
        theme_color: '#85577e',
        display: 'browser',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/src/pages/press`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {},
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/.*`, `**/.*/**`, `**/node_modules/**`]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp'
  ]
}

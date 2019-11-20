const fs = require('fs')
const Feed = require('feed').Feed

module.exports = graphql => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
          allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
            edges {
              node {
                title
                slug
                publishDate
                heroImage {
                  fluid(maxWidth: 660, maxHeight: 495) {
                    src
                  }
                }
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                body {
                  childMarkdownRemark {
                    html
                  }
                }
                author {
                  name
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) reject(result.errors)
        const config = result.data.site
        let feed = new Feed({
          title: config.siteMetadata.title,
          description: config.siteMetadata.description,
          favicon: `${config.siteMetadata.siteUrl}/favicon.ico`,
          link: config.siteMetadata.siteUrl,
          id: config.siteMetadata.siteUrl,
          copyright:
            'All rights reserved 2019, SUNCOAST DEVELOPERS GUILD, INC.',
          updated: new Date(), // TODO: latest post date
          feedLinks: {
            atom: `${config.siteMetadata.siteUrl}/atom.xml`,
            json: `${config.siteMetadata.siteUrl}/feed.json`
          },
          author: {
            name: 'Suncoast Developers Guild',
            email: 'hello@suncoast.io'
          }
        })
        result.data.allContentfulBlogPost.edges.forEach(({ node: post }) => {
          feed.addItem({
            id: post.slug,
            link: `${config.siteMetadata.siteUrl}/blog/${post.slug}`,
            title: post.title,
            description: post.description.childMarkdownRemark.html,
            date: new Date(post.publishDate),
            image: 'https://' + post.heroImage.fluid.src,
            content: post.body.childMarkdownRemark.html,
            author: {
              name: post.author.name
            }
          })
        })
        fs.writeFileSync('./public/atom.xml', feed.atom1())
        fs.writeFileSync('./public/rss.xml', feed.rss2())
        fs.writeFileSync('./public/feed.json', feed.json1())
      })
    )
  })
}

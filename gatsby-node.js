const path = require('path')
const createFeeds = require('./src/config/createFeeds')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const successStory = path.resolve('./src/templates/success-story.js')
    const demoDayTemplate = path.resolve('./src/templates/demo-day.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }

            allContentfulSuccessStory {
              edges {
                node {
                  slug
                }
              }
            }

            allContentfulDemoDay {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors)

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const stories = result.data.allContentfulSuccessStory.edges
        stories.forEach(story => {
          createPage({
            path: `/academy/success/${story.node.slug}/`,
            component: successStory,
            context: {
              slug: story.node.slug,
            },
          })
        })

        const demoDays = result.data.allContentfulDemoDay.edges
        demoDays.forEach(({ node: demoDay }) => {
          createPage({
            path: `/demo-day/${demoDay.slug}/`,
            component: demoDayTemplate,
            context: {
              slug: demoDay.slug,
            },
          })
        })
      })
    )
  })
}

// TODO: Move these to static pages, like success stories above.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  switch (page.path) {
    case `/team/volunteers/`:
      page.matchPath = `\/team\/volunteers\/*`
      createPage(page)
      break
    case `/team/advisory/`:
      page.matchPath = `\/team\/advisory\/*`
      createPage(page)
      break
    case `/team/`:
      page.matchPath = `\/team\/(?!(?:advisory|volunteers))\/*`
      createPage(page)
      break
  }
}

exports.onPostBuild = ({ graphql }) => {
  return Promise.all([createFeeds(graphql)])
}

const path = require('path')
const createFeeds = require('./src/config/createFeeds')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const successStory = path.resolve('./src/templates/success-story.js')
    const demoDayTemplate = path.resolve('./src/templates/demo-day.js')
    const graduateTemplate = path.resolve('./src/templates/graduate.js')
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
                  contentful_id
                  slug
                  demo_day_graduate {
                    contentful_id
                    slug
                  }
                }
              }
            }

            teamStaff: allContentfulTeamMember {
              edges {
                node {
                  role
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
              slug: post.node.slug
            }
          })
        })

        const stories = result.data.allContentfulSuccessStory.edges
        stories.forEach(story => {
          createPage({
            path: `/academy/success/${story.node.slug}/`,
            component: successStory,
            context: {
              slug: story.node.slug
            }
          })
        })

        const demoDays = result.data.allContentfulDemoDay.edges
        demoDays.forEach(({ node: demoDay }) => {
          createPage({
            path: `/demo-day/${demoDay.slug}/`,
            component: demoDayTemplate,
            context: {
              slug: demoDay.slug
            }
          })
          demoDay.demo_day_graduate.forEach(graduate => {
            if (graduate.slug) {
              createPage({
                path: `/demo-day/${demoDay.slug}/${graduate.slug}`,
                component: graduateTemplate,
                context: {
                  demoDayId: demoDay.contentful_id,
                  graduateId: graduate.contentful_id
                }
              })
            }
          })
        })

        result.data.teamStaff.edges.forEach(({ node }) => {
          switch (node.role) {
            case 'Staff':
              createPage({
                path: `/team/${node.slug}/`,
                component: path.resolve('./src/pages/team/index.js')
              })
              break
            case 'Advisory Board':
              createPage({
                path: `/team/advisory/${node.slug}/`,
                component: path.resolve('./src/pages/team/advisory.js')
              })
              break
            case 'Alumni Committee':
              createPage({
                path: `/team/alumni/${node.slug}/`,
                component: path.resolve('./src/pages/team/alumni.js')
              })
              break
            case 'Board Member':
              createPage({
                path: `/team/board/${node.slug}/`,
                component: path.resolve('./src/pages/team/board.js')
              })
              break
            case 'Volunteer':
              createPage({
                path: `/team/volunteers/${node.slug}/`,
                component: path.resolve('./src/pages/team/volunteers.js')
              })
              break
            default:
              break
          }
        })
      })
    )
  })
}

exports.onPostBuild = ({ graphql }) => {
  return Promise.all([createFeeds(graphql)])
}

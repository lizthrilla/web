const got = require('got')

const COHORT_NODE_TYPE = `Cohort`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const cohorts = await got('https://gateway.suncoast.io/api/cohorts').json()

  cohorts.forEach((cohort) =>
    createNode({
      ...cohort,
      id: createNodeId(`${COHORT_NODE_TYPE}-${cohort.id}`),
      parent: null,
      children: [],
      internal: {
        type: COHORT_NODE_TYPE,
        content: JSON.stringify(cohort),
        contentDigest: createContentDigest(cohort),
      },
    })
  )
  return
}

const { fmImagesToRelative } = require('gatsby-remark-relative-source');

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;

	const typeDefs = `
		type MarkdownRemark implements Node {
			frontmatter: Frontmatter
		}
		type Frontmatter {
      linkUrl: String
      headerImg: File @fileByRelativePath
		}
	`;

	createTypes(typeDefs);
};

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      pages: allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // 1. Create pages from /content/pages/
  const { pages } = result.data;

  pages.edges.forEach((page) => {
    const { path, template } = page.node.frontmatter;

    createPage({
      path,
      component: require.resolve(`./src/templates/${template}.tsx`),
      context: {
        listingType: path.replace('/', '')
      }
    })
  })
  
}

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  /* http://localhost:8000/___graphql 2nd add to graphql */ 
  siteMetadata: {
    title: `Abid-Corporate`,
    description: `Abid-Corporate Gatsby Project.`,
    copyright: `This website is copyright 2021 Abid-Corporate`,
    author: `@Prabhat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

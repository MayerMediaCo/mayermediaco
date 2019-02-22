const config = require('./meta/config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    siteDescription: config.siteDescription,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-page-transitions',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:400,600`, `Open Sans:400,600`],
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://mayermediaco.us18.list-manage.com/subscribe/post?u=a63f3871b06bbfc0a0cd26b25&amp;id=07396e9bb1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-113953663-1',
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mayer Media Co.`,
        short_name: `Mayer Media Co.`,
        start_url: `/`,
        background_color: `#D0ECEB`,
        theme_color: `#57C7C1`,
        display: `minimal-ui`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

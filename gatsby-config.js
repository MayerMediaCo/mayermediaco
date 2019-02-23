module.exports = {
  siteMetadata: {
    title: 'Design | Development | Marketing',
    titleTemplate: '%s · Mayer Media Co.',
    description:
      'Mayer Media Co. is a freelance design, web development, and digital marketing effort from Joliet, IL.',
    url: 'https://www.mayermediaco.com',
    image: '/mmc_logo.png',
    twitterUsername: '@mayermediaco',
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
    'gatsby-transformer-remark',
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TVJS8PJ',
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

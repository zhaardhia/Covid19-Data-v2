module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CovidWebApp",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sass",
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Covid 19 Data',
        short_name: 'CovidData',
        start_url: '/',
        background_color: "#0F3145",
        theme_color: "#0F3145",
        display: 'standalone',
        icon: 'src/images/indocovid.PNG',
        crossOrigin: 'use-credentials',
      },
    },
    "gatsby-plugin-offline",
  ],
  
};

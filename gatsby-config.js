module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CovidWebApp",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
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
        background_color: "#E8F4F5",
        theme_color: "#E8F4F5",
        icon: 'src/images/indocovid.PNG',
        crossOrigin: 'use-credentials',
      },
    },
    "gatsby-plugin-offline",
  ],
  
};

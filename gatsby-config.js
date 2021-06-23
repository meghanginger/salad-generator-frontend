module.exports = {
  siteMetadata: {
    title: "Salad Generator",
    description: `Make a salad that doesn't suck!`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: { 
          postCssPlugins: [require("tailwindcss")()],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

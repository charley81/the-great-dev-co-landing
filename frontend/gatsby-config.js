module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand", "sans-serif"],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [],
        //If using single types place them in this array.
        singleTypes: [],
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: "David Landry",
    message: "🚧 I'm a Web Developer. Checkout my GitHub or Twitter while this site is under construction 👷",
    pattern: "Seigaiha",
    color: "#444488",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: ["https://github.com/davadl", "https://twitter.com/davadl", "https://linkedin.com/in/davadl"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "dmwl.net",
        short_name: "dmwl.net",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}

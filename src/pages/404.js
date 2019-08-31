import React from "react"
import Patterns from "../styles/patterns.json"

const NotFoundPage = ({data}) => {
  const { pattern } = data.site.siteMetadata
  const patternStyles = Patterns.patterns.find((p) => p.name === pattern);
  return (
    <div id="background"
      style={{
      backgroundImage: patternStyles.backgroundImage,
      backgroundColor: patternStyles.backgroundColor,
      backgroundSize: patternStyles.backgroundSize,
      backgroundPosition: patternStyles.backgroundPosition,
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      }}
    >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist. How sad.</p>
  </div>
)
}

export default NotFoundPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      message
      pattern
      color
      titleFont
      messageFont
      social
    }
  }
}
`

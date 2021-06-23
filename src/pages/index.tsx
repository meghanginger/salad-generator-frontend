import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Home from "./home";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default function HTML<RC>(props) {
  return (
    <html {...props.htmlAttributes} className="bg-cream">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <Home />
      </body>
    </html>
  )
}
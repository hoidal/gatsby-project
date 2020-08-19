import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// static query as component needs to be returned, whereas useStaticQuery runs above to define variable then returns value

const getSiteData = graphql`
	{
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`

export default function RegularHeaderExample() {
	return (
		<StaticQuery
			query={getSiteData}
			render={(data) => {
				return <h1>{data.site.siteMetadata.title}</h1>
			}}
		/>
	)
}

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				author
				siteUrl
			}
		}
	}
`

export default function SEO({ title, description }) {
	const { site } = useStaticQuery(getData)

	const { siteDesc, siteTitle, siteUrl } = site.siteMetadata

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDesc} />
		</Helmet>
	)
}

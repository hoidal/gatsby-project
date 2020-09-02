import React from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from '../components/styled-hero/StyledHero'
import ComingSoon from '../components/coming-soon/ComingSoon'
import { graphql } from 'gatsby'

export default function FAQ({ data, content }) {
	return (
		<Layout>
			{content ? (
				<StyledHero img={data.defaultBackground.childImageSharp.fluid} />
			) : (
				<ComingSoon title="Coming Soon!" info="Check back soon for more details..." />
			)}
		</Layout>
	)
}

export const query = graphql`
	query {
		defaultBackground: file(relativePath: { eq: "row-of-books-blue-hero.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

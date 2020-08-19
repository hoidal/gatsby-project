import React from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from '../components/styled-hero/StyledHero'
import { graphql } from 'gatsby'

export default function FAQ({ data }) {
	return (
		<Layout>
			<StyledHero img={data.defaultBackground.childImageSharp.fluid} />
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

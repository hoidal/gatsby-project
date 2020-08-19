import React from 'react'
import Layout from '../components/layout/Layout'
import StyledHero from '../components/styled-hero/StyledHero'
import { graphql } from 'gatsby'
import ContactSection from '../components/Contact/ContactSection'

export default function Contact({ data }) {
	return (
		<Layout>
			<StyledHero img={data.defaultBackground.childImageSharp.fluid} />
			<ContactSection />
		</Layout>
	)
}

export const query = graphql`
	query {
		defaultBackground: file(relativePath: { eq: "piled-books-yellow-hero.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

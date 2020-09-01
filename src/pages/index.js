import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/layout/Layout'
import StyledHero from '../components/styled-hero/StyledHero'
import Banner from '../components/banner/Banner'
import About from '../components/Home/about/About'
import Process from '../components/Home/process/Process'
import { graphql } from 'gatsby'

export default function Home({ data }) {
	return (
		<Layout>
			<StyledHero home="true" img={data.defaultBackground.childImageSharp.fluid}>
				<Banner title="Welcome to Better Hand Books" info="">
					<AniLink to="/take-action" className="btn-white" fade>
						Learn More
					</AniLink>
				</Banner>
			</StyledHero>
			<About />
			<Process />
		</Layout>
	)
}

export const query = graphql`
	query {
		defaultBackground: file(relativePath: { eq: "kids-reading-hero-image.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

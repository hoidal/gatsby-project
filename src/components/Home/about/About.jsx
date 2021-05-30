import React from 'react'
import Title from '../../title/Title'
import styles from './About.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getAboutImage = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "fanned-book.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`

export default function About() {
	const { aboutImage } = useStaticQuery(getAboutImage)
	return (
		<section className={styles.about} id="about-section">
			<Title title="about" subtitle="us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<Img fluid={aboutImage.childImageSharp.fluid} alt="about book image" />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>who we are</h4>
					<p>
						Welcome to Better Hand Books! Our mission is to create an online platform where book donations will go to where they are needed most. When you donate to us, the books are added to our online platform’s inventory. Local community and social programs can then access our platform and request the books they really want and need for free. We accept textbooks, children’s books, professional books, and novels in good condition.
					</p>
					<p>
						Right now we are currently a two man operation so we are only accepting donations from the Denver metro area. We will be holding an annual book drive during the month of September to collect books for our inventory which will then be distributed during the rest of the year. Thank you in advance for your support!
					</p>
					<AniLink to="/take-action" fade>
						<button type="button" className="btn-primary">
							get involved
						</button>
					</AniLink>
				</article>
			</div>
		</section>
	)
}

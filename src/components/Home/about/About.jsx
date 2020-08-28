import React from 'react'
import Title from '../../title/Title'
import styles from './About.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
						Welcome to Better Hand Books! Our mission is to create an online platform
						where book donations will go to where they are needed most. When you donate
						to us, the books are added to our online platform’s inventory where schools,
						prisons, community programs and the people who need them most can access and
						request what they really want and need for free. We accept textbooks,
						children’s books, professional books, and novels in any condition.
					</p>
					<p>
						Right now we are currently doing a trial run to see if this will even work
						so we are only accepting donations from the Denver metro area. If this
						initial run proves successful, we will form a nonprofit and expand our
						outreach as far as possible. Thank you in advance for your support!
					</p>
					<button type="button" className="btn-primary">
						get involved
					</button>
				</article>
			</div>
		</section>
	)
}

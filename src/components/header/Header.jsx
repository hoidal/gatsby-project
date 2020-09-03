import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaAlignRight } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './Header.module.css'
import LINKS from '../../constants/links'

const getLogoImage = graphql`
	query logoImage {
		logoImage: file(relativePath: { eq: "logo.png" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`

export default function Header() {
	const [isOpen, setNav] = useState(false)
	const toggleNav = () => setNav((isOpen) => !isOpen)

	const { logoImage } = useStaticQuery(getLogoImage)
	console.log(logoImage)

	return (
		<nav className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.navItems}>
					<AniLink to="/" fade>
						<Img
							className={styles.logo}
							fluid={logoImage.childImageSharp.fluid}
							alt="Logo"
						/>
					</AniLink>
					<button type="button" className={styles.menuBtn} onClick={toggleNav}>
						<FaAlignRight className={styles.menuIcon} />
					</button>
				</div>
				<ul
					className={
						isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`
					}
				>
					{LINKS.map((item) => (
						<li
							key={item.id}
							className={item.id === 'take-action' ? styles.takeActionButton : null}
						>
							<AniLink to={item.path} fade>
								{item.text.toUpperCase()}
							</AniLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

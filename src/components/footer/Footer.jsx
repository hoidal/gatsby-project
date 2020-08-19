import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from './Footer.module.css'
import LINKS from '../../constants/links'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{LINKS.map((item) => {
					return (
						<AniLink key={item.id} to={item.path} fade>
							{item.text.toUpperCase()}
						</AniLink>
					)
				})}
			</div>
			<div className={styles.copyright}>
				Copyright &copy; {new Date().getFullYear()} Better Hand Books. All Rights Reserved.
			</div>
		</footer>
	)
}

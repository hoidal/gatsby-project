import React from 'react'
import { Link } from 'gatsby'
import styles from './Footer.module.css'
import LINKS from '../../constants/links'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{LINKS.map((item) => {
					return (
						<Link key={item.id} to={item.path}>
							{item.text.toUpperCase()}
						</Link>
					)
				})}
			</div>
			<div className={styles.copyright}>
				Copyright &copy; {new Date().getFullYear()} Better Hand Books. All Rights Reserved.
			</div>
		</footer>
	)
}

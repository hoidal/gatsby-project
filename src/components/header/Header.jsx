import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'

import styles from './Header.module.css'
import LINKS from '../../constants/links'

export default function Header() {
	const [isOpen, setNav] = useState(false)
	const toggleNav = () => setNav((isOpen) => !isOpen)

	return (
		<nav className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.navItems}>
					<AniLink to="/" fade>
						<img className={styles.logo} src={logo} alt="Better Hand Books Logo" />
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

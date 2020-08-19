import React, { useState } from 'react'
import { Link } from 'gatsby'
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
					<Link to="/">
						<img className={styles.logo} src={logo} alt="Better Hand Books Logo" />
					</Link>
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
							<Link to={item.path}>{item.text.toUpperCase()}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

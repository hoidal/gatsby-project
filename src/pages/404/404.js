import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from './404.module.css'
import { Link } from 'gatsby'
import Banner from '../../components/banner/Banner'

export default function Error() {
	return (
		<Layout>
			<header className={styles.error}>
				<Banner title="Oops, something went wrong.">
					<Link to="/" className="btn-white">
						Back to Home Page
					</Link>
				</Banner>
			</header>
		</Layout>
	)
}

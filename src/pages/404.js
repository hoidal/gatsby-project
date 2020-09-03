import React from 'react'
import Layout from '../components/layout/Layout'
import styles from '../page-styles/Error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/banner/Banner'
import SEO from '../components/seo/SEO'

export default function Error() {
	return (
		<Layout>
			<SEO title="Error" />
			<header className={styles.error}>
				<Banner title="Oops, something went wrong.">
					<AniLink to="/" className="btn-white" fade>
						Back to Home Page
					</AniLink>
				</Banner>
			</header>
		</Layout>
	)
}

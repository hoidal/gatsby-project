import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import HeroImage from '../components/hero-image/HeroImage'
import Banner from '../components/banner/Banner'
import About from '../components/Home/about/About'
import Process from '../components/Home/process/Process'

export default function Home() {
	return (
		<Layout>
			<HeroImage>
				<Banner title="Welcome to Better Hand Books" info="info fjaodisjfadsoijfadsf">
					<Link to="/take-action" className="btn-white">
						Learn More
					</Link>
				</Banner>
			</HeroImage>
			<About />
			<Process />
		</Layout>
	)
}

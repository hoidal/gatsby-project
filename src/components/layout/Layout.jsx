import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Layout.css'

export default function Layout({ children }) {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

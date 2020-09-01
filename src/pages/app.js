import React from 'react'
import { Router as MyRouter } from '@reach/router'
import OurBooks from './our-books'
import BookDetails from '../components/book-modal/BookModal'

export default function Router() {
	return (
		<MyRouter>
			<OurBooks path="/app/our-books" />
		</MyRouter>
	)
}

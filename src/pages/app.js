import React from 'react'
import { Router as MyRouter } from '@reach/router'
import OurBooks from './our-books'

export default function Router() {
	return (
		<MyRouter>
			<OurBooks path="/app/our-books" />
		</MyRouter>
	)
}

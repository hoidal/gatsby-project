import React from 'react'
import { FaBookReader, FaUniversity, FaRecycle } from 'react-icons/fa'

export default [
	{
		id: 'donate',
		icon: <FaBookReader />,
		title: 'donate',
		text:
			'Have old and unused books lying around? We accept book donations of all kinds in good condition. We donate to local institutions to get your books into the hands of those who need them!',
	},
	{
		id: 'request-books',
		icon: <FaUniversity />,
		title: 'request books',
		text:
			'Are you an organization with readers in need of books? We plan to partner with community and social programs to provide books of all types.',
	},
	{
		id: 'coming-soon',
		icon: <FaRecycle />,
		title: 'coming soon',
		text:
			'We understand that not all books are still in readable condition. As we grow and formalize this passion project, we hope to find a creative way to recycle unusable books!',
	},
]

import React from 'react'
import BookCard from '../book-card/BookCard'
import styles from './Books.module.css'

export default function Books({ books, detailedBooks }) {
	return (
		<div className={styles.container}>
			{detailedBooks.map((book, index) => {
				return <BookCard key={index} data={book} />
			})}
		</div>
	)
}

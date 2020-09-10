import React from 'react'
import BookCard from '../book-card/BookCard'
import styles from './BookContainer.module.css'

export default function BookContainer({ books, handleOpenModal }) {
	return (
		<div className={styles.container}>
			{books.map((book) => {
				return <BookCard key={book.id} data={book} handleOpenModal={handleOpenModal} />
			})}
		</div>
	)
}

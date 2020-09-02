import React from 'react'
import BookCard from '../book-card/BookCard'
import styles from './BookContainer.module.css'

export default function BookContainer({ books, detailedBooks, handleOpenModal }) {
	return (
		<div className={styles.container}>
			{detailedBooks.map((book, index) => {
				return <BookCard key={index} data={book} handleOpenModal={handleOpenModal} />
			})}
		</div>
	)
}

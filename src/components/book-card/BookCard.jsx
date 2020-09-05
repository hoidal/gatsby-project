import React from 'react'
import styles from './BookCard.module.css'

export default function BookCard({ data, handleOpenModal }) {
	return (
		// eslint-disable-next-line
		<div className={styles.card} onClick={(e) => handleOpenModal(e, data)}>
			<img
				className={styles.coverImage}
				src={'https' + data.imageUrl.slice(4)}
				alt={data.title}
			/>
			<h5 className={styles.title}>{data.title}</h5>
		</div>
	)
}

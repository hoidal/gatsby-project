import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({ booksPerPage, totalBooks, currentPage, handlePagination }) {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
		pageNumbers.push(i)
	}
	if (pageNumbers.length === 1) return null
	return (
		<nav className={styles.nav}>
			<ul className={styles.pagination}>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a
							onClick={() => handlePagination(number)}
							href="javascript:void()"
							className={number === currentPage ? styles.active : null}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

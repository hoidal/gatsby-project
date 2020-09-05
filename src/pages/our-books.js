import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'
import Pagination from '../components/pagination/Pagination'
import SEO from '../components/seo/SEO'

const BASE_URL = 'https://api-better-hand-books.herokuapp.com/api/books'

export default function OurBooks() {
	const [loading, setLoading] = useState(false)
	const [ourBooks, setOurBooks] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState(null)
	const [booksPerPage] = useState(12)
	const [currentPage, setCurrentPage] = useState(1)

	const handleOpenModal = (e, data) => {
		setShowModal(true)
		setModalData(data)
	}

	const handleCloseModal = (e, data) => {
		setShowModal(false)
		setModalData(null)
	}

	const handlePagination = (pageNumber) => setCurrentPage(pageNumber)

	//fetch books
	useEffect(() => {
		const fetchBooks = async () => {
			setLoading(true)
			const response = await fetch(BASE_URL)
			const books = await response.json()
			setOurBooks(books)
			setLoading(false)
		}
		fetchBooks()
	}, [])

	const availableBooks = ourBooks.filter((book) => !book.donatedDate)
	const availableBooksWithDetails = availableBooks.filter((book) => book.hasDetails)
	const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = availableBooksWithDetails.slice(indexOfFirstBook, indexOfLastBook)
	console.log(currentBooks)
	return (
		<Layout>
			<SEO title="Our Books" />
			<Title title="available" subtitle="books" />
			{loading ? (
				<Loader
					style={{ margin: 'auto' }}
					type="ThreeDots"
					color="#00cfff"
					height={100}
					width={100}
				/>
			) : (
				<>
					<BookContainer books={currentBooks} handleOpenModal={handleOpenModal} />
					{showModal ? (
						<BookModal
							show={showModal}
							data={modalData}
							handleCloseModal={handleCloseModal}
						/>
					) : null}
					<Pagination
						booksPerPage={booksPerPage}
						totalBooks={availableBooksWithDetails.length}
						currentPage={currentPage}
						handlePagination={handlePagination}
					/>
				</>
			)}
		</Layout>
	)
}

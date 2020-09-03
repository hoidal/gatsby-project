import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'
import Pagination from '../components/pagination/Pagination'
import SEO from '../components/seo/SEO'

const BASE_URL = 'https://api-better-hand-books.herokuapp.com/api/books'
const GOOGLE_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

export default function OurBooks() {
	const [loading, setLoading] = useState(true)
	const [ourBooks, setOurBooks] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState(null)
	const [booksPerPage, setBooksPerPage] = useState(10)
	const [currentPage, setCurrentPage] = useState(1)

	const handleOpenModal = (e, data) => {
		setShowModal(true)
		setModalData(data)
	}

	const handleCloseModal = (e, data) => {
		setShowModal(false)
		setModalData(null)
	}

	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	// fetch books...first from Better Hand Books API then fill out data from Google Books API
	useEffect(() => {
		const fetchBooks = async () => {
			const fetchedBooks = []
			const response = await fetch(BASE_URL)
			const books = await response.json()
			books.map(async (book) => {
				const isbn = book.isbn.replace(/\D+/g, '')
				const response = await fetch(GOOGLE_BOOKS_URL + isbn)
				const data = await response.json()
				if (data.totalItems < 1) {
					const bookObj = { ...book, hasDetails: false }
					fetchedBooks.push(bookObj)
				} else {
					const bookData = data.items[0].volumeInfo
					const bookObj = {
						hasDetails: true,
						isbn,
						title: bookData.title,
						authors: bookData.authors,
						pageCount: bookData.pageCount,
						language: bookData.language,
						categories: bookData.categories,
						description: bookData.description,
						imageUrl: bookData.imageLinks.thumbnail,
						maturityRating: bookData.maturityRating,
						publishedDate: bookData.publishedDate,
						publisher: bookData.publisher,
						dateReceived: book.dateReceived,
						dateDonated: book.dateDonated,
						condition: book.condition,
					}
					fetchedBooks.push(bookObj)
				}
			})
			setLoading(false)
			setOurBooks(fetchedBooks)
		}

		fetchBooks()
	}, [])

	const availableBooks = ourBooks.filter((book) => !book.donatedDate)
	const availableBooksWithDetails = availableBooks.filter((book) => book.hasDetails)
	const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = availableBooksWithDetails.slice(indexOfFirstBook, indexOfLastBook)
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

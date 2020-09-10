import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'
import Pagination from '../components/pagination/Pagination'
import SEO from '../components/seo/SEO'
import { useStaticQuery, graphql } from 'gatsby'

const fetchOurBooks = graphql`
	query ourBooks {
		allRestApiApiBooks {
			edges {
				node {
					hasDetails
					author
					categories
					description
					id
					imageUrl
					isbn
					language
					maturityRating
					pageCount
					publisher
					title
				}
			}
		}
	}
`

export default function OurBooks() {
	const apiData = useStaticQuery(fetchOurBooks)
	const [ourBooks, setOurBooks] = useState([])
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [booksPerPage] = useState(12)

	const handleOpenModal = (e, data) => {
		setShowModal(true)
		setModalData(data)
	}

	const handleCloseModal = (e, data) => {
		setShowModal(false)
		setModalData(null)
	}

	const handlePagination = (pageNumber) => setCurrentPage(pageNumber)

	useEffect(() => {
		const fetchBookData = async () => {
			setLoading(true)
			const bookData = apiData.allRestApiApiBooks.edges.map((book) => book.node)
			setOurBooks(bookData)
			setLoading(false)
		}
		fetchBookData()
	}, [apiData.allRestApiApiBooks.edges])

	const ourBooksWithDetails = ourBooks.filter((book) => book.hasDetails)
	const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = ourBooksWithDetails.slice(indexOfFirstBook, indexOfLastBook)
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
						totalBooks={ourBooksWithDetails.length}
						currentPage={currentPage}
						handlePagination={handlePagination}
					/>
				</>
			)}
		</Layout>
	)
}

import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'
import Pagination from '../components/pagination/Pagination'
import SEO from '../components/seo/SEO'

const BASE_URL = 'https://api-better-hand-books.herokuapp.com/api/books'

export default class OurBooks extends Component {
	state = {
		loading: false,
		ourBooks: [],
		showModal: false,
		modalData: null,
		booksPerPage: 12,
		currentPage: 1,
	}

	handleOpenModal = (e, data) => {
		this.setState({ showModal: true, modalData: data })
	}

	handleCloseModal = (e, data) => {
		this.setState({ showModal: false, modalData: null })
	}

	handlePagination = (pageNumber) => this.setState({ currentPage: pageNumber })

	componentDidMount() {
		const fetchBooks = async () => {
			this.setState({ loading: true })
			const response = await fetch(BASE_URL)
			const books = await response.json()
			this.setState({ ourBooks: books })
			this.setState({ loading: false })
		}
		fetchBooks()
	}

	render() {
		const { loading, ourBooks, showModal, modalData, booksPerPage, currentPage } = this.state
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
						<BookContainer
							books={currentBooks}
							handleOpenModal={this.handleOpenModal}
						/>
						{showModal ? (
							<BookModal
								show={showModal}
								data={modalData}
								handleCloseModal={this.handleCloseModal}
							/>
						) : null}
						<Pagination
							booksPerPage={booksPerPage}
							totalBooks={availableBooksWithDetails.length}
							currentPage={currentPage}
							handlePagination={this.handlePagination}
						/>
					</>
				)}
			</Layout>
		)
	}
}

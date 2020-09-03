import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'
import Pagination from '../components/pagination/Pagination'
import SEO from '../components/seo/SEO'

export default class OurBooks extends Component {
	state = {
		isLoading: true,
		books: [],
		detailedBooks: [],
		showModal: false,
		modalData: null,
		booksPerPage: 10,
		currentPage: 1,
	}

	// open modal with individual books details
	handleOpenModal = (e, data) => {
		this.setState({ showModal: true, modalData: data })
	}

	// close modal with individual book details
	handleCloseModal = () => {
		this.setState({ showModal: false, modalData: null })
	}

	// change page
	handlePagination = (pageNumber) => {
		this.setState({ currentPage: pageNumber })
	}

	componentDidMount() {
		fetch('https://api-better-hand-books.herokuapp.com/api/books')
			.then((res) => res.json())
			.then((books) =>
				books.forEach((book) => {
					const isbn = book.isbn.replace(/\D+/g, '')
					fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
						.then((res) => res.json())
						.then((data) => {
							const bookState = [...this.state.books]
							if (data.totalItems < 1) {
								this.setState({ books: [...bookState, book] })
							} else {
								const detailedBookState = [...this.state.detailedBooks]
								const bookData = data.items[0].volumeInfo
								const bookObj = {
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
								this.setState({
									isLoading: false,
									detailedBooks: [...detailedBookState, bookObj],
								})
							}
						})
				})
			)
	}

	render() {
		const {
			isLoading,
			books,
			detailedBooks,
			showModal,
			modalData,
			booksPerPage,
			currentPage,
		} = this.state
		const availableDetailedBooks = detailedBooks.filter((book) => !book.donatedDate)
		const indexOfLastBook = currentPage * booksPerPage
		const indexOfFirstBook = indexOfLastBook - booksPerPage
		const currentBooks = availableDetailedBooks.slice(indexOfFirstBook, indexOfLastBook)
		return (
			<Layout>
				<SEO title="Our Books" />
				<Title title="available" subtitle="books" />
				{isLoading ? (
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
							nonDetailedBooks={books}
							detailedBooks={currentBooks}
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
							totalBooks={availableDetailedBooks.length}
							currentPage={currentPage}
							handlePagination={this.handlePagination}
						/>
					</>
				)}
			</Layout>
		)
	}
}

import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/title/Title'
import BookContainer from '../components/book-container/BookContainer'
import Loader from 'react-loader-spinner'
import BookModal from '../components/book-modal/BookModal'

export default class OurBooks extends Component {
	state = {
		isLoading: true,
		books: [],
		detailedBooks: [],
		showModal: false,
		modalData: null,
	}

	handleOpenModal = (e, data) => {
		this.setState({ showModal: true, modalData: data })
	}

	handleCloseModal = () => {
		this.setState({ showModal: false, modalData: null })
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
		const { isLoading, books, detailedBooks, showModal, modalData } = this.state
		const availableBooks = books.filter((book) => !book.donatedDate)
		const availableDetailedBooks = detailedBooks.filter((book) => !book.donatedDate)
		return (
			<Layout>
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
							books={availableBooks}
							detailedBooks={availableDetailedBooks}
							handleOpenModal={this.handleOpenModal}
						/>
						{showModal ? (
							<BookModal
								show={showModal}
								data={modalData}
								handleCloseModal={this.handleCloseModal}
							/>
						) : null}
					</>
				)}
			</Layout>
		)
	}
}

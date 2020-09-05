import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import styled from 'styled-components'

const Modal = styled.aside`
	display: ${(props) => (props.show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	.modal-main {
		position: fixed;
		overflow: scroll;
		background: white;
		height: auto;
		max-height: 90%;
		width: 60%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1rem 4rem;
		border-radius: 10px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.close-button {
			position: absolute;
			margin: 1rem;
			top: 0;
			right: 0;
			font-size: 2.5em;
			color: #fc4a1a;
			transition: all 0.3s linear;

			&:hover {
				color: #cf2d02;
			}
		}
		.book-info {
			.title-container {
				margin-top: 2rem;
				text-align: center;
				.title {
					color: #00cfff;
				}
			}
			.details-container {
				padding-bottom: 1rem;
				img {
					float: left;
					padding-right: 1.5rem;
					padding-bottom: 1.5rem;
					height: 100%;
					width: 12rem;
				}
				.details {
					text-align: left;
				}
			}
		}
		#contact-instructions-container {
			text-align: left;
		}
	}
	@media (max-width: 992px) {
		.modal-main {
			width: 80%;
		}
	}
	@media (max-width: 572px) {
		.modal-main {
			overflow: scroll;
			width: 90%;
			.book-info {
				display: flex;
				flex-direction: column;
				align-items: center;
				.details-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					img {
						float: none;
					}
				}
			}
		}
	}
`

export default function BookModal({ show, data, handleCloseModal }) {
	return (
		<Modal show={show}>
			<div className="modal-main">
				<FaWindowClose className="close-button" onClick={handleCloseModal} />
				<div className="book-info">
					<div className="title-container">
						<h2 className="title">{data.title}</h2>
						<h4>{`By ${data.author}`}</h4>
					</div>
					<div className="details-container">
						<img src={data.imageUrl} alt={data.title} />
						<div className="details">
							<p>
								{!data.description || data.description.length > 1500
									? null
									: data.description}
							</p>
							{data.condition ? <h5>Condition: {data.condition}</h5> : null}
							{data.pageCount ? <h5>Pages: {data.pageCount}</h5> : null}
						</div>
					</div>
				</div>
				<div className="contact-instructions-container">
					<p>
						<em>
							Interested in this book? Please contact us with details about your
							organization and we will make sure we get it to good use!
						</em>
					</p>
				</div>
			</div>
		</Modal>
	)
}

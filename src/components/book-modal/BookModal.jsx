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
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 2rem;
		border-radius: 10px;
		text-align: center;

		#close-button {
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

		.title-container {
			margin-top: 2rem;
			text-align: center;
			#title {
				color: #00cfff;
			}
		}
		.details-container {
			padding-bottom: 1rem;
			img {
				float: left;
				padding-right: 1.5rem;
				padding-bottom: 1.5rem;
				height: 15rem;
			}
			.details {
				text-align: left;
			}
		}
		#request-book {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
`

export default function BookModal({ show, data, handleCloseModal }) {
	console.log(data)
	return (
		<Modal show={show}>
			<div className="modal-main">
				<FaWindowClose id="close-button" onClick={handleCloseModal} />
				<div className="title-container">
					<h2 id="title">{data.title}</h2>
					<h4>{`By ${data.authors}`}</h4>
				</div>
				<div className="details-container">
					<img src={data.imageUrl} alt={data.title} />
					<div className="details">
						<p>{data.description.length < 1500 ? data.description : null}</p>
						{data.condition ? <h5>Condition: {data.condition}</h5> : null}
						{data.pageCount ? <h5>Pages: {data.pageCount}</h5> : null}
					</div>
				</div>
				<p id="request-book">
					<em>
						Interested in this book? Please contact us with details about your
						organization and we will make sure we get it to good use!
					</em>
				</p>
			</div>
		</Modal>
	)
}

import React from 'react'
import styled from 'styled-components'

const Modal = styled.section`
	display: ${(props) => (props.show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	.modal-main {
		position: fixed;
		background: white;
		width: 80%;
		height: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1rem;
		.section-1 {
			text-align: center;
			width: 30%;
			img {
				width: 60%;
			}
		}
	}
`

export default function BookModal({ show, data, handleCloseModal }) {
	return (
		<Modal show={show}>
			<div className="modal-main">
				<div className="section-1">
					<h2>{data.title}</h2>
					<img src={data.imageUrl} />
					<h4>{`By ${data.authors}`}</h4>
				</div>
			</div>
		</Modal>
	)
}

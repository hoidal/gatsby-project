import React from 'react'
import styled from 'styled-components'

export default function Title({ title, subtitle }) {
	return (
		<TitleWrapper>
			<h4>
				<span className="title">{title}</span>
				<span>{subtitle}</span>
			</h4>
		</TitleWrapper>
	)
}

const TitleWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Lato|Poppins');
	font-family: 'Lato', sans-serif;
	text-transform: uppercase;
	font-size: 2.3rem;
	margin-bottom: 2rem;
	h4 {
		text-align: center;
		letter-spacing: 7px;
		color: var(--primaryTeal);
	}
	.title {
		color: var(--primaryBlack);
	}
	span {
		display: block;
	}
	@media (min-width: 576px) {
		span {
			display: inline-block;
			margin: 0 0.35rem;
		}
	}
`

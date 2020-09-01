import React from 'react'
import Card from 'react-bootstrap/Card'

export default function BookCard({ data }) {
	return (
		<Card style={{ width: '10rem', margin: '1.5rem' }}>
			<Card.Img
				variant="top"
				src={data.imageUrl}
				style={{ height: '15rem', width: '100%' }}
			/>
			<Card.Body>
				<Card.Title>{data.title}</Card.Title>
			</Card.Body>
		</Card>
	)
}

import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './BookCard.module.css'

export default function BookCard({ data }) {
	return (
		<Card style={{ width: '12rem', margin: '1.5rem' }}>
			<Card.Img
				variant="top"
				src={data.imageUrl}
				style={{ height: '17rem', width: '100%' }}
			/>
			<Card.Body>
				<Card.Title style={{ textAlign: 'center' }}>{data.title}</Card.Title>
			</Card.Body>
		</Card>
	)
}

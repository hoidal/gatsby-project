import React from 'react'
import Title from '../title/Title'
import styles from './About.module.css'
import image from '../../images/fanned-book.jpg'

export default function About() {
	return (
		<section className={styles.about}>
			<Title title="about" subtitle="us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<img src={image} alt="about company" />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus
						enim necessitatibus?
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus
						enim necessitatibus?
					</p>
					<button type="button" className="btn-primary">
						read more
					</button>
				</article>
			</div>
		</section>
	)
}

import React from 'react'
import Title from '../../title/Title'
import styles from './Services.module.css'
import PROCESS from '../../../constants/process'

export default function Services() {
	return (
		<section className={styles.process}>
			<Title title="our" subtitle="process" />
			<div className={styles.center}>
				{PROCESS.map((item) => {
					return (
						<article key={item.id} className={styles.step}>
							<span>{item.icon}</span>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</article>
					)
				})}
			</div>
		</section>
	)
}

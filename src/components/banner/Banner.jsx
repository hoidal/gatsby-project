import React from 'react'
import styles from './Banner.module.css'

export default function Banner({ title, info, children }) {
	return (
		<div className={styles.banner}>
			<div className={styles.mainText}>{title}</div>
			<p>{info}</p>
			{children}
		</div>
	)
}

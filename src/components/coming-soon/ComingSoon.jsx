import React from 'react'
import Banner from '../banner/Banner'
import styles from './ComingSoon.module.css'

export default function ComingSoon({ title, info, children }) {
	return (
		<div className={styles.container}>
			<Banner title={title} info={info} children={children} />
		</div>
	)
}

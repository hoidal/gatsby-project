import React from 'react'
import Title from '../title/Title'
import styles from './ContactSection.module.css'

export default function ContactSection() {
	return (
		<section className={styles.contact}>
			<Title title="contact" subtitle="us" />
			<div className={styles.center}>
				<form className={styles.form}>
					<div>
						<input
							type="name"
							name="name"
							id="name"
							className={styles.formControl}
							placeholder="Name"
							required
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							className={styles.formControl}
							placeholder="Email"
							required
						/>
					</div>
					<div>
						<input
							type="tel"
							name="phone"
							id="phone"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							className={styles.formControl}
							placeholder="Phone"
						/>
					</div>
					<div>
						<textarea
							name="message"
							id="message"
							rows="10"
							className={styles.formControl}
							placeholder="Message"
							required
						/>
					</div>
					<div>
						<input type="submit" value="submit" className={styles.submit} />
					</div>
				</form>
			</div>
		</section>
	)
}

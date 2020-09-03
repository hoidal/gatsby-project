import React from 'react'
import Title from '../title/Title'
import styles from './ContactSection.module.css'

export default function ContactSection() {
	return (
		<section className={styles.contact}>
			<Title title="contact" subtitle="us" />
			<div className={styles.center}>
				<form name="contact" method="POST" data-netlify="true" className={styles.form}>
					<div>
						<input type="hidden" name="form-name" value="contact" />
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
							name="emailf"
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
							className={styles.formControl}
							placeholder="Phone Number (Optional)"
						/>
					</div>
					<div>
						<textarea
							name="message"
							id="message"
							rows="10"
							className={styles.formControl}
							placeholder="Your Message"
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

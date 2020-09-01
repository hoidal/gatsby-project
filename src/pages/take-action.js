import React from 'react'
import Layout from '../components/layout/Layout'
import ComingSoon from '../components/coming-soon/ComingSoon'

export default function TakeAction() {
	return (
		<Layout>
			<ComingSoon title="Coming Soon!" info="Check back soon for more details..." />
		</Layout>
	)
}

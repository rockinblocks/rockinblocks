import React from "react"

import Layout from "../components/mainLayout"
import SEO from "../components/Utilities/SEO"
import { Container, Col, Row } from "@rockinblocks/gatsby-plugin-rockinblocks"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Container>
			<Row>
				<Col>
					<h1>404</h1>
					<p>The page you have requested cannot be found.</p>
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default NotFoundPage

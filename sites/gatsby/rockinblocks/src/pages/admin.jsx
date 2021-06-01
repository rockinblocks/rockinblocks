import React from "react"

import Layout from "../components/mainLayout"
import SEO from "../components/Utilities/SEO"
import { Container, Col, Row } from "@rockinblocks/gatsby-plugin-rockinblocks"

const Backstage = () => (
	<Layout>
		<SEO title="Backstage" />
		<Container>
			<Row>
				<Col>
					<h1>Backstage</h1>
				</Col>
			</Row>
			<Row>
				<Col flex={1}>

				</Col>
				<Col flex={4}>
					
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default Backstage

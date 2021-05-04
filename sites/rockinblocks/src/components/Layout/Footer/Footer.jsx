import React from 'react';
import { Link } from 'gatsby'
import Author from '@elements/Author/Author'
import MailingList from '@elements/MailingList/MailingList'
import Container from '@layout/Container/Container'
import Col from '@layout/Col/Col'
import EditButton from '@utilities/EditButton'

const Footer = () => {
    return (
    <div>
      <footer>
        <EditButton />
        <MailingList />
        <Author />
        <Container>
          <Col display="flex" flex={1} justifyContent="space-between">
            <p>
              © {new Date().getFullYear()} Jed Darrohn
            </p>
            <Link to="/sitemap.xml">
              Sitemap
            </Link>
          </Col>
        </Container>
      </footer>
    </div>
   );
}

export default Footer;
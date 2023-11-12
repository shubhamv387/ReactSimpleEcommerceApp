import { Col, Container, Row } from 'react-bootstrap';
import { BsYoutube, BsTwitter, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='p-5 bg-info'>
      <Container>
        <Row className='align-items-center gap-4'>
          <Col className='d-flex justify-content-center justify-content-md-start'>
            <h1 className='fw-bold text-white mb-0'>The Generics</h1>
          </Col>
          <Col className='d-flex gap-5 justify-content-center justify-content-md-end'>
            <a href='http://facebook.com' rel='noreferrer' target='_blank'>
              <BsFacebook className='text-white' size={35} />
            </a>
            <a href='http://twitter.com' rel='noreferrer' target='_blank'>
              <BsTwitter className='text-white' size={35} />
            </a>
            <a href='http://youtube.com' rel='noreferrer' target='_blank'>
              <BsYoutube className='text-white' size={35} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import Section from '../components/UI/Section';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      formData.email.trim().length < 1 ||
      formData.fullName.trim().length < 1 ||
      formData.phone.trim().length < 1
    ) {
      return alert('all fields are required!');
    }

    try {
      const { data } = await axios.post(
        'https://react-http-4c3ab-default-rtdb.firebaseio.com/contact-data.json',
        formData
      );

      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setFormData({ fullName: '', email: '', phone: '' });
    }
  };

  return (
    <Section>
      <div className='d-flex flex-column align-items-center'>
        <h1>Contact Us</h1>
        <p>fill the form below to contact us</p>
      </div>
      <div
        className='w-100 shadow-lg p-md-5 p-4 rounded-4 border border-1 border-secondary'
        style={{ maxWidth: '550px' }}
      >
        <Form className='w-100' onSubmit={formSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='text'
              placeholder='John Doe'
              name='fullName'
              value={formData.fullName}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='email'
              placeholder='johndoe@gmail.com'
              name='email'
              value={formData.email}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPhNumber'>
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='text'
              placeholder='9845738492'
              name='phone'
              value={formData.phone}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </Section>
  );
};

export default Contact;

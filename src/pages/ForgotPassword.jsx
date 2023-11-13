import { Button, Form } from 'react-bootstrap';
import Section from '../components/UI/Section';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const emailInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    toast.info('This feature is not implemented yet!', {
      position: 'top-center',
    });
    console.log(enteredEmail);
    emailInputRef.current.value = '';
  };

  return (
    <Section>
      <div className='d-flex flex-column align-items-center'>
        <h3 className='fw-semibold'>Request Password</h3>
      </div>

      <div
        className='w-100 shadow-lg p-md-5 p-4 rounded-4 border border-1 border-secondary mb-3'
        style={{ maxWidth: '550px' }}
      >
        <Form className='w-100' onSubmit={formSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label className='cursor-pointer'>Email address:</Form.Label>
            <Form.Control
              //   onChange={inputHandler}
              ref={emailInputRef}
              type='email'
              placeholder='johndoe@gmail.com'
              name='email'
              //   value={formData.email}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Send Request
          </Button>
        </Form>

        <div className='mt-3'>
          <Link className='text-decoration-none fw-semibold' to={'/login'}>
            <BsArrowLeft size={25} className='me-1' /> Back to login
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ForgotPassword;

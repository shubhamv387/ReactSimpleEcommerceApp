import Section from '../components/UI/Section';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { toast } from 'react-toastify';

const Auth = () => {
  const authCtx = useContext(AuthContext);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isLogin = pathname === '/login';

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      formData.email.trim().length < 1 ||
      formData.password.trim().length < 1
    ) {
      return alert('all fields are required!');
    }

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        import.meta.env.VITE_FIREBASE_API_KEY
      }`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_FIREBASE_API_KEY
      }`;
    }
    setIsLoading(true);
    try {
      const { data } = await axios.post(url, {
        ...formData,
        returnSecureToken: true,
      });

      authCtx.login(data.idToken, data.email);

      toast.success(
        isLogin ? 'Successfully logged in!' : 'Successfully account created!',
        { position: 'bottom-right' }
      );

      navigate('/store');

      setFormData({ email: '', password: '' });
    } catch (error) {
      let errorMessage = error.response
        ? error.response.data.error.message
        : error.message;
      toast.error(errorMessage, { position: 'top-center' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <div className='d-flex flex-column align-items-center'>
        <h1 className='fw-semibold'>{isLogin ? 'Login' : 'Register'}</h1>
      </div>

      <div
        className='w-100 shadow-lg p-md-5 p-4 rounded-4 border border-1 border-secondary mb-3'
        style={{ maxWidth: '550px' }}
      >
        <Form className='w-100' onSubmit={formSubmitHandler}>
          {/* <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label className='cursor-pointer'>Full Name:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='text'
              placeholder='John Doe'
              name='fullName'
              value={formData.fullName}
            />
          </Form.Group> */}

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label className='cursor-pointer'>Email address:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='email'
              placeholder='johndoe@gmail.com'
              name='email'
              value={formData.email}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPhNumber'>
            <Form.Label className='cursor-pointer'>Password:</Form.Label>
            <Form.Control
              onChange={inputHandler}
              type='password'
              placeholder='*******'
              name='password'
              value={formData.password}
            />
            <Form.Text className='cursor-pointer'>
              <Link
                to={'/forgot-password'}
                className='text-danger text-decoration-none fw-semibold'
              >
                {isLogin && 'Forgot Password?'}
              </Link>
            </Form.Text>
          </Form.Group>

          {isLoading ? (
            <p className='my-4 fw-bold fs-5'>Sending Request...</p>
          ) : (
            <Button variant='primary' type='submit'>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          )}
        </Form>

        <div className='d-flex mt-4'>
          <p>{isLogin ? 'Not a User?' : 'Existing User?'}</p>
          <Link
            to={isLogin ? '/register' : '/login'}
            className='text-decoration-none ms-2 fw-semibold'
          >
            {isLogin ? 'Register' : 'Login'}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Auth;

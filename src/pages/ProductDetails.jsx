import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { productsArr } from '../constents';
import Rating from '../components/Rating';
import { toast } from 'react-toastify';
import CartContext from '../store/cart-context';

const ProductDetails = () => {
  const { productId } = useParams();
  const cartCtx = useContext(CartContext);

  const product = productsArr.find((p) => p.id === productId);

  const [thumbnail, setThumbnail] = useState(product.imageUrl);
  const [activeIdx, setActiveIdx] = useState(0);

  function ImgUrlHandler(url, index) {
    setThumbnail(url);
    setActiveIdx(index);
  }

  const addToCartHandler = (product) => {
    const { id, title, price, imageUrl } = product;
    const item = { id, title, price, imageUrl, qty: 1 };

    const existingItemIndex = cartCtx.items.findIndex(
      (i) => i.id === product.id
    );

    if (existingItemIndex !== -1)
      return toast.warn('Item Already in the cart!', {
        position: 'top-center',
      });

    cartCtx.addItem(item);
  };

  return (
    <section className='d-flex w-100'>
      <Container fluid='lg' className='pe-0'>
        <Row className='w-100 gap-4 gap-sm-1'>
          <Col sm={6} xl={4} className='d-flex flex-column gap-2 p-0'>
            <div className='d-flex gap-2'>
              <div className='d-flex flex-column gap-1 p-1'>
                {product.moreImgs.map((url, index) => (
                  <Image
                    key={index}
                    width={55}
                    height={55}
                    src={url}
                    className={`border ${
                      activeIdx === index
                        ? 'border-2 border-primary rounded-1'
                        : 'border-1'
                    }`}
                    style={{ cursor: 'pointer', padding: '0.1rem' }}
                    onClick={() => ImgUrlHandler(url, index)}
                  />
                ))}
              </div>

              <div className='w-100 overflow-hidden'>
                <Image
                  className='w-100 border border-1 rounded-2 border-secondary'
                  src={thumbnail}
                />
              </div>
            </div>

            <div className='d-flex gap-2 w-100'>
              <Button
                onClick={() => addToCartHandler(product)}
                className='w-100 bg-warning border-warning fw-semibold rounded-0 py-2'
              >
                ADD TO CART
              </Button>
              <Button
                className='w-100 fw-semibold rounded-0 py-2'
                style={{ background: '#FB641B', borderColor: '#FB641B' }}
              >
                BUY NOW
              </Button>
            </div>
          </Col>

          <Col className=''>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.exert}</p>
            <Rating
              className='rating my-3 d-flex align-items-center'
              value={product.rating}
              text={`${product.rateCount} ratings and ${product.reviews} reviews`}
              starColor='text-warning'
            />
            <p>{product.desc}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;

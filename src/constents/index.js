export const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    rating: 1.6,
  },

  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    rating: 2,
  },

  {
    id: 3,
    title: 'Yellow & Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    rating: 3.8,
  },

  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    rating: 4,
  },
];

export const cartItems = {
  items: [
    {
      id: 1,
      name: 'Album 1',
      price: 20.99,
      imgUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      qty: 10,
    },
    {
      id: 2,
      name: 'Album 2',
      price: 50,
      imgUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      qty: 5,
    },
    {
      id: 3,
      name: 'Album 3',
      price: 15.5,
      imgUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      qty: 12,
    },
  ],
  totalAmount: 645.9,
};

// let totalAmount = cartItems.items.reduce(
//   (acc, curr) => (acc += curr.price * curr.qty),
//   0
// );

// console.log(totalAmount);

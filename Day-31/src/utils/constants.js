import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: 'Our mission at "comfy sloth" is to redefine home comfort with curated, quality furniture and accessories, inspiring tranquil, stylish sanctuaries for our customers',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Empower every individual to express their unique style and create personalized living spaces through our innovative and customizable furniture solutions",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "we've curated timeless designs and tailored solutions, transforming houses into homes with our exceptional craftsmanship and customer-centric approach.",
  },
];

export const products_url = 'https://www.course-api.com/react-store-products';

export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;

import React from 'react';
import Container from '../atoms/Container';
import ProductOptionColumn from '../organisms/ProductOptionColumn';
import ProductInformationColumn from '../organisms/ProductInformationColumn';
import { DetailProductInfo } from '../../dto/productDto';

const ProductDetailTemplate = () => {
  const product: DetailProductInfo = {
    id: 1,
    productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
    description: '',
    image: '/images/1.jpg',
    price: 1000,
    starCount: 5,
    options: [
      {
        id: 1,
        optionName: '01. 슬라이딩 지퍼백 크리스마스에디션 4종',
        price: 10000,
      },
      {
        id: 2,
        optionName: '02. 슬라이딩 지퍼백 플라워에디션 5종',
        price: 10900,
      },
      {
        id: 3,
        optionName: '고무장갑 베이지 S(소형) 6팩',
        price: 9900,
      },
      {
        id: 4,
        optionName: '뽑아쓰는 키친타올 130매 12팩',
        price: 16900,
      },
      {
        id: 5,
        optionName: '2겹 식빵수세미 6매',
        price: 8900,
      },
    ],
  };

  return (
    <Container className='flex'>
      <ProductInformationColumn image={product.image} price={product.price} productName={product.productName} />
      <ProductOptionColumn options={product.options} />
    </Container>
  );
};

export default ProductDetailTemplate;

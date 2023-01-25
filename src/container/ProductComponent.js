import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products);

  // const { id, title } = products[0];
  // console.log(title)
  const renderList = products.map((product) => {
    // Destructuring Data from API
    const { id, title, price, category, image } = product;
    return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">Title: {title}</div>
              <div className="meta price">Price: ${price}</div>
              <div className="meta">Category: {category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    )
  });

  return <>{renderList}</>
  
}

export default ProductComponent;

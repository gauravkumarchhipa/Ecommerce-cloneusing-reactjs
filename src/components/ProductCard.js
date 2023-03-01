import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src="images/wish.svg" alt='wishlist'/></Link>
            </div>
          <div className="product-image">
            <img src="images/watch.jpg" className='img-fluid' alt='productimage'/>
            <img src="images/watch-1.avif"  alt='productimage'/>
          </div>
          <div className="product-details">
            <p className='brand'>Havels</p>
            <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars 
                count={5} 
                size={24} 
                activeColor="#ffd700"
                edit={false}
                value={4}    
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className='price'>$100.00</p>

          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link>
                    <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                    <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                    <img src='images/add-cart.svg' alt=''/>
                </Link>

            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link><img src="images/wish.svg" alt='wishlist'/></Link>
            </div>
          <div className="product-image">
            <img src="images/watch.jpg" className='img-fluid' alt='productimage'/>
            <img src="images/watch-1.avif"  alt='productimage'/>
          </div>
          <div className="product-details">
            <p className='brand'>Havels</p>
            <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars 
                count={5} 
                size={24} 
                activeColor="#ffd700"
                edit={false}
                value={4}    
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className='price'>$100.00</p>

          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link>
                    <img src='images/prodcompare.svg' alt='compare'/>
                </Link>
                <Link>
                    <img src='images/view.svg' alt='view'/>
                </Link>
                <Link>
                    <img src='images/add-cart.svg' alt=''/>
                </Link>

            </div>
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default ProductCard
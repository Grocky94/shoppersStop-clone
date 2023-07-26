import React from 'react'
import "./SingleProduct.css"
const SingleProduct = () => {
    return (
        <div>
            <div className='singleProduct-screen'>
                <div className='singleProduct-screen-align'>
                    <div className='singleProduct-path'>
                        <p>
                            Home/Men/Clothing/Shirts/Casual Shirts/INFUSE Printed Rayon Comfort Fit Men's Casual Shirt
                        </p>
                    </div>
                    <div className='singleProduct-partition-parent'>
                        {/* left side  */}
                        <div className='singleProduct-productShowing-side-left'>
                            <div className="product-image-holder"></div>
                        </div>
                        {/* right side  */}
                        <div className='singleProduct-describing-side-right'>
                            <div className='singleProduct-name'>
                                <div className='singleProduct-only-name'> Product name</div>
                                <div className='singleProduct-present-rating'>
                                    <div className='star-mention'>
                                        <i class="fa-solid fa-star fa-xl"></i>
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <p className='singleProduct-amount'><span className='money'>₹ 324</span></p>
                            <p>Includes all taxes</p>
                            <div className='parent-count-of-reviewers'><div className='count-of-reviewers'><p className='orange'>Count</p></div><span><p>People Have Bought This Product Recently!</p></span></div>
                            <div className='singleProduct-description-div'>
                                <div className='Product-description-title'>
                                    <p>Product Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

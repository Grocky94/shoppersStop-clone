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
                        <div className='singleProduct-productShowing-side-left'></div>
                        <div className='singleProduct-describing-side-right'>
                            <div className='singleProduct-name'>
                                <div className='singleProduct-only-name'>
                                    <div className='its-name'>Infuse</div>
                                    <div>Printed Rayon Comfort Fit Men's Casual Shirt</div>
                                </div>
                                <div className='singleProduct-present-rating'>
                                    <div className='star-mention'>
                                        <i class="fa-solid fa-star fa-xl"></i>
                                        <p>5</p>
                                    </div>
                                    <div className='star-mention-reviewer'>
                                        <p>(1 Verified Buyer)</p>
                                    </div>
                                </div>
                            </div>
                            <p className='singleProduct-amount'><span className='money'>₹ 324</span> <span className='lineover'>₹ 1299</span><span className='orange'> 75% OFF</span></p>
                            <p>Includes all taxes</p>
                            <div className='parent-count-of-reviewers'><div className='count-of-reviewers'><p className='orange'>493</p></div><span><p>People Have Viewed This Product Recently!</p></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

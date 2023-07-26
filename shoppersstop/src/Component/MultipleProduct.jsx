import React from 'react'
import "./MultipleProduct.css"
const MultipleProduct = () => {
  return (
    <div>
      <div id='multipleproduct-screen'>
        {/* advertise banner  */}
        <div id="multipleproduct-banner-div">
          <img src="https://cdn.dynamicyield.com/api/8770829/images/20f2e22dd861b__plp--casual-trousers------web---static.jpg" />
        </div>
        <div id="multipleproduct-body">
          {/* ...................left side.............. */}
          <div id="multipleproduct-body-left-area">
            {/* first filter  */}
            <div className="multipleProduct-filter">
              <div className='multipleProduct-filter-heading'>
                <p>SUB-CATEGORIES</p>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>Casual</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>formal</p></div>
            </div>
            {/* second filter  */}
            <div className="multipleProduct-filter">
              <div className='multipleProduct-filter-heading'>
                <p>BRANDS</p>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>ADIDAS</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>ALLEN SOLLY</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>AMERICAN EAGLE</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>ARROW SPORT</p></div>
            </div>
            {/* third filter  */}
            <div className="multipleProduct-filter">
              <div className='multipleProduct-filter-heading'>
                <p>OFFERS</p>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>FLAT 30% OFF</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>FLAT 70% OFF </p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>FLAT 40% OFF</p></div>
              <div className='multipleProduct-options'><input type='checkbox' /> <p>FLAT 30% OFF </p></div>
            </div>
            {/* fourt filter  */}
            <div className="multipleProduct-filter">
              <div className='multipleProduct-filter-heading'>
                <p>OFFERS</p>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='multipleProduct-options'><span style={{ backgroundColor: "#f1e9c9" }} className='small-color-circle'>
              </span> <p >BEIGE</p></div>
              <div className='multipleProduct-options'><span style={{ backgroundColor: "#000000" }} className='small-color-circle'>
              </span> <p >BLACK</p></div>
              <div className='multipleProduct-options'><span style={{ backgroundColor: "#0037fe" }} className='small-color-circle'>
              </span> <p >BLUE</p></div>
              <div className='multipleProduct-options'><span style={{ backgroundColor: "#ab2624" }} className='small-color-circle'>
              </span> <p >BROWN</p></div>
              <div className='multipleProduct-options'><span style={{ backgroundColor: "#ab2624" }} className='small-color-circle'>
              </span> <p >GREEN</p></div>
            </div>
          </div>
          {/* ...................right side.............. */}
          <div id="multipleproduct-body-right-area">
            {/* product div  */}
            <div className='multipleproduct-product-div'>
              <div className='multipleproduct-product-div-image-holder'>
                <img src="" />
                <div className='heart-div'>
                  <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.593 21.48c.117.09.26.14.407.14.147 0 .29-.05.407-.14 3.706-2.88 6.26-5.36 8.046-7.807 2.28-3.126 2.8-6.013 1.547-8.58-.893-1.833-3.467-3.32-6.46-2.46A6.58 6.58 0 0 0 12 5.147a6.58 6.58 0 0 0-3.54-2.514c-3-.873-5.567.627-6.46 2.46-1.253 2.567-.733 5.454 1.547 8.58 1.786 2.447 4.34 4.927 8.046 7.807zM3.2 5.673A3.933 3.933 0 0 1 6.753 3.72c.452.002.9.067 1.334.193a5.287 5.287 0 0 1 3.293 2.8.667.667 0 0 0 1.233 0 5.333 5.333 0 0 1 3.294-2.8c2.226-.626 4.226.434 4.893 1.767 1.033 2.113.573 4.473-1.427 7.207A38.085 38.085 0 0 1 12 20.107a38.085 38.085 0 0 1-7.373-7.227C2.633 10.153 2.167 7.793 3.2 5.673z' fill='%23333'/%3E%3C/svg%3E" />
                </div>
                <div className='rating-div-inside-product-image'>
                  <i class="fa-solid fa-star"></i>
                  <p></p>
                </div>
              </div>
              <p className='product-shown-name'>product name</p>
              <p>product detail</p>
              <p>size</p>
              <p>₹</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleProduct

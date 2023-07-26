import React from 'react'
import "./MultipleProduct.css"
const MultipleProduct = () => {
  return (
    <div>
      <div id='multipleproduct-screen'>
        <div id="multipleproduct-banner-div">
          <img src="https://cdn.dynamicyield.com/api/8770829/images/20f2e22dd861b__plp--casual-trousers------web---static.jpg" />
        </div>
        <div id="multipleproduct-body">
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
            
          </div>
        </div>
      </div>


    </div>

  )
}

export default MultipleProduct

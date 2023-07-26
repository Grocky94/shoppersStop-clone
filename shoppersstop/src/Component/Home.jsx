import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="sale-banner">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h47/hda/30416999219230/Strip-Banner-Web--2023-07--17-new-hp-page-flat50.jpg" alt="" />
      </div>
      <div className='sliding-banner'>
        <div className='sliding-banner-arrows-left'>
          <div className='round-small-div'><i class="fa-solid fa-arrow-left"></i></div>
        </div>
        <div className='image-holder-div'>
          <img src="https://sslimages.shoppersstop.com/sys-master/root/hda/he6/30383586869278/indianwear_top-banner-web_main-carousel-hp-page-2023-07-12.jpg" />
        </div>
        <div className='sliding-banner-arrows-right'>
          <div className='round-small-div'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>
      <div className="sale-banner">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h1b/hf7/29782554771486/Icons-2-App----000-new-home-page--2023-apri--msite--l-1111.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home

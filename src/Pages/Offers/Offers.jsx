

import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';
import img3 from '../../assets/images/oie_6170zLx3FmTY.png'
import img4 from '../../assets/images/81m3hAvBeaL._AC_SY575_-removebg-preview.png'
import img5 from '../../assets/images/81++dmPpFdL._AC_SY575__1_-removebg-preview.png'
import img6 from '../../assets/images/71DQRyvIX6L._AC_SY695__1_-removebg-preview.png'
import './style/offers.css'

import './style/product.css'


register();
export default function Offers() {


const swiperRef = useRef(null);

useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: {
        nextEl: ".swiper-btn-nextx",
        prevEl: ".swiper-btn-prevx",
        disabledClass: "swiper-button-disabled"
      },
     


    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();


  }, []);






const [activeColor ,  setActiveColor] = useState(0)
const [activeSize ,  setActiveSize] = useState(1)
const isActiveColor = (color) => color == activeColor ? 'active' : ''
const isActiveSize = (size) => size == activeSize ? 'active' : ''


return (

<div className='offers'> 
<div className='prd-container '>

   

<div className='prd-card'>






<div className='prd-img-container'>
<swiper-container ref={swiperRef}  init="false">
<swiper-slide><img src={img4} className="prd-img"/></swiper-slide>
<swiper-slide><img src={img5} className="prd-img"/></swiper-slide>
<swiper-slide><img src={img6} className="prd-img"/></swiper-slide>
</swiper-container>
</div>

<div className="align">


<div className='prd-banner'>
<p></p>
<button className="arrow swiper-btn-prevx">
<i class="fa-solid fa-chevron-left"/></button>
</div>


  
<p className='title'>COPA FIRM GROUND حذاء</p>
<p className='price'>50,00$</p>

<div className="second-box">



    <div className="size">
    <label className='h5'> : اختر مقاس </label>
    <div className="options d-flex p-2">
        <span className= {isActiveSize(0)} onClick={() => setActiveSize(0)}>L</span>
        <span className= {isActiveSize(1)} onClick={() => setActiveSize(1)}>M</span>
        <span className= {isActiveSize(2)} onClick={() => setActiveSize(2)}>S</span>
    </div>
    </div>


    <div className="color-container pe-3">
    <label className='h5'> : اختر لون </label>
    <div className="options d-flex p-2 pt-3">
      <div className= {'color-icon bg-danger ' + isActiveColor(0) } onClick={() => setActiveColor(0)} />
      <div className={'color-icon bg-primary ' + isActiveColor(1) } onClick={() => setActiveColor(1)}/>
      <div className={'color-icon bg-warning ' + isActiveColor(2) } onClick={()=> setActiveColor(2)}/>
    </div>
    </div>





</div>


<div className="btns-container mt-5">
    <button className='btn btn-danger py-2 px-5 mx-3 fw-bolder'>اضافة الى السلة</button>
    <button className='fav-btn mx-3'>
<i className="fa-solid fa-heart mx-2"/>
        اضافة الى  المفضلة</button>
</div>
</div>


<button className="arrow swiper-btn-nextx">
<i class="fa-solid fa-chevron-right"/>
</button>



</div>

</div>

</div>
)
}

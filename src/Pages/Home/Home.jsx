
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../components/ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/pagination';
import './AdidasBtn.css';
import './Home.css';
import './HomeRWD.css';
import { useNavigate } from 'react-router-dom';





export default function Home() {

  const dispatch = useDispatch()
  const cover = useSelector((state) => state.setting.cover);
  let allProducts = useSelector((state) => state.allProducts.allProducts)
  let alternative = useSelector((state) => state.allProducts.alternative)

  const Navigate = useNavigate();

  function handleSwiperNav(num) {
    return {
      nextEl: `.swiper${num}-btn-next`,
      prevEl: `.swiper${num}-btn-prev`,
      disabledClass: `.swiper${num}-button-disabled`
    }

  }

  function generateRandomArray(length , diff) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * diff); // Generates a random number between 0 and 10
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  

  const swiperBreakPoints1 = {

    0: {
      slidesPerView: 2,
      speed: 400,
      slidesPerGroup: 2
    },

    768: {
      slidesPerView: 4,
      speed: 500,
      slidesPerGroup: 3
    }

  }
  const swiperBreakPoints2 = {

    0: {
      slidesPerView: 1,
      speed: 400,
      slidesPerGroup: 1
    },

    768: {
      slidesPerView: 4,
      speed: 500,
      slidesPerGroup: 3
    }


  }
  const pagination = {
    clickable: true,

    bulletClass: `swiper-pagination-bullet`,
    renderBullet: function (index, className) {
      return `<span className="${className}"></span>`;
    },
  };




  return (
    <div className='Home' role='main'>

      <div className="homepage-cover">
        <img
          className='w-100'
          src={cover.home || 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwb583eabd/MENA_Local_Activations/em-emc-Ultraboost-running-fw23-launch-hp-mh-d-new.gif'}
        >
        </img>

        <div className="homepage-cover-text text-light d-none">
          <p>حذاء من عندنا</p>
          <p>أوريجينالز من عندكم</p>

          <button className='btn-adidas-light'>
            <i className="arrow-front"></i>
            <i className="arrow-back"></i>
            استعراض التشكيلة
          </button>


        </div>



      </div>


      <div className="experience-component my-5 text-center">
        <h2 className='title'>الاكثر رواجاً</h2>
        <div className="experience-region my-5">
          <div className="box py-2">stan smith</div>
          <div className="box py-2">superstar</div>
          <div className="box py-2">gazelle</div>
          <div className="box py-2">samba</div>
          <div className="box py-2">part sale</div>
        </div>
      </div>



      <div className="cat-container row justify-content-center m-0" >

        <div className="main-cat-box col-12 col-md-4 position-relative" onClick={() => Navigate('/srch/kids/all')}>
          <a className='position-absolute main-cat-btn d-flex'>
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Kids</span>
          </a>
        </div>

        <div className="main-cat-box col-12 col-md-4 position-relative"onClick={() => Navigate('/srch/women/all')}>


          <a className='position-absolute main-cat-btn d-flex'>
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Women</span>
          </a>

        </div>

        <div className="main-cat-box col-12 col-md-4 position-relative" onClick={() => Navigate('/srch/men/all')}
        >

          <a className='position-absolute main-cat-btn d-flex'>
            
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg'></img>
            <span>Men</span>
          </a>

        </div>

      </div>



      {allProducts.length > 0 &&

        <div className="experience-component product-list my-5">

          <button className="swiper1-btn-next swiper-btn-next" />
          <button className="swiper1-btn-prev swiper-btn-prev" />
          <h3 className='text-end pe-2 mt-5 mb-4'>وصل حديثاً</h3>


          <Swiper className='swiper swiper1'
            spaceBetween={10}
            navigation={handleSwiperNav(1)}
            pagination={{ pagination }}
            breakpoints={swiperBreakPoints1}
          >


            {generateRandomArray(10 , allProducts.length + alternative.length - 2).map(number =>
            
              <SwiperSlide>
                <div className="events-stop">
                  <ProductCard prd={[...allProducts , ...alternative][number]} />
                </div>

              </SwiperSlide>)}


          </Swiper>


        </div>}


      {allProducts.length > 0 && <div className="experience-component product-list my-5">

        <button className="swiper2-btn-next swiper-btn-next" />
        <button className="swiper2-btn-prev swiper-btn-prev" />

        <h3 className='text-end pe-2 mt-5 mb-4'>الأفضل مبيعاً</h3>


        <Swiper className='swiper swiper2' spaceBetween={10} navigation={handleSwiperNav(2)} pagination={{ pagination }} breakpoints={swiperBreakPoints2}>
          {[...allProducts , ...alternative].sort((a, b) => b.price - a.price).slice(0,10).map(prd =>
            <SwiperSlide>

              <div className="events-stop">
                <ProductCard prd={prd} />
              </div>

            </SwiperSlide>
          )}
        </Swiper>


      </div>}


      <div className="experience-component my-5 position-relative">


        <h3 className='text-end pe-2 mt-5 mb-4'> السائد والمنتشر</h3>



        <Swiper className='swiper swiper3' spaceBetween={15} navigation={handleSwiperNav(2)} pagination={pagination}
          slidesPerView={4}
          speed={400}
          breakpoints={
            {



              0: {
                slidesPerView: 2,
                speed: 400,
                slidesPerGroup: 1
              },
              1026: {
                slidesPerView: 4,
                speed: 400,
                slidesPerGroup: 1
              },




            }
          }




        >




          <SwiperSlide>


            <figure>

              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw748734db/++++++++++++++++++_____aaaaaa____BBBBB__YOGA_TC.jpg'
                  className='w-100' width={50} />
              </picture>


              <figcaption className='text-end' style={{ "fontSize": "12px" }}>
                <strong className='my-2 d-block'>وسع حدودك مع اليوغا</strong>
                <p className='opacity-75'>ناعم ، لين ، مجموعة يوغا مريحة لدعمك غى كل الوضعيات </p>
                <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
              </figcaption>



            </figure>



          </SwiperSlide>





          <SwiperSlide>


            <figure>
              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe0db3718/++++++++_+_+_+_+_+_+_MENA_CITYESCAPE+XPLRBOOST_SS23_TC.jpg'
                  className='w-100' />
              </picture>


              <figcaption className='text-end' style={{ "fontSize": "12px" }}>
                <strong className='my-2 d-block'>كل ما يحتاج إليه الشباب</strong>
                <p className='opacity-75'>تخطى كل الحدود بأسلوب يتميز بالراحة والأناقة. تشكيلة جديدة ولدت في قلب المدينة وانطلقت إلى </p>
                <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
              </figcaption>


            </figure>



          </SwiperSlide>





          <SwiperSlide >
            <figure>
              <picture>
                <img src='https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw59596362/+++++++++_aaaaaa_000000_Samba&Gazelle_TC.jpg'
                  className='w-100' />
              </picture>
            </figure>

            <figcaption className='text-end' style={{ "fontSize": "12px" }}>
              <strong className='my-2 d-block'>و تعيش الأسطورة</strong>
              <p className='opacity-75'>
                جلد ناعم ، خياطة ممتازة وألوان ترابية. هذا هو تراثنا
              </p>
              <strong><a href='' className='text-dark mt-2'>تسوق الان</a></strong>
            </figcaption>



          </SwiperSlide>







        </Swiper>

      </div>




    </div>




  )
}

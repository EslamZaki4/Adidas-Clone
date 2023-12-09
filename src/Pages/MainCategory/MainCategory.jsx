import { useNavigate, useParams } from "react-router-dom";

import "./MainCategory.css";
import "./MainCategoryRWD.css";
import { icons, mainCategoryImages } from "../../config/config";
import { useState, useEffect } from 'react';
import { getSetting } from '../../Store/Slices/settingSlice';
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from "../../components/ProductCard/ProductCard";
export default function MainCategory() {
  const { catName } = useParams();
  const navigate = useNavigate();
  const [menItems, setMenItems] = useState('')
  const menSubNames = ['هودى', 'شورت', 'تيشيرت', 'أحذية']
  const womenSubNames = ['تيشيرت', 'جاكيت', 'بنطال', 'أحذية']
  const kidsSubName = ['إكسسوارات', 'ملابس', 'أحذية']
  const [gender, setGender] = useState('الرجال')

  const [justArrived, setJustArrived] = useState([])





  const cover = useSelector((state) => state.setting.cover);
  let allProducts = useSelector((state) => state.allProducts.allProducts)
  let alternative = useSelector((state) => state.allProducts.alternative)


  useEffect(() => {

    try {
      if (allProducts.length > 0) {

        let localGender;
        catName === "men" ? localGender = ('الرجال') :
        catName === "women" ? localGender = ('النساء') :  localGender = ('الأطفال')

        catName === "men" ? localGender = ('الرجال') :
          catName === "women" ? localGender = ('النساء') : localGender = ('الأطفال')

        const arr = ([...allProducts, ...alternative].filter(prd => prd.gender == localGender))
        setJustArrived(arr)
      }

    } catch (error) {
      console.log(error)
    }

  }, [])



  useEffect(() => {
    console.log(justArrived)
  }, [justArrived])


  function handleSwiperNav(num) {
    return {
      nextEl: `.swiper${num}-btn-next`,
      prevEl: `.swiper${num}-btn-prev`,
      disabledClass: `.swiper${num}-button-disabled`
    }

  }

  function generateRandomArray(length, diff) {
    // alert(diff)
    // alert('produc a' , allProducts.length)
    // alert('produc at' , alternative.length)
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
    <div className="Home" role="main">

      <div className="homepage-cover">
        <img
          className="w-100"
          src={catName === "men" ?
            cover.men || mainCategoryImages.menCover :
            catName === "women" ?
              cover.women || mainCategoryImages.womenCover :
              cover.kids || mainCategoryImages.kidsCover
          }
          alt="Homepage Cover"
        />

        <div className="homepage-cover-text text-light">
          <p>حذاء من عندنا</p>
          <p>أوريجينالز من عندكم</p>

          <button className="btn-adidas-light">
            <i className="arrow-front"></i>
            <i className="arrow-back"></i>
            استعراض التشكيلة
          </button>
        </div>
      </div>




      <div className="cat-container row justify-content-center m-0 p-0">


        <h3 className="header-box text-end m-4">
          {catName == 'men' ? 'الرجال' : catName == 'women' ? 'النساء' : 'الاطفال'}
        </h3>

        {catName == 'men' && menSubNames.map(subName =>

          <div key={subName}
            className="main-cat-men col-12 col-md-3 position-relative"
            onClick={() => navigate(`/srch/${catName}/${subName}`)}
          >

            <a className="position-absolute main-cat-btn d-flex">
              <img src={icons.arrowRightBlack} width={20} height={20} className="my-auto" />
              <span>{subName}</span>
            </a>

          </div>
        )}


        {catName == 'women' && womenSubNames.map(subName =>

          <div key={subName}
            className="main-cat-women col-12 col-md-4 position-relative" onClick={() => navigate(`/srch/${catName}/${subName}`)}>
            <a className="position-absolute main-cat-btn d-flex">
              <span className="me-1">نسائي</span>
              <span>{subName}</span>
              <span className="ms-1"> تسوقى </span>
            </a>
          </div>

        )}




        {catName == 'kids' && kidsSubName.map(subName =>


          <div
            key={subName}
            className="main-cat-kids col-12 col-md-4 position-relative" onClick={() => navigate(`/srch/${catName}/${subName}`)}>
            <a className="position-absolute main-cat-btn d-flex">
              <img src={icons.arrowRightBlack} width={20} height={20} className="my-auto" />
              <span className="me-1"> للاطفال </span>
              <span>{subName}</span>
            </a>
          </div>



        )}



      </div>


      {(allProducts?.length > 0 && alternative?.length > 0 && justArrived?.length > 0) ?

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


            {generateRandomArray(10, 10).map(number =>

              <SwiperSlide>
                <div className="events-stop">
                  <ProductCard prd={justArrived[number]} />
                </div>

              </SwiperSlide>)}


          </Swiper>


        </div> : null}


      {allProducts.length > 0 && <div className="experience-component product-list my-5">

        <button className="swiper2-btn-next swiper-btn-next" />
        <button className="swiper2-btn-prev swiper-btn-prev" />

        <h3 className='text-end pe-2 mt-5 mb-4'>الأفضل مبيعاً</h3>


        <Swiper className='swiper swiper2' spaceBetween={10} navigation={handleSwiperNav(2)} pagination={{ pagination }} breakpoints={swiperBreakPoints2}>
          {[...allProducts, ...alternative].filter(prd => prd.gender == gender).sort((a, b) => b.price - a.price).slice(0, 10).map(prd =>
            <SwiperSlide>

              <div className="events-stop">
                <ProductCard prd={prd} />
              </div>

            </SwiperSlide>
          )}
        </Swiper>


      </div>}



    </div>

  );








}

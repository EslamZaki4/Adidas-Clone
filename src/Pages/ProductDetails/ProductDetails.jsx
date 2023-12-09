//____________PRODUCTDETAILS________________
import React, { useEffect, useRef, useState } from 'react';
import ImageZoom from "react-image-zooom";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Slickslide from '../../Components/Slickslide/Slickslide';
import { GETallProducts } from "../../Store/Slices/allProducts";
import { icons,heartIconPath } from '../../config/config';
import CartMenu from './../../Components/CartMenu/CartMenu';
import { addToCart } from './../../Store/Slices/cartSlice';
import WishlistAlert from '../../Components/WishListAlert/WishListAlert';
import { addToWishList } from '../../Store/Slices/wishlistSlice';
import './ProductDetails.css';
//__________________________

const ProductDetails = () => {

  const { id } = useParams();
  const [prd, setPrd] = useState()
  const [showMore, setShowMore] = useState(false)
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const [activeSize, setActiveSize] = useState('')
  const [bounceAnime, setBounceAnime] = useState(false)
  const [innerWinWidth, setInnerWinWidth] = useState(window.innerWidth);
  const [cartMenuActive, setCartMenuActive] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');


  let allProducts = useSelector((state) => state.allProducts.allProducts)
  let alternative = useSelector((state) => state.allProducts.alternative)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth', });
  const effRan = useRef(false);

  useEffect(() => {
    const _prd = allProducts.find(prd => prd.id == id) || alternative.find(prd => prd.id == id);
    setPrd(_prd);
    scrollToTop();
  }, [allProducts , location])




  useEffect(() => {
    if (cartMenuActive) {
   
      navigate('menucart')
  
    } else {

      navigate(location.pathname.replace('menucart', ''))
  
    }
  }, [cartMenuActive])





  useEffect(() => {
    if (effRan.current) return;
    if (!allProducts.length) {
      dispatch(GETallProducts());
    }
    return () => effRan.current = true;

  }, [location]);


  const showCartMenu = async () => {

    dispatch(addToCart({
      id: prd.id,
      size: activeSize,

    }))

    setCartMenuActive(true);
  }
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleWishListDetails = () => {
    const isProductInWishlist = favorites.some((item) => item === prd.id);

    if (isProductInWishlist) {
      dispatch(addToWishList(prd.id));
      setAlertMessage('لقد تم حذف المنتج من لائحة المنتجات التي تتمناها.');
    } else {
      dispatch(addToWishList(prd.id));
      setAlertMessage('تمت إضافة المنتج إلى قائمة الرغبات الخاصة بك.');
    }
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    setTimeout(() => setShowAlert(false), 3000);
  }


  return (

    <>
    {showAlert && <WishlistAlert message={alertMessage} onClose={closeAlert} />}
      {prd && <div className={cartMenuActive ? 'd-flex' : 'd-none'}>
        <CartMenu setCartMenuActive={setCartMenuActive} activeSize={activeSize} prd={prd} />
      </div>}

      {prd &&

        <div className={`details row mx-0 ${cartMenuActive && 'freeze'}`}>


          <aside className="col-4 text-end">

            <p className='prd-name'>{prd.name}</p>
            <p className='prd-price'>{currency.format(prd.price)}</p>

            <div className='sizebox-container'>


              <div className="d-flex justify-content-between ps-5">
                <Link to={''}>جدول المقاسات</Link>
                <strong> اختر مقاس</strong>
              </div>


              <ul className={bounceAnime ? 'sizebox bounce-right' : 'sizebox'}>
                {prd.size.map((size) =>
                  <li
                    key={uuidv4()}
                    className={!prd.availablesize.includes(size) ? 'frozen' : activeSize == size ? 'active' : ''}
                    onClick={() => prd.availablesize.includes(size) ? setActiveSize(size) : null}>
                    {size}
                  </li>
                )}
              </ul>

            </div>








            <span className='text-warning'>{bounceAnime ? 'يرجى اختيار المقاس' : ''}</span>
            <div className="qty" style={{ direction: 'rtl' }}>
              <label className='fw-bold'> إمكانية التوفر: </label>
              <span className='px-2 text-muted'>{activeSize ? `only ${prd.availablestock[prd.availablesize.indexOf(activeSize)]} left` : ' اختر الطرازات المتوفرة'}</span>
            </div>



            <div className="d-flex flex-row-reverse mt-4">

              <div className='btn-add-to-cart col-8' onClick={() => {
                setBounceAnime(!activeSize);
                setTimeout(() => setBounceAnime(false), 1000);
                activeSize && showCartMenu();
              }}>
                <button className={`btn-adidas-dark w-100 ${!activeSize ? 'bg-secondary' : ''}`}>
                  <i className="arrow-front" />
                  <i className="arrow-back" />
                  <span>اضف الى عربة التسوف</span>
                </button>
              </div>



              <button className='wishlist-btn'>
              <img
            src={favorites.some((item) => item === prd.id) ? heartIconPath.filled : heartIconPath.empty}
            onClick={handleWishListDetails} 
            title="wishlist"
          />
              </button>

            </div>

            <div className="delivery-section">
              <ul className='mt-5 p-0 text-muted list-none'>

                <li>
                  <img src={icons.delivery} />
                  <span>شحن مجاني على الطلبات التي تزيد عن 999 جنيه مصري</span>
                </li>

                <li>
                  <img src={icons.deliverySameDay} />
                  <span className="text">التوصيل خلال1-2 يوم عمل للمدن والمناطق الرئيسية</span>
                </li>

                <li>
                  <p>(داخل القاهرة الكبرى والإسكندرية والدلتا والصعيد والبحر الأحمر) المناطق الأبعد من الممكن ان تأخذ وقت اكثر من يومين</p>
                </li>

                <li>
                  <img src={icons.cod} />
                  <span>متاح الدفع عند الاستلام</span>
                </li>

                <li>
                  <img src={icons.lock} />
                  <span>معاملات دفع آمنة </span>
                </li>

                <li>
                  <img src={icons.deliverySameDay} />
                  <span> 30 يوم إرجاع مجاني </span>
                </li>

              </ul>
            </div>

          </aside>

          <main className="col-8 img_container">


            {prd.imgurl?.map((value, index) =>

              <div 
              className='position-relative'
              style={{
                width: index == 0 || index == prd.imgurl.length - 1 && !(prd.imgurl.length % 2) ? '94%' : '47%',
                display: !showMore && index >= 5 ? 'none' : 'inline-flex',
                
              }} key={uuidv4()} >

                <ImageZoom 
                className = "w-100"
                key={uuidv4()} 
                src={value}
                
                zoom="200" 
                />
                
              </div>


            )}


            <button className='show_more_btn centerme' onClick={() => setShowMore(!showMore)}>
              <i className={`fa-solid fa-chevron-${!showMore ? 'down' : 'up'}`} />
              <span>{!showMore ? 'أظهر المزيد' : 'أظهر أقل'}</span>
            </button>


            <div className="colors-availability text-center  pt-5" dir='rtl'>
              <span className=' fw-bolder h6'>
                {`${prd.alternative.length + 1} ألوان متوفرة - انظر أدناه`}
              </span>
            </div>


            <div className="alternative-container">

              <div className="details-alternative">
                <Slickslide prdId={id} key={uuidv4()} />
                {prd.alternative.map(ip => <Slickslide prdId={ip} key={uuidv4()} />)}
              </div>

              <div className='text-end col-12'>{prd.color}</div>

            </div>




            <div className="prd-info text-end" dir='rtl'>
              <h1 className='py-4'>وصف المنتج</h1>
              <p className='prd-name' >{prd.name}</p>
              <p className='prd-headline'>{prd.headline}</p>
              <p className='prd-description'>{prd.description}</p>
              <h2 className='mt-5'>تفاصيل المُنتج</h2>
              <ul className='prd-detail border border-1'>
                {prd.details.map(detail => <li key={uuidv4()}>{detail}</li>)}
              </ul>
            </div>


          </main>



        </div>}

    </>


  )
}

export default ProductDetails
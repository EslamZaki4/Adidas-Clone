import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addToWishList } from '../../Store/Slices/wishlistSlice';
import { heartIconPath } from '../../config/config';
import Slickslide from '../Slickslide/Slickslide';
import WishlistAlert from '../WishListAlert/WishListAlert';
import './ProductCard.css';


const ProductCard = ({ prd }) => {


  const [ximg, setXimg] = useState('');

  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [hoverON, setHoverON] = useState(false)
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const navigate = useNavigate();
  const handleWishList = () => {
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
  const SlickSlideMemo = useMemo(
    () =>
      <>
        <Slickslide prdId={prd.id} setXimg={setXimg} key={uuidv4()} />
        {prd.alternative && prd.alternative.map(id => <Slickslide prdId={id} setXimg={setXimg} key={uuidv4()} />)}
      </>
    , [])




  const showSecondImg = () => {
    setXimg(prd.imgurl[4]);
    setHoverON(true)
  }
  const hideSecondImg = () => {
    setXimg('');
    setHoverON(false);
  }




  return (
    <>
      {showAlert && <WishlistAlert message={alertMessage} onClose={closeAlert} />}
      <figure
        className={hoverON ? 'prd-card card-border position-absolute bg-light pb-3' : 'prd-card'}
        style={{'zIndex' : 9}}
        onMouseEnter={showSecondImg}
        onMouseLeave={hideSecondImg}>


        <div className="position-relative">
          <img
            className="Love-card"
            style={{ width: 50, height: 20 }}
            src={favorites.some((item) => item === prd.id) ? heartIconPath.filled : heartIconPath.empty}
            onClick={handleWishList}
            title="wishlist"
          />

          <picture>

            <div className="prd-img">

              <a onClick={() => navigate(`/details/${prd.id}`)}
                className='img-lnk'>
                <img src={ximg || prd.imgurl[0]} className='w-100' />
              </a>
            </div>


            <div className="pct-discount text-end">
              <span>-25%</span>
            </div>





            {/* ____________________________________________Slickslide ___________________________________________________*/}

            <div className={`slick-slide-container ${hoverON ? 'd-flex' : 'd-none'} flex-row-reverse justify-content-start`}>
              
              {SlickSlideMemo}

            </div>




          </picture>
        </div>



        <figcaption className="prd-body">
          <div className="prd-name">
            <a href="">{prd.name}</a>
          </div>
          <div className="prd-price">
            <del className='prev-price'>
              <span content={prd.oldprice}>{currency.format(prd.oldprice)}</span>
            </del>
            <span className="curr-price" content={prd.price}>{currency.format(prd.price)}</span>
          </div>
        </figcaption>


      </figure>
    </>
  )

}


export default ProductCard;
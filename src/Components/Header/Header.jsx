import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import HeaderPromotion from '../HeaderPromotion/HeaderPromotion';
import EgFlag from '../../assets/icons/EgFlag.png';
import './Header.css';
import './HeaderRwd.css';
import Autocomplete from './../Autocomplete/Autocomplete';
import { useRef } from 'react';
import { getSetting } from '../../Store/Slices/settingSlice';
import { GETallProducts } from '../../Store/Slices/allProducts';
import { getWishlistByEmail } from '../../Pages/WishList/firebasewishList';
import { getWishListFirestore } from '../../Store/Slices/wishlistSlice';
import { getFromCart } from './../../Store/Slices/cartSlice';


function Header() {

  const favorites = useSelector((state) => state.favorites.favorites);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const cart = useSelector((state) => state.cart.cart) || [];
  const navcolor = useSelector((state) => state.setting.navcolor);



  const dispatch = useDispatch()
  const Navigate = useNavigate();
  const [value, setvalue] = useState("")
  const [srchDsBlock, setSrchDsBlock] = useState(false)


  useEffect(() => {
    const username = localStorage.getItem("name")
    setvalue(username)
  }, [])




  //Get Setting 
  const effRanLoader = useRef(false)
  useEffect(() => {
    if (effRanLoader.current) return;
    dispatch(getSetting())
    return () => effRanLoader.current = true
  }, [])




  //Get Products 
  const effRanAllprd = useRef(false);
  useEffect(() => {
    if (effRanAllprd.current || allProducts.length) return;
    dispatch(GETallProducts());
    return () => effRanAllprd.current = true;
  }, [])



  //Get WishlIST 
  const effRanAllWishList = useRef(false);
  useEffect(() => {

    if (effRanAllWishList.current) return;

    getWishlistByEmail()
      .then(data => dispatch(getWishListFirestore(data)))
      .catch(err => console.log(err));

    return () => {
      effRanAllWishList.current = true;
    }

  }, [])



  //Get Cart
  const effRanCart = useRef(false);
  useEffect(() => {
    if (effRanCart.current) return;
    dispatch(getFromCart())
    return () => effRanCart.current = true;
  }, [])



  return (


    <header>

      <HeaderPromotion />
      <Navbar data-bs-theme="light" className='d-flex flex-column' id='nav' style={{ 'backgroundColor': navcolor }}>


        {!srchDsBlock ?
          <>

            <Nav id='navTop' className={"w-100 d-none d-lg-flex m-0 "} >
              <img src={EgFlag} width={20} height={15} className='my-auto mx-3  ' />

              {value ?
                <Nav.Link href='/logout' className='fw-bolder' style={{ 'fontFamily': 'sans-serif' }}>  {value} </Nav.Link>
                :
                <Nav.Link href='/login'>سجل الدخول</Nav.Link>}
              <Nav.Link >المرتجعات</Nav.Link>
              <Nav.Link >adiclub</Nav.Link>
              <Nav.Link >منتبع الطلب</Nav.Link>
              <Nav.Link >مساعدة</Nav.Link>
              <Nav.Link > Egypt موقع اديداس الرسمى</Nav.Link>
            </Nav>
            <Nav id='navBottom' className='flex-row-reverse w-100 m-0 p-0 '>

              <div className="nav-toggle-btn col-1 d-lg-none order-1"><i className="fa fa-bars" /></div>


              <Navbar.Brand className='col-6 col-lg-2 adidas-logo d-flex justify-content-center me-4 order-4 order-lg-1 ' onClick={() => Navigate('home')} >
                <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg' />
              </Navbar.Brand>




              <ul id='navLinksBottom' className='col-lg-5 d-none d-lg-flex flex-row-reverse order-1 m-0' role='menu'>

                <Nav.Link onClick={() => Navigate('men')} role="menuitem">الرجال</Nav.Link>
                <Nav.Link onClick={() => Navigate('women')} role="menuitem">النساء</Nav.Link>
                <Nav.Link onClick={() => Navigate('kids')} role="menuitem">الاطفال</Nav.Link>
                <Nav.Link onClick={() => Navigate('sports')} role="menuitem">الرياضات</Nav.Link>
                <Nav.Link onClick={() => Navigate('lifestyle')} role="menuitem">اسلوب حياه</Nav.Link>
                <Nav.Link onClick={() => Navigate('offers')} role="menuitem" style={{ color: '#e82c2c' }}>عروض</Nav.Link>

              </ul>


              <div className="col-6 col-lg-5 d-flex order-4 m-0">


                <div className="utility_nav">

                  <div className='d-none d-lg-block'>
                    <Autocomplete setSrchDsBlock={setSrchDsBlock}></Autocomplete>

                  </div>






                  <div onClick={() => setSrchDsBlock(true)}>
                    <img className='ms-2 d-lg-none position-absoulte' style={{ 'zIndex': 15 }} src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw16c0c20e/images/search.svg" title="srch" width={25} height={25} />
                  </div>




                  <div onClick={() => { Navigate("/profile") }}>
                    <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw217f2aa1/images/profile.svg" title="Profile" width={22} height={24} />
                  </div>

                  <div onClick={() => { Navigate("/WishList") }}>

                    <div className="notification">
                      <img className='imgnotif' src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/ar_EG/v1697860680345/images/wishlist.svg" title="wishlist" />

                      {favorites?.length > 0 ?
                        <span className="badge">{favorites.length}</span>
                        : null
                      }

                    </div>

                  </div>



                  <div onClick={() => { Navigate("/cart") }}>
                    <div className="notification">
                      <img className='imgnotif' src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwa2f65e79/images/bag%20empty.svg" title="cart" />
                     
                     
                  

                      {favorites?.length > 0 ?
                            <span className="badge">{cart.length}</span>
                        : null
                      }



                    </div>
                  </div>



                </div>




              </div>



            </Nav>
          </>


          :

          <>
            <div className="div">

              <Navbar.Brand className='col-8 col-lg-2 adidas-logo d-flex justify-content-center me-4 order-4 order-lg-1 ' onClick={() => Navigate('home')} >
                <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg' />
              </Navbar.Brand>

            </div>



            <div className="div w-100 d-flex justify-content-center">
              <Autocomplete setSrchDsBlock={setSrchDsBlock}></Autocomplete>

            </div>

          </>




        }














      </Navbar>





    </header>


  )
}

export default Header
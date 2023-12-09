//____________HEADERMENUTOGGLE________________
import React from 'react'
import './HeaderMenuToggle.css'
//__________________________
const HeaderMenuToggle = ({setMenuToggleVisible , menuToggleVisible}) => {


  return (
    <div 
    className = {`header-menu-toggle d-lg-none ${menuToggleVisible ? 'showToggleMenu' : ''}`}>


      <div className='col-12 d-flex justify-content-center align-items-center'>

      <div className="logo me-auto">
      <img 
      src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg'
      width={70}
      height={60}
      />
      </div>

      <div className="icon me-auto ms-4 h4" onClick={()=> setMenuToggleVisible(false)}>
      <i className="fa-solid fa-xmark"/>
      </div>

      
          

      </div>

      <ul className="menu-toggle-links1 list-none">
        <li>الرجال</li>
        <li>النساء</li>
        <li>الاطفال</li>
        <li>الرياضات</li>
        <li>اسلوب حياه</li>
        <li>تخفيضات يوم السنجلز</li>
      </ul>

      <ul className="menu-toggle-links2 list-none">
        <li>سجّل الدخول </li>
        <li>لائحة املنتجات التى اتمناها</li>
        <li>متتبع الطلب</li>
        <li>المرتجعات</li>
      </ul>

      <ul className="menu-toggle-links3 list-none">
        <li>AdiClub</li>
        <li>Store Finder</li>
        <li>مساعدة</li>
      </ul>



    <div className='langbox border border-2'>
      lang
    </div>
    </div>
  )
}

export default HeaderMenuToggle
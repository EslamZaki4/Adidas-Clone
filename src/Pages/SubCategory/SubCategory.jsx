import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GETallProducts } from "../../Store/Slices/allProducts";
import { getWishListFirestore } from '../../Store/Slices/wishlistSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import { icons } from '../../config/config';
import { getWishlistByEmail } from '../WishList/firebasewishList';
import { FilterMenu } from './../../Components/FilterMenu/FilterMenu';
import Loading from './../../Components/Loading/Loading';
import './SubCategory.css';




export default function SubCategory() {

  const { catName, sub } = useParams();
  const dispatch = useDispatch();

  const effRanAllprd = useRef(false);

  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const alternative = useSelector((state) => state.allProducts.alternative);
  const isLoadingPrd = useSelector((state) => state.allProducts.isLoading);


  const [filterMenuActive, setFilterMenuActive] = useState(false)
  const [filterResult, setFilterResult] = useState([])



  //  Filter For Main Category
  useEffect(() => {

    let srchResult = [...allProducts]

    //     Gender 
    let gender;
    catName == 'men' ? gender = 'الرجال' : catName == 'women' ? gender = 'النساء' : gender = 'الأطفال';
    srchResult = srchResult.filter(prd => prd.gender == gender || prd.gender == "");

    
    if(sub != 'all'){
      srchResult = srchResult.filter(prd => prd.arcategory.replace(' ' , '') == sub || prd.category.replace(' ' , '') == sub);
    }
    //    Category  


    setFilterResult(srchResult)

  }, [allProducts])










  return (
    <>
      {isLoadingPrd ?

        <div className="h111" style={{'minHeight' : '100vh'}}>

          <Loading />
        </div>
        :

        
        <>


          <div className={` ${filterMenuActive ? 'd-flex' : 'd-none'}`} >
            <FilterMenu
              setFilterResult={setFilterResult}
              filterResult={filterResult}
              allProducts={allProducts}
              alternative={alternative}
              catName = {catName}
              sub = {sub}
              setFilterMenuActive={setFilterMenuActive} />
          </div>


          {/* <h1 className='bg-danger text-center'> filter res = {filterResult.length}</h1> */}

          <div className={`main pb-5 ${!filterResult ? 'freeze' : ''}`} style={{'minHeight' : '50vh'}}>

            <div className="headline">

              <button className='filter-btn my-4 ms-2' onClick={() => setFilterMenuActive(!filterMenuActive)}>
                <img src={icons.filter}/>
                فلتر
              </button>

              <p className='title m-5 fw-normal'>
                {catName == 'men' && sub != 'all' ? `${sub} للرجال ` : ` `}
                {catName == 'woemn' && sub != 'all' ? `${sub} للنساء ` : ' '}
                {catName == 'kids' && sub != 'all' ? `${sub} للاطفال ` : '  '}
              </p>

            </div>



            <div className="row prd-row">


              {
                filterResult && filterResult.map(prd =>
                  <div className="col-12 col-sm-4 col-md-3 p-0 prd-container" key={prd.id}>
                    <ProductCard prd={prd} />
                  </div>
                )
              }

            </div>

          </div>


        </>

      }
    </>
  )
}

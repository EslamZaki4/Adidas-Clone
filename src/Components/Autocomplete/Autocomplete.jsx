import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Autocomplete.css';
import { useNavigate } from 'react-router-dom';


const Autocomplete = ({setSrchDsBlock}) => {
    const [filterValue, setFilterValue] = useState('');
    const [filterResult, setFilterResult] = useState([])
    const [filterResultCat, setFilterResultCat] = useState([])

    
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
    const allProducts = useSelector((state) => state.allProducts.allProducts);
    const alternative = useSelector((state) => state.allProducts.alternative);
    const navigate = useNavigate();



    useEffect(() => {
        let allprd = [...allProducts, ...alternative]
        let srchResult = allprd.filter(prd => filterValue.length > 0 && prd.name.toLowerCase().startsWith(filterValue.toLocaleLowerCase()))
        let srchResultCat = allprd.filter(prd => filterValue.length > 0 && prd.category.toLowerCase().startsWith(filterValue.toLocaleLowerCase()))
        setFilterResult(srchResult)
        setFilterResultCat(srchResultCat)

    }, [filterValue])


    useEffect(() => {
        setFilterResult('');
        setFilterResultCat('');
    }, [location])



    return (
        <div className='autocomplete position-relative '>


            <div className="srchinput-container">
                
                <i className="fa-solid fa-xmark d-lg-none position-absolute pt-3 ms-3 fs-4 opacity-75"
                onClick={()=> {setSrchDsBlock(false)}}/>

                <input type='text' id='srchinput' placeholder=' بحث' dir='rtl' 
                onChange={(e) => setFilterValue(e.target.value)} />
            </div>
          




            <div className='result-srch mt-2 ms-2 position-absolute bg-light' style={{ 'zIndex': 9, 'right': 0, "top": "45px", width: '350px' }}>
                <div className="items me-2">

                    {filterResult.length > 0 && filterResult.map((prd, index) =>

                        <>
                            {index == 0 && <h6 className='my-1 me-2 text-end my-3 me-1 fw-bold'>المنتجات</h6>}

                            <div
                                key={index}
                                className='d-flex my-1 flex-row me-2'
                                onMouseOver={(e) => e.target.style = 'cursor : pointer'}
                                onClick={() => {
                                    
                                    navigate(`details/${prd.id}`);
                                    setFilterValue('');
                                }}
                            >

                                <div className="result-img ">
                                    <img src={prd.imgurl[0]} alt={prd.name} width={60} height={60} className='ms-2' />
                                </div>


                                <div className="result-info text-end">
                                    <span className='d-block'>{prd.name}</span>
                                    <del className='text-secondary ' style={{ 'fontSize': '12px' }}>{currency.format(2000)}</del>
                                    <small className='text-danger ms-2'>{currency.format(2000)}</small>
                                </div>

                            </div>
                        </>


                    )}


                    {filterResultCat.length > 0 && filterResultCat.map((prd, index) =>

                        <>
                            {index == 0 && <h6 className='my-1 me-2 text-end my-3 me-1 fw-bold'>التصنيف</h6>}

                            <div
                                key={index}
                                className='d-flex my-1 flex-row me-2'
                                onMouseOver={(e) => e.target.style = 'cursor : pointer'}
                                onClick={() => {
                                    navigate(`details/${prd.id}`);
                                    setFilterValue('');
                                }}
                            >

                                <div className="result-img ">
                                    <img src={prd.imgurl[0]} alt={prd.name} width={60} height={60} className='ms-2' />
                                </div>


                                <div className="result-info text-end">
                                    <div >
                                        <span className='mx-1'>{prd.name}</span>
                                        <span>{prd.arcategory}</span>

                                    </div>
                                    <del className='text-secondary ' style={{ 'fontSize': '12px' }}>{currency.format(2000)}</del>
                                    <small className='text-danger ms-2'>{currency.format(2000)}</small>
                                </div>

                            </div>



                        </>


                    )}











                </div>

            </div>

        </div>
    );
};

export default Autocomplete;

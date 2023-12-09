import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './FilterMenu.css';
import { useEffect } from 'react';
export const FilterMenu = ({ filterResult, setFilterResult, alternative, allProducts, setFilterMenuActive, catName, sub }) => {

    const [activeSize, setActiveSize] = useState('')
    const [activeColor, setActiveColor] = useState('')
    const [activePrice, setActivePrice] = useState('')
    const [activeCategory, setActiveCategory] = useState([])
    const [activeSports, setActiveSports] = useState([])
    const [activeBrands, setActiveBrands] = useState([])

    const [collapseSize, setCollapseSize] = useState(false);

    const [collapseCategory, setCollapseCategory] = useState(false)
    const [collapseSports, setCollapseSports] = useState(false)
    const [collapseColors, setCollapseColors] = useState(false)
    const [collapsePrice, setCollapsePrice] = useState(false)
    const [collapseBrands, setCollapseBrands] = useState(false)

    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
    const [sizeLabels, setSizeLabels] = useState(['XL', 'L', 'M', 'S', 'XS', '2XL', '3XL']);
    const [colorLabels, setColorLabels] = useState([]);


    const standardColors = ([
        'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black',
        'white', 'Gray', 'Cyan', 'Magenta', 'Turquoise', 'Lavender', 'Maroon', 'Beige',
        'Teal', 'Olive', 'Gold', 'Silver'
    ]);


    const [averagePrice, setAveragePrice] = useState(['500', '1000', '2000', '4000']);
    const [checkBoxStyle, setCheckBoxStyle] = useState({
        'accentColor': 'black',
        'width': '24px',
        'height': '24px',
        'marginLeft': '15px',
        'fontFamily': 'sans-serif'
    });
    const [categoryLabels, setCategoryLabels] = useState(['تيشيرت', 'أحذية', 'شورت', 'هودى']);
    const [sportsLabels, setSportsLabels] = useState([
        'اسلوب الحياه', 'الجرى', 'كرة القدم', 'سباحة', 'Gym & Training', 'كرة المضرب',
        'Studio', 'يوغا', 'الهواء الطلق', 'كرة السلة', 'ركوب الدراجة'
    ]);



    const [BrandsLabels, setBrandsLabels] = useState([
        'Supernove', 'Clima', 'Condivo', 'Harden', 'Response', 'Squandra', 'Tiro17', 'adicolor',
        'adizero', 'Stan Smith', 'Sereno', 'Ryv', 'real madrid', 'Ryd', 'icon', 'Essentials',
        'blue verisons'
    ]);






    useEffect(() => {


        var uniqueSizes = [];
        var uniqueColors = [];
        let srchResult = [...allProducts, ...alternative]


        let gender;
        catName == 'men' ? gender = 'الرجال' : catName == 'women' ? gender = 'النساء' : gender = 'الأطفال';
        srchResult = srchResult.filter(prd => prd.gender == gender || prd.gender == "");


        if (sub != 'all') {
            srchResult = srchResult.filter(prd => prd.arcategory.replace(' ', '') == sub || prd.category.replace(' ', '') == sub);
        }

        var maxPrice = srchResult.sort((a, b) => b.price - a.price) || 1
        var minPrice = maxPrice[maxPrice.length - 1]?.price || 1
        maxPrice = maxPrice[0]?.price || 1


        if(minPrice >= 1000){
            minPrice = Math.floor(minPrice / 1000) * 1000
        }else if(minPrice >= 100){
            minPrice = Math.floor(minPrice / 100) * 100
        }

        if(maxPrice >= 1000){
            maxPrice = Math.floor(maxPrice / 1000) * 1000
        }else if(maxPrice >= 100){
            maxPrice = Math.floor(maxPrice / 1000) * 1000
        }

      



        console.log('min price', minPrice)
        console.log('active price', maxPrice)

        var avgPrice = [];
        var res = 0

        var safeCounter = 0
        do {

            try {
                res += minPrice * 2
                avgPrice.push(res / 2);  
            } catch (error) {
                break
            }
  
            safeCounter+=1;
            if(safeCounter == 10){
                break
            }


        } while (res <= maxPrice);


        console.log('avgPrice price', avgPrice)
        setAveragePrice(avgPrice)
        srchResult.forEach(prd => {


            prd.availablesize.forEach(size => {
                uniqueSizes.includes(size) == false ? uniqueSizes.push(size) : null
            });




            standardColors.forEach(stColor => {

                prd.color.includes(stColor) &&
                    uniqueColors.includes(stColor) == false ? uniqueColors.push(stColor) : null
            }

            );








        });

        setColorLabels(uniqueColors)
        setSizeLabels(uniqueSizes)













    }, [])

    const searchByFilter = () => {

        let srchResult = [...allProducts, ...alternative]




        let gender;
        catName == 'men' ? gender = 'الرجال' : catName == 'women' ? gender = 'النساء' : gender = 'الأطفال';
        srchResult = srchResult.filter(prd => prd.gender == gender || prd.gender == "");


        if (sub != 'all') {
            srchResult = srchResult.filter(prd => prd.arcategory.replace(' ', '') == sub || prd.category.replace(' ', '') == sub);
        }












        if (activePrice) {
            srchResult = srchResult.filter(prd => prd.price <= activePrice * 2 && prd.price >= activePrice);
        }

        if (activeCategory.length) {
            srchResult = srchResult.filter(prd => activeCategory.includes(prd.category.replace(' ', '')));
        }

        if (activeColor.length) {
            srchResult = srchResult.filter(prd => prd.color.includes(activeColor));
        }


        if (activeSize.length) {
            srchResult = srchResult.filter(prd => prd.availablesize.includes(activeSize));
        }


        console.log(srchResult)
        setFilterResult(srchResult)
    }




    return (
        <>


            <div className="shadow-container-filter">
                <div className="filter-menu" dir='rtl'>

                    <div className="cart-header d-flex p-3">
                        <span className='h5 fw-bolder'> فلترة حسب </span>
                        <i className="fa-solid fa-xmark fs-4 m-auto ms-0" onClick={() => setFilterMenuActive(false)} />
                    </div>






                    {(activeCategory.length || activeColor || activeSize || activePrice) ?
                        <span className='d-block text-end '>   الفلاتر المختارة :  </span> : null
                    }
                    <div className="selected-options">

                        {activeSize.length > 0 &&
                            <a className='size-option'
                                onClick={() => { setActiveSize(false); setCollapseSize(false) }}>{
                                    activeSize &&
                                    <>
                                        <span>{activeSize}</span> <i className="fa-regular fa-square-minus me-2" />
                                    </>
                                }
                            </a>
                        }



                        {/* category option */}
                        {activeCategory.length > 0 &&
                            activeCategory.map(catname =>
                                <a className='cat-option'
                                    key={catname}
                                    onClick={() => {
                                        setActiveCategory(activeCategory.filter(c => c != catname));
                                        activeCategory.length <= 1 ? setCollapseCategory(false) : null
                                    }}>
                                    <span>{catname}</span>
                                    <i className="fa-regular fa-square-minus me-2" />
                                </a>


                            )
                        }



                        {
                            activeColor &&
                            <a className='color-option'
                                onClick={() => {
                                    setActiveColor('');
                                    setCollapseColors(false);
                                }}>

                                {activeColor ?
                                    <>



                                        <li
                                            className='d-inline-flex'
                                            style={{
                                                'backgroundColor': activeColor,
                                                'width': '20px',
                                                'height': '20px',
                                                'border': activeColor == 'white' ? '1px solid grey' : ''
                                            }}

                                        />

                                        {/* <i className="fa-regular fa-square-minus me-2" /> */}

                                    </>
                                    : null
                                }
                            </a>
                        }

                        {activePrice &&
                            <a className='price-option'
                                onClick={() => { setActivePrice(false); setCollapsePrice(false) }}>{
                                    activePrice &&
                                    <>
                                        <span>{`${currency.format(activePrice)}  -   ${currency.format(+activePrice * 2)} `}</span>

                                    </>
                                }
                            </a>
                        }



                    </div>



                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ المقاس ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-size border-top">

                        <div
                            onClick={() => setCollapseSize(!collapseSize)}
                            aria-controls="collapseSize"
                            aria-expanded={collapseSize}
                            className='d-flex'>
                            <span>القياس</span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapseSize}>
                            <ul className='sizebox' dir='ltr' id="collapseSize">
                                {sizeLabels.map((size) =>
                                    <li
                                        key={size}
                                        className={activeSize == size ? 'active' : ''}
                                        onClick={() => setActiveSize(size)}
                                    >
                                        {size}
                                    </li>
                                )}
                            </ul>
                        </Collapse>
                    </div>
                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ نوع المنتج ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-category border-top">

                        <div
                            onClick={() => setCollapseCategory(!collapseCategory)}
                            aria-controls="collapseCategory"
                            aria-expanded={collapseCategory}
                            className='d-flex'>
                            <span>نوع المنتج</span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapseCategory}>


                            <ul id="collapseCategory" className='list-none p-1 mt-3'>

                                {categoryLabels.map(catName =>

                                    <li className='d-flex my-3' key={catName}>
                                        <input type="checkbox" id={catName}
                                            style={checkBoxStyle}
                                            onChange={() => { }}
                                            checked={activeCategory.includes(catName)}
                                            onClick={() => {
                                                activeCategory.length == 0 ?
                                                    setActiveCategory([catName]) :
                                                    activeCategory.includes(catName) ?
                                                        setActiveCategory([...activeCategory.filter(x => x != catName)]) :
                                                        setActiveCategory([...activeCategory, catName])
                                            }
                                            } />

                                        <label htmlFor={catName} >{catName}</label>
                                    </li>

                                )}





                            </ul>
                        </Collapse>
                    </div>
                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ الوان  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-colors border-top">

                        <div
                            onClick={() => setCollapseColors(!collapseColors)}
                            aria-controls="collapseColors"
                            aria-expanded={collapseColors}
                            className='d-flex'>
                            <span>الوان </span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapseColors}>


                            <ul id="collapseColors" className='list-none p-1 mt-3'>
                                {colorLabels.map(colorName =>
                                    <>

                                        <li
                                            className='d-inline-flex m-3'
                                            style={{
                                                'backgroundColor': colorName,
                                                'width': '25px',
                                                'height': '25px',
                                                'border': colorName == 'white' ? '1px solid grey' : ''
                                            }}
                                            onClick={() => setActiveColor(colorName)}

                                        >

                                            <i className={`fa-solid fa-check m-auto ${colorName == 'white' ? 'text-dark' : 'text-light'} ${activeColor != colorName && 'opacity-0'}`} />
                                        </li>
                                    </>

                                )}






                            </ul>
                        </Collapse>
                    </div>
                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ السعر  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-price border-top">

                        <div
                            onClick={() => setCollapsePrice(!collapsePrice)}
                            aria-controls="collapsePrice"
                            aria-expanded={collapsePrice}
                            className='d-flex'>
                            <span>السعر </span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapsePrice}>


                            <ul id="collapsePrice" className='list-none p-1 mt-3'>
                                {averagePrice.map(price =>

                                    <li className='d-block'>
                                        {activePrice == price && <i className="fa-solid fa-circle-dot fs-5 m-2  " />}
                                        {
                                            activePrice != price &&
                                            <i className='fa-regular fa-circle fs-5 m-2' onClick={() => setActivePrice(price)} />
                                        }

                                        <div className='d-inline' style={{ 'fontSize': '15px' }}>
                                            <span className='mx-2'>{currency.format(price * 2)}</span>
                                            <span className='mx-2'>{currency.format(price)}</span>

                                        </div>




                                    </li>


                                )}






                            </ul>
                        </Collapse>
                    </div>
                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬الرياضيات▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-category border-top">

                        <div
                            onClick={() => setCollapseSports(!collapseSports)}
                            aria-controls="collapseSports"
                            aria-expanded={collapseSports}
                            className='d-flex'>
                            <span>الرياضيات</span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapseSports}>


                            <ul id="collapseSports" className='list-none p-1 mt-3'>

                                {sportsLabels.map(sportName =>

                                    <li className='d-flex my-3' key={sportName}>
                                        <input type="checkbox" id={sportName}
                                            style={checkBoxStyle}
                                            onChange={() => { }}
                                            checked={activeSports.includes(sportName)}
                                            onClick={() => {
                                                activeSports.length == 0 ?
                                                    setCollapseSports([sportName]) :
                                                    activeSports.includes(sportName) ?
                                                        setCollapseSports([...activeSports.filter(x => x != catName)]) :
                                                        setCollapseSports([...activeSports, sportName])
                                            }
                                            } />

                                        <label htmlFor={sportName} >{sportName}</label>
                                    </li>

                                )}





                            </ul>
                        </Collapse>
                    </div>
                    {/*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ العلامات التجارية▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▬*/}
                    <div className="collapse-category border-top">

                        <div
                            onClick={() => setCollapseBrands(!collapseBrands)}
                            aria-controls="collapseBrands"
                            aria-expanded={collapseBrands}
                            className='d-flex'>
                            <span>العلامات التجارية</span>
                            <i className="fa-solid fa-angle-down me-auto" />
                        </div>

                        <Collapse in={collapseBrands}>


                            <ul id="collapseBrands" className='list-none p-1 mt-3'>

                                {BrandsLabels.map(brandName =>

                                    <li className='d-flex my-3' key={brandName}>
                                        <input type="checkbox" id={brandName}
                                            style={checkBoxStyle}
                                            onChange={() => { }}
                                            checked={activeBrands.includes(brandName)}
                                            onClick={() => {
                                                activeBrands.length == 0 ?
                                                    setCollapseSports([brandName]) :
                                                    activeBrands.includes(brandName) ?
                                                        setCollapseSports([...activeBrands.filter(x => x != brandName)]) :
                                                        setCollapseSports([...activeBrands, brandName])
                                            }
                                            } />

                                        <label htmlFor={brandName} >{brandName}</label>
                                    </li>

                                )}





                            </ul>
                        </Collapse>
                    </div>



                    <button className='filter-btn btn-adidas-dark w-100 mt-5' onClick={() => searchByFilter()}>
                        <span>  تقدم بالطلب </span>
                        <i className="arrow-front" />
                        <i className="arrow-back" />
                    </button>



                </div>
            </div>





        </>
    )
}

import "./Footer.css";
import "./AdidasBtn.css";

import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
    
     <div className="parent" >
     <div className="semi-parent">
      <footer className="container-fluid" id="footer-container">
        <div className="become-a-member-section">
          <span className="member-section-message">
            %كن عضوا واحصل على خصم 20
          </span>
          <div onClick={() => navigate('/login')}>
          <div className="btn-footer11">
          <div className="btn-container">
            <button className="btn-adidas-dark">
            <span>  اشترك الآن</span>
              <i className="arrow-front"></i>
              <i className="arrow-back"></i>
         
            </button>
          </div>
          </div>
          </div>
        </div>
      </footer>
     
      <div className="container-fluid" id="dropdown-container">
        <div className="row footer-container" id="footer_Adidas">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="column">
              <div className="dropdown">
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle
                    className="container-fluid text-end"
                    id="dropdown-button-products"
                    variant=""
                  >
                    المنتجات
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="container-fluid dropdown-menu-end"
                    id="Dropdown-Menu-products"
                  >
                    <Dropdown.Item href="#/action-1" className="white-link">
                      احذية
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="white-link">
                      ملابس
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      اكسسوارات
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4" className="white-link">
                      يوغا
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5" className="white-link">
                      الهواء الطلق
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-6" className="white-link">
                      كرة المضرب
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-7" className="white-link">
                      التدريب
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="divider" />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <div className="column">
              <div className="dropdown">
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle
                    className="container-fluid text-end"
                    id="dropdown-button-sports"
                    variant=""
                  >
                    الرياضات
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="container-fluid dropdown-menu-end"
                    id="Dropdown-Menu-sports"
                  >
                    <Dropdown.Item href="#/action-1" className="white-link">
                      الجري{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="white-link">
                      كرة السلة
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      كرة القدم
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4" className="white-link">
                      {" "}
                      يوغا
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="white-link">
                      الهواء الطلق
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      {" "}
                      كرة المضرب
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4" className="white-link">
                      {" "}
                      التدريب
                    </Dropdown.Item>{" "}
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="divider" />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <div className="column">
              <div className="dropdown">
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle
                    className="container-fluid text-end"
                    id="dropdown-button-category"
                    variant=""
                  >
                    الفئة
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="container-fluid dropdown-menu-end"
                    id="Dropdown-Menu-category"
                  >
                    <Dropdown.Item href="#/action-1" className="white-link">
                      الرجال{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="white-link">
                      {" "}
                      النساء
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      {" "}
                      الاطفال
                    </Dropdown.Item>{" "}
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="divider" />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <div className="column">
              <div className="dropdown">
                <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle
                    className="container-fluid text-end"
                    id="dropdown-button-company"
                    variant=""
                  >
                    معلومات الشركة
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="container-fluid dropdown-menu-end"
                    id="Dropdown-Menu-company"
                  >
                    <Dropdown.Item href="#/action-1" className="white-link">
                      عنا{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="white-link">
                      {" "}
                      وظائف
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      {" "}
                      صحافة
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="white-link">
                      {" "}
                      adiClub
                    </Dropdown.Item>{" "}
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="divider" />
              </div>
              <div className="col-12">
                <div className="datasetting">
                  <Nav.Link href="#" className="white-link">
                    اعدادات البيانات{" "}
                  </Nav.Link>

                  <Nav.Link href="#" className="white-link">
                    egypt
                  </Nav.Link>
                  <Nav.Link href="#" className="white-link">
                    اعدادات ملفات الكوكيز
                  </Nav.Link>
                  <Nav.Link href="#" className="white-link">
                    سياسةالخصوصية{" "}
                  </Nav.Link>

                  <Nav.Link href="#" className="white-link">
                    الشروط والاحكام
                  </Nav.Link>
                  <Nav.Link href="#" className="white-link">
                    اطبع
                  </Nav.Link>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* PC Footer */}
        <div className="row" id="footer2">
          <div className="col-12" id="footer--container">
            <hr className="col-12 footer-divider" />
          </div>
          <div className="col-2">
            <div>
              <h3 className="footer-title">المنتجات</h3>
              <Nav.Link href="#" className="white-link">
                احذية{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                ملابس
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                اكسسوارات
              </Nav.Link>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3 className="footer-title">الرياضات</h3>
              <Nav.Link href="#" className="white-link">
                الجري{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                كرة السلة
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                كرة القدم
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                يوغا{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                الهواء الطلق
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                كرة المضرب
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                تدريب{" "}
              </Nav.Link>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3 className="footer-title">الفئة</h3>
              <Nav.Link href="#" className="white-link">
                الرجال{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                النساء
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                {" "}
                الاطفال
              </Nav.Link>
            </div>
          </div>
          <div className="col-2 ">
            <div>
              <h3 className="footer-title">معلومات الشركة</h3>
              <Nav.Link href="#" className="white-link">
                عنا{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                وظائف
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                {" "}
                صحافة
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                {" "}
                adiClub
              </Nav.Link>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h3 className="footer-title">دعم</h3>
              <Nav.Link href="#" className="white-link">
                تعليمات{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                شحن
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                ارجاع
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                تعقب الطلبات{" "}
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                {" "}
                نادي adiClub والنشرة الاخبارية
              </Nav.Link>
              <Nav.Link href="#" className="white-link">
                مخططات الحجم
              </Nav.Link>
              <Nav.Link href="#">اتصل بنا </Nav.Link>
              <Nav.Link href="#" className="white-link">
                ابحث عن
              </Nav.Link>
            </div>
          </div>
          <div className="col-2" id="footer-Icon">
            <div className="column">
              <h3 className="footer-title">تابعنا</h3>
              <p>
                <Nav.Link href="#" className="white-link">
                  <AiFillFacebook />
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#" className="white-link">
                  <AiFillTwitterCircle />
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#" className="white-link">
                  <AiFillYoutube />
                </Nav.Link>
              </p>
            </div>
          </div>
          <div className="Row" id="footer-detals">
            <Nav.Link className="white-link" href="">
              اعدادات البيانات
            </Nav.Link>
            <hr className="vertical-line" />

            <Nav.Link className="white-link" href="">
              اطبع
            </Nav.Link>
            <hr className="vertical-line" />
            <Nav.Link className="white-link" href="">
              الشروط والاحكام
            </Nav.Link>
            <hr className="vertical-line" />

            <Nav.Link className="white-link" href="">
              سياسة الخصوصية
            </Nav.Link>
            <hr className="vertical-line" />
            <Nav.Link className="white-link" href="">
              اعدادات ملفات الكوكيز
            </Nav.Link>
            <hr className="vertical-line" />

            <Nav.Link className="white-link" href="">
              Egypt
            </Nav.Link>
          </div>{" "}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Footer;

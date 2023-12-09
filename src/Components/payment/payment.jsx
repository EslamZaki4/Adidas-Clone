import "./payment.css";

const Payment = () => {
  return (
    <>
      <div className="container-fluid payment-container">
        <div className="part1  container-fluid">
          <div className="payment-title">
            <h2>عنوان ارسال الفاتورة</h2>
          </div>
          <hr className="payment-divider" />
          <div className="col-12 payment-box">
            <label htmlFor="personal_name" className="">
              الاسم الشخصي<span className="icons">*</span>
            </label>
            <input
              type="text"
              className="col-7"
              id="personal_name"
              name="personal_name"
            />
          </div>
          <div className="col-12 payment-box">
            <label htmlFor="family_name" className="">
              الاسم العائلي<span className="icons">*</span>
            </label>
            <input
              type="text"
              className="col-7"
              id="family_name"
              name="family_name"
            />
          </div>
          <div className="col-12 payment-box">
            <label htmlFor="email" className="">
              بريد الكتروني<span className="icons">*</span>
            </label>
            <input type="email" className="col-7" id="email" name="email" />
          </div>

          <div className="col-12 payment-box">
            <label htmlFor="address" className="">
              العنوان<span className="icons">*</span>
            </label>
            <input type="text" className="col-7" id="address" name="address" />
          </div>
          <div className="col-12 payment-box">
            <label htmlFor="postal_code" className="">
              الرمز/الرقم البريدي<span className="icons">*</span>
            </label>
            <input
              type="text"
              className="col-7"
              id="postal_code"
              name="postal_code"
              disabled
              defaultValue="                          غير قابل للتطبيق"
            />
          </div>

          <div className="col-md-12 mb-3 payment-box">
            <label htmlFor="phone" className="d-block mb-1">
              الهاتف <span className="icons">*</span>
            </label>
            <select name="country_code" id="country_code" className="col-1">
              <option value="+20">+20</option>
            </select>
            <input type="text" className="col-6" name="phone" />
          </div>
          <div className="col-12 payment-box">
            <label htmlFor="country">
              الدولة <span className="icons">*</span>
            </label>
            <select
              name="country"
              id="country"
              className="col-7 box-input"
              defaultValue=""
            >
              <option value="Eg">مصر</option>
              <option value="Eg">مصر</option>
              <option value="AF">أفغانستان</option>
              <option value="AL">ألبانيا</option>
              <option value="DZ">الجزائر</option>
              <option value="AS">ساموا الأمريكية</option>
              <option value="AD">أندورا</option>
              <option value="AO">أنغولا</option>
              <option value="AI">أنغويلا</option>
              <option value="AQ">أنتاركتيكا</option>
              <option value="AR">الأرجنتين</option>
              <option value="AM">أرمينيا</option>
              <option value="ZW">زيمبابوي</option>
            </select>
          </div>
          <div className="col-12 payment-box">
            <label htmlFor="city">
              المدينة <span className="icons">*</span>
            </label>
            <select
              name="city"
              id="city"
              className="col-7 box-input"
              defaultValue="cairo"
            >
              <option value="">تحديد مدينة</option>
              <option value="cairo">القاهرة</option>
              <option value="alexandria">الإسكندرية</option>
              <option value="giza">الجيزة</option>
              <option value="luxor">الأقصر</option>
              <option value="aswan">أسوان</option>
              <option value="qena">قنا</option>
              <option value="new-valley">الوادي الجديد</option>
              <option value="beheira">البحيرة</option>
              <option value="cairo">القاهرة </option>
              <option value="kafr-el-sheikh">كفر الشيخ</option>
              <option value="matrouh">مطروح</option>
              <option value="menofia">المنوفية</option>
              <option value="qalyubia">القليوبية</option>
              <option value="daqahlia">الدقهلية</option>
            </select>
          </div>
        </div>
        <div className="container-fluid part2">
          <div className="payment-title">
            <h2>الشحن</h2>
          </div>
          <hr className="payment-divider" />
          <div className="payment-aside d-block">
            <input
              type="radio"
              className="payment-radio"
              name="shipping_address"
            />
            <label htmlFor="" className="m-2">
              العنوان الافتراضي{" "}
            </label>
            <div>
              <input
                type="radio"
                className="payment-radio mt-3"
                name="shipping_address"
              />
              <label htmlFor="" className="m-2">
                {" "}
                اضف عنوان جديد للتسليم{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="Shipping-Method">
        <div>
          <h2>طريقة الشحن</h2>
        </div>
        <hr className="payment-divider" />
        <div className="Shipping-Method2">
          <div className="col-5">
            <input
              type="radio"
              className="payment-radio"
              name="shipping_method"
            />
            <label htmlFor="" className="m-2">
              مجانا
            </label>
            <span className="m-5">الدفع نقدا عند التسليم مدعوم</span>
          </div>
          <div>
            <h6>الشحن العادي</h6>
            <p className="col-5 Standard-Shipping">
              من 1-2 أيام عمل داخل المدن الرئيسية (داخل محافظات القاهرة الكبرى
              والإسكندرية والدلتا والصعيد والبحر الأحمر) و 6 أيام عمل للمناطق
              الأخرى
            </p>
          </div>
        </div>
      </div>
      <div className="Shipping-Method">
        <div className="col-6">
          <h2>التسديد</h2>
        </div>
        <hr className="payment-divider" />
        <h6> طرق التسديد المتاحة </h6>
        <div className="container-Imge col-6">
          <div className=" Imge-1"></div>
        </div>
        <p className="col-6">
          بالنقر على تقديم الطلب والدفع، فأنت توافق على شراء هذه السلعة (السلع)
          من Crossborder Solutions Ltd كتاجر سجل لهذه المعاملة، وذلك حسب بنود
          البيع و <a href="#">سياسية الخصوصية</a> الخاصة بشركة Crossborder
          Solutions Ltd. شركة Crossborder Solutions Ltd هي مزوِّد خدمة دولي
          لتقديم خدمات الوفاء إلى adidas Sporting Goods Ltd..
        </p>
        <div className="btn-container" id="payment-btn">
          <button className="btn-adidas-dark">
            <i className="arrow-front"></i>
            <i className="arrow-back"></i>
            تقديم الطلب
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;

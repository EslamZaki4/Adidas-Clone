import React from 'react';
import './Loading.css'; // Import the CSS file for styling the spinner
import OnlineLoading from '../OnlineLoading/OnlineLoading';
import { useSelector } from 'react-redux';


const Loading = () => {
  const loader = useSelector((state) => state.setting.loader)


  return (


    <>
      {loader.html ?
        <OnlineLoading /> :

        <div className="loader-container" >
          <span className="loader"></span>
        </div>


      }



    </>
  );
};

export default Loading;

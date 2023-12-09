//____________ONLINELOADING________________
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//__________________________
const OnlineLoading = () => {

    const loader  = useSelector((state) => state.setting.loader)
    const onlineloader = useRef(null);
    
    useEffect(()=>{
        
        onlineloader.current.innerHTML = loader.html
        onlineloader.current.innerHTML += '<style>'+loader.css+'</style>'
        onlineloader.current.innerHTML += '<script>' + loader.js + '</script>'
  
  },[loader])




  return (
    <div ref={onlineloader} className='d-flex bg-dark justify-content-center align-items-center position-absolute' style={{'height':'100vh','width':'100%','zIndex' : '999'}} ></div>
  )
}

export default OnlineLoading
import React, { useEffect, useState } from 'react'
import OnlineLoading from '../../Components/OnlineLoading/OnlineLoading'
import { LogoutPage } from '../LogoutPage/logoutPage';

export default function Profile() {

  const [mockLoading, setMockLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setMockLoading(false)
    }, 5000);
  }, [])




  return (
    <>
      {mockLoading ?
        <div className='position-relative' style={{"width":'100%' , 'height' : '100vh'}}>
          <OnlineLoading />
        </div> :
        <LogoutPage />


      }
    </>
  )
}

import React from 'react';
import './WishListAlert.css';

const WishlistAlert = ({message ,onClose}) => {
    setTimeout(onClose, 1000);
    
      return (
        <div className="alert-container">
          <div className="alert">
            {message}
          </div>
        </div>
      );
}

export default WishlistAlert;

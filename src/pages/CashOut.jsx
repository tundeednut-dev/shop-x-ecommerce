import React, {createContext, useContext, useState} from 'react' 

    const CheckoutContext = createContext();

    export const CheckOutProvider = ({children}) => {

        const [address, setAddress] = useState({
            firstName : '',
            lastName : '',
            address : '',
            phoneNumber : ''
        })

    const [deliveryOption, setDeliveryOption] = useState('Door Delivery')
    const [isSaved, setIsSaved] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('Pay on delivery via bank transfer (or cash)');
    const [paymentOption, setPaymentOption] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <CheckoutContext.Provider
      value={{
        address, setAddress,
        isSaved, setIsSaved,
        deliveryDetails, setDeliveryDetails,
        deliveryOption, setDeliveryOption,
        paymentMethod, setPaymentMethod,
        paymentOption, setPaymentOption,
        isConfirmed, setIsConfirmed
        
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
    
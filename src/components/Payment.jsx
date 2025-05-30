import { useCheckout } from "../pages/CashOut";
import { useState, useEffect } from "react";
import card from '../assets/card.png'
import PayWithCard from "../pages/PayWithCard";

function PaymentMethod() {
  const {
    paymentMethod,
    setPaymentMethod,
    deliveryDetails,
    paymentOption,
    setPaymentOption,
    isConfirmed
  } = useCheckout();


  if (!deliveryDetails) return null;
  const [showNotification, setShowNotification] = useState(false)
  useEffect(() => {
  if (
    paymentMethod === "Pay on delivery via bank transfer (or cash)" &&
    isConfirmed
  ) {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }
}, [paymentMethod, isConfirmed]);


  return (
    <div className="w-full px-4 mt-7">
       {paymentMethod === "Pay on delivery via bank transfer (or cash)" && isConfirmed && showNotification && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="animate-fade-in-up bg-black text-green-400 px-6 py-4 rounded-lg shadow-2xl">
          <p className="text-center font-bold text-xl">Thank you for your patronage!</p>
        </div>
      </div>
    )}
      {!paymentOption ? (
        <div className="max-w-2xl mx-auto shadow-2xl bg-white rounded-md">
          <span className="py-2 px-4 block font-semibold text-lg">3. PAYMENT METHOD</span>
          <hr />
          <form className="p-4 space-y-4">
            {[
              {label: "Pay on delivery via bank transfer (or cash)",
                value: "Pay on delivery via bank transfer (or cash)",
                icon: null
              },
              
              {label: "Pay with card",
                value: "Pay with card",
                icon: card
              }
            ].map((option) => (
              <label key={option.value} className="block font-semibold">
                <input
                  type="radio"
                  value={option.value}
                  checked={paymentMethod === option.value}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                {option.label}
                {option.icon && 
                <img className="w-7 mx-10 mb-3 inline-flex" src={option.icon}/>}
              </label>
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-green-500 text-white px-5 py-2 font-semibold rounded shadow-xl hover:bg-green-600 transition"
                onClick={() => setPaymentOption(true)}
              >
                Set Payment Method
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-4 shadow-2xl bg-white rounded-md">
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-lg">3. Payment Method</h1>
              <button
                className="font-semibold text-green-600 hover:underline"
                onClick={() => setPaymentOption(false)}
              >
                Edit {'>>'}
              </button>
            </div>
            <hr className="my-2" />
            <p className="font-semibold">You chose <b>{paymentMethod}</b></p>
            {paymentMethod ==="Pay on delivery via bank transfer (or cash)" && <p className="text-gray-700 mb-4">Your items will be delivered to your address. Please be ready with the cash payment.</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;

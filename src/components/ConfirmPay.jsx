import { useCart } from "../CartContext";
import { useCheckout } from "../pages/CashOut";
import PayWithCard from "../pages/PayWithCard";

function ConfirmPay() {
  const { paymentOption, isConfirmed, setIsConfirmed, paymentMethod} = useCheckout();
  const { sumPrices, getTotalItems } = useCart();
  const total = sumPrices();
  const totalQuantity = getTotalItems();

  if (!paymentOption) return null;
  return (
    <div className="h-fit overflow-y-auto">
      {paymentMethod === "Pay with card" && <PayWithCard onSuccess={() => {
    alert("Card payment processed successfully!");
  }}/>}
    <div className={`bg-gray-100 h-fit w-full py-16 px-4 overflow-y-auto ${paymentMethod === "Pay with card" === true ? 'hidden' : 'block'}`}>
      <div className="max-w-xl mx-auto bg-white rounded shadow-2xl">
        <h1 className="text-xl font-semibold px-6 pt-6">Order Summary</h1>
        <hr className="my-2" />

        <div className="px-6 py-4 space-y-3">
          <div className="flex justify-between">
            <span>Total Price</span>
            <span className="font-semibold">₦{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Quantity</span>
            <span className="font-semibold">{totalQuantity}</span>
          </div>
        </div>

        <hr className="my-2" />

        <div className="px-6 py-4 text-center">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition duration-300"
            onClick={() => setIsConfirmed(true)}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ConfirmPay;

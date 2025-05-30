import { useCheckout } from "../pages/CashOut";
import { useCart } from "../CartContext";
import { format, addDays } from "date-fns";

function DeliveryDetails() {
  const {
    deliveryOption,
    setDeliveryOption,
    deliveryDetails,
    setDeliveryDetails,
    isSaved,
  } = useCheckout();

  const { cartItems, getTotalItems} = useCart();

  if (!isSaved) return null;

  const todayDate = new Date();
  const today = format(todayDate, "PP");
  const estimatedDate = format(
    addDays(todayDate, deliveryOption === "Door Delivery" ? 3 : 5),
    "PP"
  );

  const handleSelect = (option) => {
    setDeliveryOption(option);
  };

  return (
    <div className="w-full px-4 mt-7">
      {!deliveryDetails ? (
        <div className="max-w-2xl mx-auto shadow-2xl bg-white rounded-md">
          <span className="py-3 px-4 block font-semibold text-lg">
            2. DELIVERY DETAILS
          </span>
          <hr />
          <div className="p-4 space-y-4">
            <label className="block font-semibold">
              <input
                type="radio"
                name="deliveryOption"
                value="Door Delivery"
                checked={deliveryOption === "Door Delivery"}
                onChange={() => handleSelect("Door Delivery")}
                className="mr-2"
              />
              Door Delivery (within 3 days)
            </label>
            <label className="block font-semibold">
              <input
                type="radio"
                name="deliveryOption"
                value="Pick Up Station"
                checked={deliveryOption === "Pick Up Station"}
                onChange={() => handleSelect("Pick Up Station")}
                className="mr-2"
              />
              Pick Up Station (within 5 days)
            </label>

            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10 " />
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-green-500 text-white px-5 py-2 font-semibold rounded shadow-xl hover:bg-green-600 transition"
                onClick={() => setDeliveryDetails(true)}
              >
                Set Delivery Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-4 shadow-2xl bg-white rounded-md">
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-lg">2. Delivery Details</h1>
              <button
                className="font-semibold text-green-600 hover:underline"
                onClick={() => setDeliveryDetails(false)}
              >
                Edit {'>>'}
              </button>
            </div>
            <hr className="my-2" />
            <p className="font-semibold">{`${deliveryOption} (${today} - ${estimatedDate})`}</p>
            <div className="grid grid-cols-2 gap-4">
         {cartItems.map((item) => (
                <div key={item.id} className="flex-1 items-center gap-3 mt-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10"/>
                  <p className="text-sm font-medium">{item.title} * {item.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeliveryDetails;

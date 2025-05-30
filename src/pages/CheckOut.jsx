import Address from "../components/Address";
import DeliveryDetails from "../components/Delivery";
import PaymentMethod from "../components/Payment";
import ConfirmPay from "../components/ConfirmPay";
import Navbar from "../components/Navbar";

function CheckOut() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-4 px-4 py-6">
        <div className="w-full lg:w-3/4 space-y-4">
          <Address />
          <DeliveryDetails />
          <PaymentMethod />
        </div>
        <div className="w-full lg:w-1/4">
          <ConfirmPay />
        </div>
      </div>
    </>
  );
}

export default CheckOut;

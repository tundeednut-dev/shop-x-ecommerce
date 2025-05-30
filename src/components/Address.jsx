import { useCheckout } from "../pages/CashOut";
import { useEffect } from "react";

function Address() {
  const { address, setAddress, isSaved, setIsSaved } = useCheckout();

  useEffect(() => {
    const contactInfo = localStorage.getItem("savedAddress");
    if (contactInfo) {
      setAddress(JSON.parse(contactInfo));
    }
  }, []);

  return (
    <>
      {!isSaved ? (
        <div className="w-full px-4 mt-24">
          <div className="max-w-2xl mx-auto shadow-2xl bg-white rounded-md">
            <div className="py-3 px-4 font-semibold text-lg">1. ADDRESS</div>
            <hr />
            <form className="p-4 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={address.firstName}
                  className="border border-black h-12 px-3 rounded w-full"
                  onChange={(e) =>
                    setAddress({ ...address, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={address.lastName}
                  className="border border-black h-12 px-3 rounded w-full"
                  onChange={(e) =>
                    setAddress({ ...address, lastName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={address.phoneNumber}
                  className="border border-black h-12 px-3 rounded w-full"
                  onChange={(e) =>
                    setAddress({ ...address, phoneNumber: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Additional Phone Number"
                  className="border border-black h-12 px-3 rounded w-full"
                />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Delivery Address"
                  value={address.address}
                  className="border border-black h-12 px-3 rounded w-full"
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Additional Information"
                  className="border border-black h-12 px-3 rounded w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Region"
                  className="border border-black h-12 px-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-black h-12 px-3 rounded w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    localStorage.setItem(
                      "savedAddress",
                      JSON.stringify(address)
                    );
                    setIsSaved(true);
                  }}
                  className="bg-green-500 text-white px-5 py-2 font-semibold rounded shadow hover:bg-green-600 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-2xl mx-auto mt-6 p-4 shadow-2xl bg-white rounded">
            <span className="font-semibold text-gray-400">2. Delivery Details</span>
          </div>
        </div>
      ) : (
        <div className="w-full px-4 mt-24">
          <div className="max-w-2xl mx-auto shadow-2xl bg-white rounded-md">
            <div className="flex justify-between items-center p-4">
              <h1 className="font-semibold text-lg">1. ADDRESS</h1>
              <button
                className="font-semibold text-green-600 hover:underline"
                onClick={() => setIsSaved(false)}
              >
                Edit {'>>'}
              </button>
            </div>
            <hr />
            <div className="p-4 space-y-2">
              <p>{address.firstName + " " + address.lastName}</p>
              <p>{address.address}</p>
              <p>{address.phoneNumber}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Address;

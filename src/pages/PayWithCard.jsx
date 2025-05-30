function PayWithCard({ onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert("Payment successful!");
      onSuccess();
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Pay with Card</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-green-300"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="password"
                placeholder="123"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-green-300"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default PayWithCard;

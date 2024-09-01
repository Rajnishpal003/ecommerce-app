import React from 'react';

const SaleSection = () => {
  return (
    <div
      className="flex justify-between items-center p-8 bg-gray-100 bg-cover bg-center "
      style={{ backgroundImage: "url('/t.webp')" }}
    >
      <div className="flex-1 flex justify-center h-1000">
        {/* Empty div for spacing */}
      </div>
      <div className="flex-1 text-center px-8 bg-white bg-opacity-75 p-4 rounded-lg  h-1000">
        <h2 className="text-4xl font-bold">THE DRUG STORE</h2>
        <h2 className="text-4xl font-bold">ULTIMATE</h2>
        <h1 className="text-6xl font-extrabold">SALE</h1>
        <p className="text-lg text-gray-600 mb-6">NEW COLLECTION</p>
        <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        {/* Empty div for spacing */}
      </div>
    </div>
  );
};

export default SaleSection;
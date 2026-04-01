import React, { use, useState } from 'react';
import Product from './Product/Product';
import Cart from './Cart/Cart';

const ProductSection = ({ productPromise, selectedType, setSelectedType, carts, setCarts }) => {
    // console.log(productPromise);
    const products = use(productPromise);
    console.log(products);


    
    return (
        <div className='container mx-auto px-4 py-8 '>
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-slate-900">Premium Digital Tools</h2>
                <p className="text-slate-500">Choose from our curated collection of premium digital products designed to <br /> boost your productivity and creativity.</p>
                {/* <div className="flex items-center justify-center rounded-full bg-slate-200 w-max mx-auto p-1 shodow-inner">
                    <button 
                    onClick={() => setSelectedType("product")}
                     className={`btn ${selectedType === "product" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-slate-200 text-slate-800"}  px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95`}>Product
                    </button>
                    <button 
                    onClick={() => setSelectedType("cart")}
                    className={`btn ${selectedType === "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-slate-200 text-slate-800"}  px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95`}>Cart(0)</button>
                </div> */}
               <div className="relative flex items-center bg-slate-200 p-1 rounded-full w-max mx-auto shadow-inner">
      
      {/* Sliding Background Box */}
      <div 
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md transition-all duration-500 ease-in-out ${
          selectedType === "cart" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Product Button */}
      <button 
        onClick={() => setSelectedType("product")}
        className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors duration-500 ${
          selectedType === "product" ? "text-white" : "text-slate-600 hover:text-slate-800"
        }`}
      >
        Products
      </button>

      {/* Cart Button */}
      <button 
        onClick={() => setSelectedType("cart")}
        className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors duration-500 ${
          selectedType === "cart" ? "text-white" : "text-slate-600 hover:text-slate-800"
        }`}
      >
        Cart ({carts.length})
      </button>
    </div>
            </div>
            {
                selectedType === "product" ? 
                (<Product products={products} carts={carts} setCarts={setCarts} ></Product>
    
                ) : (
                <Cart carts={carts} setCarts={setCarts} ></Cart>)
            }
        </div>
    );
};

export default ProductSection;
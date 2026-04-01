import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Card = ({ product, carts, setCarts }) => {
    console.log(product);
    const [isBuyed, setIsBuyed] = useState(false);

    const handleAddToCart = () => {
        setIsBuyed(true);
        const isFound = carts.find(cart => cart.id === product.id);
        if (isFound) {
            toast.error("Product is already in the cart!");
            return;
        }
        setCarts([...carts, product]);
        toast.success("Product added to cart!");
    }
    

    return (
        <div className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-default">
      
      {/* Badge - Right Side (Daan dike) */}
      {product.badge && (
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm
          ${product.badge === "Best Seller" ? "bg-orange-100 text-orange-600" : 
            product.badge === "Popular" ? "bg-purple-100 text-purple-600" : 
            "bg-green-100 text-green-600"}`}>
          {product.badge}
        </span>
      )}

      {/* Image Area */}
      <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#4F39F6] group-hover:text-white transition-colors duration-300">
            <img src={product.image} alt={product.name} />
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-[#4F39F6] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <span className="text-3xl font-bold text-slate-800">${product.price}</span>
        <span className="text-slate-400 text-sm font-medium">/{product.period}</span>
      </div>

      <div className='mb-8'>
        {
            product.features.map ((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm  group-hover:text-[#4F39F6] transition-colors duration-300">
                    <FiCheck className="text-green-500" />
                    <span>{feature}</span>
                </div>
            ))
        }
      </div>

      {/* Button */}
      <button

        onClick={handleAddToCart}
       className={`w-full py-3.5 rounded-full ${isBuyed ? 'bg-green-900' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'} text-white font-bold transition-all active:scale-95 shadow-lg shadow-purple-100`}>
        {isBuyed ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
    );
};

export default Card;
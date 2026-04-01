import React from 'react';
import { MdDelete } from 'react-icons/md';

const Cart = ({ carts, setCarts }) => {
    console.log(carts);
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleAllCheckout = () => {
        setCarts([]);
    }
    
    const handleRemove = (item)  => {
        const updatedCarts = carts.filter(cart => cart.id !== item.id);
        setCarts(updatedCarts);
    }
    return (
        <div className=" p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Cart</h2>
            {carts.length === 0 ? (
                <p className="text-center text-slate-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {carts.map((product, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200">
                             <img 
                             src={product.image} 
                              alt={product.name} 
                              className="w-10 h-10 object-contain" 
                              />
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                                <div>
                                <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                                <p className="text-slate-500">${product.price}</p>
                            </div>
                            <button
                            onClick={handleRemove}
                            className="btn btn-sm rounded-full">
                                <MdDelete className="text-xl text-red-500" />
                            </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-500">Total:</p>
                        <h2 className='font-bold'>$ {totalPrice}</h2>
                    </div>
                    <button
                     onClick={handleAllCheckout}
                     className="btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed To Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
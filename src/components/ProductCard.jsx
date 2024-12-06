import React from 'react';

export const ProductCard = ({ product, onAddToCart }) => {
    // Usamos directamente la propiedad "image" del objeto product
    const imageUrl = product.image || '/path/to/default-image.jpg'; // Imagen por defecto si no tiene imagen

    if (!product) {
        return <div>Producto no disponible</div>; // Mostrar un mensaje si no hay producto
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={imageUrl} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    onClick={() => onAddToCart(product)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

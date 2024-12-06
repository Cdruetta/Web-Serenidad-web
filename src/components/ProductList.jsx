import React from 'react';
import { ProductCard } from './ProductCard';
import { useCart } from '../contexts/CartContexts';

import productos1 from '../images/cajitas/4.jpg';
import productos2 from '../images/cajitas/8.jpg';
import productos3 from '../images/cajitas/7.jpg';
import productos4 from '../images/cajitas/6.jpg';
import productos5 from '../images/cajitas/5.jpg';
import productos6 from '../images/cajitas/4.jpg';

export const ProductList = () => {
    const { addToCart } = useCart();

    // Ejemplo de productos
    const products = [
        {
            id: 1,
            name: 'Cajita Magica',
            description: '8 unidades de Magicos, 8 unidades de Real Champa, Vea aromatica y llavero atrapa sol',
            price: 59.99,
            image: productos1, // Ruta de imagen de ejemplo
            
          },
        {
            id: 2,
            name: 'Cajita Energia', // Puedes cambiar el nombre aquí sin afectar la imagen
            description: '8 unidades de Energia Lipia, 4 esferas sahumadoras, y 1 rocio aurico',
            price: 49.99,
            image: productos2, // Ruta de imagen de ejemplo
            
          },
          {
            id: 3,
            name: 'Cajita Energia', // Puedes cambiar el nombre aquí sin afectar la imagen
            description: '8 unidades de Energia Lipia, 4 esferas sahumadoras, y 1 rocio aurico',
            price: 49.99,
            image: productos3, // Ruta de imagen de ejemplo
            
          },
          {
            id: 4,
            name: 'Cajita Energia', // Puedes cambiar el nombre aquí sin afectar la imagen
            description: '8 unidades de Energia Lipia, 4 esferas sahumadoras, y 1 rocio aurico',
            price: 49.99,
            image: productos4, // Ruta de imagen de ejemplo
            
          },
          {
            id: 5,
            name: 'Cajita Energia', // Puedes cambiar el nombre aquí sin afectar la imagen
            description: '8 unidades de Energia Lipia, 4 esferas sahumadoras, y 1 rocio aurico',
            price: 49.99,
            image: productos5, // Ruta de imagen de ejemplo
            
          },
          {
            id: 6,
            name: 'Cajita Energia', // Puedes cambiar el nombre aquí sin afectar la imagen
            description: '8 unidades de Energia Lipia, 4 esferas sahumadoras, y 1 rocio aurico',
            price: 49.99,
            image: productos6, // Ruta de imagen de ejemplo
            
          },
        // Agrega más productos aquí
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                />
            ))}
        </div>
    );
};

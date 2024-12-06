import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <h1 className="text-center">Productos</h1>
      
      <nav>
      <ul className="flex space-x-4 justify-center">
    <li>
      <Link to="Destacados">Productos destacados</Link>
    </li>
    <li>
      <Link to="/products/tibetanos">Tibetanos</Link>
    </li>
    <li>
      <Link to="bikinis">Palo Santo</Link>
    </li>
    <li>
      <Link to="deportiva">Buena Onda</Link>
    </li>
    <li>
      <Link to="deportiva">Organicos</Link>
    </li>
    <li>
      <Link to="deportiva">En Rama</Link>
    </li>
    <li>
      <Link to="deportiva">Magistrales</Link>
    </li>
    <li>
      <Link to="deportiva">Magicos</Link>
    </li>
    <li>
      <Link to="deportiva">Momentos</Link>
    </li>
    <li>
      <Link to="deportiva">Textiles</Link>
    </li>
    <li>
      <Link to="deportiva">Rocios Auricos</Link>
    </li>
    <li>
      <Link to="deportiva">Varios</Link>
    </li>
  </ul>
</nav>

      <div>
        {/* Aquí se renderizará el componente correspondiente a la subruta */}
        <Outlet />
      </div>
    </>
  );
}


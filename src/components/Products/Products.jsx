import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { productCategories } from '../../data/productsData';
import { useTilt } from '../../hooks/useTilt';
import './Products.css';

const Products = () => {
  return (
    <section className="section bg-light" id="drones">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
        </div>

        <div className="category-grid">
          {productCategories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }) => {
  const tiltRef = useTilt({ max: 8, scale: 1.03 });

  return (
    <Link to={`/products/${category.id}`} className="category-card tilt-card" ref={tiltRef}>
      <div className="category-image-wrapper">
        {category.gridImage || category.image ? (
          <img src={category.gridImage || category.image} alt={category.name} className="category-image" />
        ) : (
          <div className="category-image-placeholder">
            <Rocket size={40} />
          </div>
        )}
        {category.comingSoon && (
          <span className="category-badge">{category.conceptImage ? 'Concept Render' : 'Coming Soon'}</span>
        )}
      </div>
      <div className="category-content">
        <h3 className="category-title">{category.name}</h3>
        <p className="category-tagline">{category.tagline}</p>
        {category.conceptImage && (
          <p className="category-concept-note">AI-generated concept render, not an actual product photo.</p>
        )}
        <span className="category-link">
          View Products <ArrowRight size={16} />
        </span>
      </div>
      <span className="tilt-glare"></span>
    </Link>
  );
};

export default Products;

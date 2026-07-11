import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { productCategories } from '../../data/productsData';
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
            <Link to={`/products/${category.id}`} className="category-card" key={category.id}>
              <div className="category-image-wrapper">
                {category.image ? (
                  <img src={category.image} alt={category.name} className="category-image" />
                ) : (
                  <div className="category-image-placeholder">
                    <Rocket size={40} />
                  </div>
                )}
                {category.comingSoon && <span className="category-badge">Coming Soon</span>}
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.name}</h3>
                <p className="category-tagline">{category.tagline}</p>
                <span className="category-link">
                  View Products <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

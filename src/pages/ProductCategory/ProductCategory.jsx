import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getCategoryById } from '../../data/productsData';
import './ProductCategory.css';

const ProductCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <Link to="/#drones" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Products</Link>
      </div>
    );
  }

  return (
    <main className="category-details-page">
      <div className="category-hero">
        <div className="category-hero-bg" style={{ backgroundImage: `url(${category.image})` }}></div>
        <div className="category-hero-content container">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="category-title-large">{category.name}</h1>
          <p className="category-hero-tagline">{category.tagline}</p>
        </div>
      </div>

      <div className="container category-content-container">
        <div className="products-grid">
          {category.products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-badge">{category.name}</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <ul className="product-specs">
                  {product.specs.map((spec, sIndex) => (
                    <li key={sIndex} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductCategory;

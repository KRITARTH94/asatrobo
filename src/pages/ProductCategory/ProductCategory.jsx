import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Rocket } from 'lucide-react';
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
        {category.heroImage || category.image ? (
          <div className="category-hero-bg category-hero-bg-animated" style={{ backgroundImage: `url(${category.heroImage || category.image})` }}></div>
        ) : (
          <div className="category-hero-bg category-hero-bg-placeholder"></div>
        )}
        <div className="category-hero-content container">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="category-title-large">{category.name}</h1>
          <p className="category-hero-tagline">{category.tagline}</p>
        </div>
      </div>

      <div className="container category-content-container">
        <ProductGroup products={category.products} badgeLabel={category.name} />

        {category.subSections && category.subSections.map((sub) => (
          <div className="product-subsection" key={sub.id}>
            <h3 className="subsection-title">{sub.name}</h3>
            <ProductGroup products={sub.products} badgeLabel={sub.name} compact />
          </div>
        ))}
      </div>
    </main>
  );
};

const ProductGroup = ({ products, badgeLabel, compact }) => {
  if (products.length === 0) {
    return (
      <div className={`coming-soon-panel ${compact ? 'coming-soon-panel-compact' : ''}`}>
        <Rocket size={compact ? 26 : 36} />
        <h3>Coming Soon</h3>
        <p>We're finalizing the lineup for this category. Check back soon, or get in touch to discuss your requirements.</p>
        <Link to="/#contact" className="btn btn-primary">Contact Us</Link>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-badge">{badgeLabel}</div>
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
  );
};

export default ProductCategory;

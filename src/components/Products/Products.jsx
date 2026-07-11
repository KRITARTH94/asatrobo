import React from 'react';
import './Products.css';

const drones = [
  {
    name: 'ART-22',
    type: 'Fixed wing',
    specs: [
      { label: 'Weight', value: '25kg​' },
      { label: 'WingSpan', value: '3200mm' },
      { label: 'Power', value: 'Petrol Engine' },
      { label: 'Max-Altitude', value: '3000m' },
    ],
    image: 'https://static.wixstatic.com/media/7177f3_9ce4927a57af44ffb596fc675fa6d68d~mv2.png'
  },
  {
    name: 'Training UAV (Sky Surfer)',
    type: 'Fixed wing',
    specs: [
      { label: 'Weight', value: '1.5kg' },
      { label: 'WingSpan', value: '1800mm' },
      { label: 'Battery', value: '2200mAh' },
      { label: 'Max-Altitude', value: '3000m' },
    ],
    image: 'https://static.wixstatic.com/media/7177f3_b9a01e7a477c4487958b4a51b26120ec~mv2.png'
  },
  {
    name: 'VTOL Light(Striver)',
    type: 'VTOL',
    specs: [
      { label: 'Weight', value: '7kg' },
      { label: 'WingSpan', value: '2100mm' },
      { label: 'Max-payload', value: '1kg' },
      { label: 'Max-Altitude', value: '3000m' },
      { label: 'Take Off', value: 'Vertical' },
    ],
    image: 'https://static.wixstatic.com/media/7177f3_be858df4f4234533a30a26e071956be0~mv2.png'
  },
  {
    name: 'VTOL Heavy',
    type: 'VTOL',
    specs: [
      { label: 'Weight', value: '10kg' },
      { label: 'WingSpan', value: '2438mm' },
      { label: 'Max Payload', value: '1.5kg' },
      { label: 'Max Altitude', value: '3000m' },
      { label: 'Take Off', value: 'Vertical' },
      { label: 'Endurance', value: '2 hr' },
    ],
    image: 'https://static.wixstatic.com/media/7177f3_ff72c844e5614ef891fd8db034fd6b95~mv2.png'
  },
  {
    name: 'FPV',
    type: 'FPV',
    specs: [
      { label: 'Weight', value: '750gm' },
      { label: 'Dimension', value: '35x46x7cm' },
      { label: 'Battery', value: '8000mAh' },
      { label: 'Load', value: '2kg' },
      { label: 'Max Altitude', value: '3000m' },
      { label: 'Empty Flight Time', value: '45min' },
      { label: 'Load Flight time', value: '15min' },
      { label: 'Take Off', value: 'Vertical' },
    ],
    image: 'https://static.wixstatic.com/media/7177f3_8d7c32a522a249cb88190ef4cd493f1f~mv2.png'
  },
  {
    name: 'ASAT Agri Drone',
    type: 'AgriDrones',
    specs: [
      { label: 'Spray Capacity', value: '10L' },
      { label: 'Flight Time', value: '20min.' },
      { label: 'Range', value: '3000m' },
      { label: 'Speed', value: '0-10m/s' },
      { label: 'Flow Rate', value: '1.2 L/min.​' },
    ],
    image: 'https://static.wixstatic.com/media/3e7eea_254edf03387f459cbff74fef2cac8e36~mv2.png'
  }
];

const Products = () => {
  return (
    <section className="section bg-light" id="drones">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
        </div>

        <div className="products-grid">
          {drones.map((drone, index) => (
            <div className="product-card glass" key={index}>
              <div className="product-image-wrapper">
                <img src={drone.image} alt={drone.name} className="product-image" />
                <div className="product-badge">{drone.type}</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{drone.name}</h3>
                <ul className="product-specs">
                  {drone.specs.map((spec, sIndex) => (
                    <li key={sIndex} className="spec-item">
                      <span className="spec-label" style={{ fontWeight: '600', marginRight: '0.5rem', color: 'var(--text-dark)' }}>{spec.label}</span>
                      <span className="spec-value" style={{ marginLeft: 'auto' }}>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

export const productCategories = [
  {
    id: 'fixed-wing',
    name: 'Fixed Wing',
    tagline: 'Long-range fixed-wing platforms built for endurance, coverage and efficient cruise flight.',
    image: 'https://static.wixstatic.com/media/7177f3_9ce4927a57af44ffb596fc675fa6d68d~mv2.png',
    products: [
      {
        name: 'ART-22',
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
        specs: [
          { label: 'Weight', value: '1.5kg' },
          { label: 'WingSpan', value: '1800mm' },
          { label: 'Battery', value: '2200mAh' },
          { label: 'Max-Altitude', value: '3000m' },
        ],
        image: 'https://static.wixstatic.com/media/7177f3_b9a01e7a477c4487958b4a51b26120ec~mv2.png'
      }
    ]
  },
  {
    id: 'vtol',
    name: 'VTOL',
    tagline: 'Hybrid vertical take-off and landing aircraft combining fixed-wing efficiency with rotor agility.',
    image: 'https://static.wixstatic.com/media/7177f3_be858df4f4234533a30a26e071956be0~mv2.png',
    products: [
      {
        name: 'VTOL Light(Striver)',
        specs: [
          { label: 'Weight', value: '7kg' },
          { label: 'WingSpan', value: '2100mm' },
          { label: 'Max-payload', value: '1kg' },
          { label: 'Max-Altitude', value: '3000m' },
          { label: 'Take Off', value: 'Vertical' },
          { label: 'Endurance', value: '1 hr' },
        ],
        image: '/products/striver.png'
      },
      {
        name: 'VTOL Heavy',
        specs: [
          { label: 'Weight', value: '10kg' },
          { label: 'WingSpan', value: '2438mm' },
          { label: 'Max Payload', value: '1.5kg' },
          { label: 'Max Altitude', value: '3000m' },
          { label: 'Take Off', value: 'Vertical' },
          { label: 'Endurance', value: '2 hr' },
        ],
        image: '/products/vtol-heavy.png'
      }
    ]
  },
  {
    id: 'fpv',
    name: 'FPV',
    tagline: 'High-agility first-person-view drones engineered for heavy-lift and rapid-response missions.',
    image: 'https://static.wixstatic.com/media/7177f3_8d7c32a522a249cb88190ef4cd493f1f~mv2.png',
    products: [
      {
        name: 'FPV',
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
      }
    ],
    subSections: [
      { id: '5-inch', name: '5" FPV', comingSoon: true, products: [] },
      { id: '7-inch', name: '7" FPV', comingSoon: true, products: [] },
      { id: '10-inch', name: '10" FPV', comingSoon: true, products: [] }
    ]
  },
  {
    id: 'agri-drone',
    name: 'ASAT Agri Drone',
    tagline: 'Purpose-built agricultural spraying drones for precision farming operations.',
    image: 'https://static.wixstatic.com/media/3e7eea_254edf03387f459cbff74fef2cac8e36~mv2.png',
    products: [
      {
        name: 'ASAT Agri Drone',
        specs: [
          { label: 'Spray Capacity', value: '10L' },
          { label: 'Flight Time', value: '20min.' },
          { label: 'Range', value: '3000m' },
          { label: 'Speed', value: '0-10m/s' },
          { label: 'Flow Rate', value: '1.2 L/min.​' },
        ],
        image: 'https://static.wixstatic.com/media/3e7eea_254edf03387f459cbff74fef2cac8e36~mv2.png'
      }
    ]
  },
  {
    id: 'quadcopter',
    name: 'Quadcopter',
    tagline: 'Compact multi-rotor platforms for agile, stable flight in tight spaces.',
    image: null,
    comingSoon: true,
    products: []
  }
];

export const getCategoryById = (id) => productCategories.find((category) => category.id === id);

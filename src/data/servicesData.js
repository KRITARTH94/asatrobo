export const servicesData = [
  {
    id: 'solar-power',
    image: 'https://static.wixstatic.com/media/3e7eea_d25cd108a82a42a6b7a9e607df606cb4~mv2.png',
    title: 'Solar Power Plant',
    description: 'Our Inspection Drones are equipped with a combination of sensors and revolutionizing the development, deployment, and inspection of Roof Top and Ground-Based Solar Power Plants. Equipped with thermal imaging, photo, and video cameras, drones perform a variety of GIS and Inspection roles.',
    longDescription: 'Our drone-based solar power plant inspection service provides rapid, high-resolution thermal and visual data of your solar assets. This enables the early detection of defective panels, localized hot spots, and structural issues. By performing these inspections efficiently from the air, we drastically reduce downtime and manual labor costs, ensuring your plant operates at peak efficiency.'
  },
  {
    id: 'building-inspection',
    image: 'https://static.wixstatic.com/media/3e7eea_9142ddb56375429b9dec5393732be3a4~mv2.jpg',
    title: 'Building Inspection',
    description: 'Building Inspection technologies allow inspectors to get more details about the structures while remaining safely on the ground from the inside out. By accessing difficult-to-reach and tight spaces, drones can capture additional information that an inspector would not have managed using conventional means.',
    longDescription: 'Traditional building inspections require scaffolding, rope access, and significant time and safety risks. Our UAS solutions mitigate these risks by providing high-definition imagery and 3D modeling of building facades and roofing. This detailed data aids in condition assessments, maintenance planning, and historic preservation without ever putting a human in harm\'s way.'
  },
  {
    id: 'flare-and-chimney',
    image: 'https://static.wixstatic.com/media/3e7eea_571bd43c1dee4ba59b148ef4045d8899~mv2.jpg',
    title: 'Flare & Chimney Inspection',
    description: 'Our Drone-Based Flare and Chimney Inspection Service provides efficient, cost-effective, and safe inspections for industrial plants, refineries, and power generation facilities. Our drone technology equipped with high-resolution cameras and thermal sensors to deliver precise, real-time data, and ensure safety.',
    longDescription: 'Inspecting active flares and tall industrial chimneys is inherently dangerous and often requires costly plant shutdowns. ASATRobo’s specialized drones are designed to operate safely in close proximity to these structures, capturing critical visual and radiometric thermal data while the plant remains operational. This service is vital for identifying structural fatigue, corrosion, and emission irregularities.'
  },
  {
    id: 'mapping',
    image: 'https://static.wixstatic.com/media/7177f3_f4edfc4921834db5828e88b0a823df30~mv2.png',
    title: 'Mapping',
    description: '"Drone as a Service" (DaaS) involves providing drone-based solutions to clients for various applications like aerial surving and data collection , geospatial analytics, data processing and integration etc.',
    longDescription: 'Precision mapping and aerial surveying form the backbone of modern GIS and construction planning. Utilizing RTK/PPK-enabled drones, we deliver highly accurate orthomosaics, digital elevation models (DEMs), and point clouds. Whether for agriculture monitoring, land development, or topographical surveying, our mapping solutions provide actionable geospatial intelligence.'
  },
  {
    id: 'agriculture',
    image: 'https://static.wixstatic.com/media/3e7eea_254edf03387f459cbff74fef2cac8e36~mv2.png',
    title: 'Agriculture',
    description: 'Our ASAT AGRI series drones are designed for efficient pesticide and fertilizer spraying, seed broadcasting, and dispersal. Built with dual redundant IMU and obstacle avoidance, they offer both manual and fully autonomous modes.',
    longDescription: 'ASAT AGRI drones transform modern farming. With features like Return to Home, Auto Landing, and Low Battery Warnings, they are safe and reliable. We offer two flagship models: ASAT AGRI 10 (10L capacity) and ASAT AGRI 20 (20L capacity), both designed for maximum efficiency.',
    isCustomLayout: true,
    features: ['Manual / Fully Autonomous', 'Dual GPS / Dual Redundant IMU', 'Return to Home, Auto Landing', 'Low Battery Warning', 'Obstacle Avoidance (Optional)'],
    applications: ['Pesticide Spraying', 'Fertilizer Spraying', 'Seed Broadcaster', 'Seed Dispersal'],
    models: [
      {
        name: 'ASAT AGRI 10',
        specs: [
          { label: 'Spray Capacity', value: '10L' },
          { label: 'Flight Time', value: 'Approx. 20mins' },
          { label: 'Range', value: '3000m' },
          { label: 'Speed', value: '0-10m/s' },
          { label: 'Flow Rate', value: '1.2-2L/min' },
          { label: 'Spray width', value: '4-5m' },
          { label: 'Max. Take off Weight', value: '30Kg' }
        ]
      },
      {
        name: 'ASAT AGRI 20',
        specs: [
          { label: 'Spray Capacity', value: '20L' },
          { label: 'Flight Time', value: 'Approx. 20mins' },
          { label: 'Range', value: '3000m' },
          { label: 'Speed', value: '0-10m/s' },
          { label: 'Flow Rate', value: '1.2-2L/min' },
          { label: 'Spray width', value: '7-8m' },
          { label: 'Max. Take off Weight', value: '55Kg' }
        ]
      }
    ]
  }
];

export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

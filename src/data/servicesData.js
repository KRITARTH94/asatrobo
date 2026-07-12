export const servicesData = [
  {
    id: 'solar-power',
    image: 'https://static.wixstatic.com/media/3e7eea_d25cd108a82a42a6b7a9e607df606cb4~mv2.png',
    title: 'Solar Power Plant',
    description: 'Our inspection drones combine thermal imaging, photo, and video sensors to accelerate the development, deployment, and inspection of rooftop and ground-mounted solar power plants. This technology delivers fast, accurate GIS and inspection data — helping operators catch issues early and keep plants running at peak efficiency.',
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
    id: 'technical-consultancy',
    image: '/products/technical-consultancy.jpg',
    title: 'Technical Consultancy',
    description: 'We provide technical consulting services to help you design and build the best UAV systems for your mission. Drawing on our IIT Kanpur-incubated aerospace R&D expertise, our team guides you through airframe selection, payload integration, avionics, and regulatory compliance — turning your concept into a flight-ready drone.',
    longDescription: 'ASATRobo\'s Technical Consultancy connects you directly with our aerospace engineers for end-to-end UAV design support — from initial concept and airframe selection to payload integration, avionics architecture, and flight testing. Whether you\'re a startup building your first prototype or an enterprise scaling an existing fleet, we help you avoid costly design mistakes, meet regulatory requirements, and arrive at a UAV system genuinely built for your mission.'
  }
];

export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

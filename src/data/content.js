/* ============================================
   QJUIC — CENTRALIZED CONTENT DATA
   All site content in one place for easy editing.
   ============================================ */

/* ---------- PROJECTS / SELECTED WORKS ---------- */
export const projects = [
  {
    slug: 'luxe-fashion-store',
    number: '01',
    title: 'Luxe Fashion Store',
    category: 'E-Commerce',
    meta: 'E-Commerce / Brand Identity',
    year: '2025',
    color: '#7c3aed',
    image: '/images/project-fashion.jpg',
    shortDesc: 'Premium fashion e-commerce with AR try-on feature and AI-powered recommendations.',
    challenge: 'Luxe needed to transition from a brick-and-mortar only model to a full digital storefront. The challenge was creating an online experience that matched the exclusivity of their physical boutiques while scaling to handle thousands of concurrent users during seasonal drops.',
    solution: 'We built a custom React-based e-commerce platform with a headless CMS architecture. Key innovations included an AR-powered virtual try-on feature, AI-driven product recommendations based on browsing patterns, and a seamless Stripe checkout flow with multiple payment options.',
    result: 'The platform launched to immediate success. Within 90 days, online sales accounted for 40% of total revenue. The AR try-on feature reduced return rates by 35%, and average session duration increased from 2 to 8 minutes.',
    impact: [
      { number: '300%', label: 'Revenue Growth' },
      { number: '35%', label: 'Fewer Returns' },
      { number: '8min', label: 'Avg. Session' },
    ],
    tech: ['React', 'Node.js', 'Stripe', 'AI/ML', 'Three.js'],
  },
  {
    slug: 'fintrack-dashboard',
    number: '02',
    title: 'FinTrack Dashboard',
    category: 'Web Application',
    meta: 'Web Application / Data Viz',
    year: '2025',
    color: '#06b6d4',
    image: '/images/project-dashboard.jpg',
    shortDesc: 'Real-time financial analytics dashboard with interactive charts and live data feeds.',
    challenge: 'FinTrack\'s existing analytics tool was a legacy desktop application that couldn\'t handle real-time data feeds. Their analysts needed a modern, web-based platform that could process live market data, render complex visualizations, and support collaborative annotation.',
    solution: 'We engineered a high-performance dashboard using Next.js with WebSocket-powered real-time data streaming. Interactive D3.js charts with drill-down capabilities, collaborative annotation layers, and a custom alert system were key deliverables. The backend was built on PostgreSQL with Redis caching for sub-100ms query responses.',
    result: 'The new platform processes over 50,000 data points per second with zero perceptible lag. Team collaboration improved by 60%, and the average time-to-insight dropped from 15 minutes to under 2 minutes.',
    impact: [
      { number: '50K', label: 'Data Points/Sec' },
      { number: '60%', label: 'Team Efficiency' },
      { number: '<2min', label: 'Time to Insight' },
    ],
    tech: ['Next.js', 'D3.js', 'WebSocket', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'foodiespot-delivery',
    number: '03',
    title: 'FoodieSpot Delivery',
    category: 'Platform',
    meta: 'Platform / Mobile-First',
    year: '2024',
    color: '#ec4899',
    image: '/images/project-food.jpg',
    shortDesc: 'Modern food delivery platform with real-time order tracking and restaurant management.',
    challenge: 'FoodieSpot was losing market share to larger delivery aggregators. They needed a platform that could compete on UX while offering restaurant partners better commission rates and deeper analytics. The platform had to handle peak-hour traffic spikes of 10x normal load.',
    solution: 'We designed a mobile-first React application with Firebase for real-time order tracking and push notifications. The restaurant management dashboard provided live analytics on order volume, preparation times, and customer satisfaction scores. Auto-scaling infrastructure ensured zero downtime during peak hours.',
    result: 'Customer retention improved by 45% within the first quarter. Restaurant partner onboarding increased 3x due to the intuitive management dashboard. The platform now serves 200+ restaurants across 5 cities.',
    impact: [
      { number: '45%', label: 'Better Retention' },
      { number: '200+', label: 'Restaurants' },
      { number: '5', label: 'Cities Served' },
    ],
    tech: ['React', 'Firebase', 'Maps API', 'Redux', 'Node.js'],
  },
  {
    slug: 'travelverse-booking',
    number: '04',
    title: 'TravelVerse Booking',
    category: 'Brand Identity',
    meta: 'Interactive / Immersive',
    year: '2024',
    color: '#f97316',
    image: '/images/project-travel.jpg',
    shortDesc: 'Immersive travel booking platform with 360° virtual tours and smart itinerary planning.',
    challenge: 'TravelVerse wanted to differentiate themselves in a crowded online travel market. Standard grid-based booking platforms weren\'t conveying the emotional pull of travel destinations. They needed an experience that made users feel like they were already there.',
    solution: 'We created an immersive booking experience using Three.js for 360° virtual property tours, integrated with a smart itinerary planner that used AI to suggest optimal routes and activities. The booking engine supported multi-currency payments and real-time availability checks across 30+ hotel chains.',
    result: 'Booking conversion rates increased by 65% compared to the previous platform. The virtual tour feature was used by 78% of bookers, and average booking value increased by 40% as users explored premium options through the immersive previews.',
    impact: [
      { number: '65%', label: 'More Conversions' },
      { number: '78%', label: 'Tour Adoption' },
      { number: '40%', label: 'Higher AOV' },
    ],
    tech: ['Vue.js', 'Three.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    slug: 'noir-studio-identity',
    number: '05',
    title: 'Noir Studio Identity',
    category: 'Brand Identity',
    meta: 'Brand Identity / Motion',
    year: '2024',
    color: '#a855f7',
    image: '/images/project-brand.jpg',
    shortDesc: 'Complete brand identity system with motion design language and digital presence.',
    challenge: 'Noir Studio, a high-end architecture firm, had a dated brand identity that didn\'t reflect the cutting-edge nature of their work. They needed a complete rebrand — from visual identity to digital presence — that would position them as industry leaders in contemporary design.',
    solution: 'We developed a comprehensive brand identity system including logo design, typography selection, color palette, and motion design language. The website was built as a cinematic portfolio with full-screen project showcases, smooth page transitions, and a generative background system that reinforced the brand\'s modern aesthetic.',
    result: 'The rebrand generated significant industry buzz, with 3 design awards in the first 6 months. Website traffic increased by 180%, and inbound project inquiries doubled. The motion design system was adopted across all client touchpoints.',
    impact: [
      { number: '3', label: 'Design Awards' },
      { number: '180%', label: 'Traffic Growth' },
      { number: '2×', label: 'More Inquiries' },
    ],
    tech: ['Figma', 'After Effects', 'React', 'GSAP', 'WebGL'],
  },
];

/* ---------- PROJECT CATEGORIES for filtering ---------- */
export const projectCategories = ['All', 'E-Commerce', 'Web Application', 'Platform', 'Brand Identity'];

/* ---------- CAPABILITIES / SERVICES ---------- */
export const capabilities = [
  {
    number: '01',
    title: 'UI/UX Design',
    desc: 'Crafting bold, user-centered interfaces that command attention and convert. Every pixel serves a purpose.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    number: '02',
    title: 'Frontend Dev',
    desc: 'High-performance web applications built with modern frameworks. Clean code, blazing speed, zero compromise.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    number: '03',
    title: 'E-Commerce',
    desc: 'Full-stack online stores with seamless checkout flows, inventory systems, and payment gateway integration.',
    tags: ['Shopify', 'Stripe', 'Custom CMS'],
  },
  {
    number: '04',
    title: 'Responsive Web',
    desc: 'Mobile-first architecture ensuring flawless experience across every viewport and device.',
    tags: ['Mobile-First', 'PWA', 'Cross-Browser'],
  },
  {
    number: '05',
    title: 'Performance & SEO',
    desc: 'Lightning-fast load times and search optimization to maximize organic reach and user retention.',
    tags: ['Core Vitals', 'SEO', 'Analytics'],
  },
  {
    number: '06',
    title: 'Maintenance',
    desc: 'Ongoing technical support, security updates, and performance monitoring to keep systems running at peak.',
    tags: ['Updates', 'Security', 'Monitoring'],
  },
];

/* ---------- PRICING PLANS ---------- */
export const pricingPlans = [
  {
    tier: 'Tier 01',
    name: 'Starter',
    desc: 'For individuals & small businesses launching their digital presence.',
    currency: '₹',
    price: '4,999',
    period: 'one-time',
    features: [
      'Single Page Website',
      'Mobile Responsive',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Links',
      '1 Month Free Support',
      'SSL Certificate',
    ],
    featured: false,
  },
  {
    tier: 'Tier 02',
    name: 'Professional',
    desc: 'For growing startups and businesses that demand a competitive edge.',
    currency: '₹',
    price: '14,999',
    period: 'one-time',
    features: [
      'Up to 8 Pages',
      'Custom UI/UX Design',
      'Advanced Animations',
      'Full SEO Optimization',
      'CMS Integration',
      'Payment Gateway',
      '3 Months Free Support',
      'Performance Optimization',
    ],
    featured: true,
  },
  {
    tier: 'Tier 03',
    name: 'Enterprise',
    desc: 'Full-scale digital solutions for businesses that refuse to compromise.',
    currency: '₹',
    price: '34,999',
    period: 'one-time',
    features: [
      'Unlimited Pages',
      'Custom Web Application',
      'Admin Dashboard',
      'Database Integration',
      'API Development',
      'E-Commerce Features',
      '6 Months Free Support',
      'Priority Maintenance',
    ],
    featured: false,
  },
];

/* ---------- TECH STACK ---------- */
export const tools = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'Figma', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'Tailwind',
  'Redux', 'Framer Motion', 'Three.js', 'Vercel',
];

/* ---------- CONTACT CHANNELS ---------- */
export const contactChannels = [
  {
    id: 'whatsapp-contact',
    icon: '💬',
    label: 'WhatsApp',
    value: 'Click to Chat — Instant Reply',
    href: 'https://wa.me/917008414093?text=Hi!%20I\'m%20interested%20in%20your%20web%20development%20services.',
    external: true,
  },
  {
    id: 'phone-contact',
    icon: '📞',
    label: 'Phone',
    value: '+91 70084 14093',
    href: 'tel:+917008414093',
    external: false,
  },
  {
    id: 'email-contact',
    icon: '✉️',
    label: 'Email',
    value: 'contact@qjuic.dev',
    href: 'mailto:contact@qjuic.dev',
    external: false,
  },
  {
    id: 'instagram-contact',
    icon: '📸',
    label: 'Instagram',
    value: '@qjuic.dev',
    href: 'https://instagram.com/qjuic.dev',
    external: true,
  },
];

/* ---------- SOCIAL LINKS ---------- */
export const socials = [
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/917008414093' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com/qjuic.dev' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/qjuic' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/qjuic' },
];

/* ---------- BUDGET OPTIONS ---------- */
export const budgetOptions = [
  'Under ₹5,000',
  '₹5,000 – ₹15,000',
  '₹15,000 – ₹35,000',
  '₹35,000+',
];

/* ---------- SERVICE OPTIONS ---------- */
export const serviceOptions = [
  'Landing Page',
  'Business Website',
  'E-Commerce Store',
  'Web Application',
  'Portfolio Website',
  'Custom Project',
];

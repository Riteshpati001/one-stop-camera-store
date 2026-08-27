/**
 * Aperture Noir design note: product data is deliberately generic and marked as a
 * demo catalogue so the interface never claims unverified availability or pricing.
 */
export const store = {
  name: "One Stop",
  location: "Bapuji Nagar, Bhubaneswar",
  address: "Plot No. 224, Venus, MN Lane, Bapuji Nagar, Bhubaneswar, Odisha 751009",
  phone: "0674 259 8226",
  phoneHref: "tel:+916742598226",
  email: "onestopodisha@gmail.com",
  emailHref: "mailto:onestopodisha@gmail.com",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot%20No.%20224%2C%20Venus%2C%20MN%20Lane%2C%20Bapuji%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751009",
};

export type Category = {
  slug: string;
  title: string;
  descriptor: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "cameras",
    title: "Cameras",
    descriptor: "Mirrorless · DSLR · Video",
    description: "Choose a capable body for the way you create.",
    image: "/manus-storage/onestop-camera-body_2721f148.jpg",
  },
  {
    slug: "lenses",
    title: "Lenses",
    descriptor: "Wide · Portrait · Telephoto",
    description: "Shape perspective, mood, and the story inside your frame.",
    image: "/manus-storage/onestop-portrait-lens_63c93032.jpg",
  },
  {
    slug: "video",
    title: "Video",
    descriptor: "Rigs · Stabilization · Support",
    description: "Build a clean, flexible setup for moving images.",
    image: "/manus-storage/onestop-creator-rig_b9f34334.jpg",
  },
  {
    slug: "audio",
    title: "Audio",
    descriptor: "Microphones · Recording",
    description: "Bring the voice and atmosphere of a scene closer.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=82",
  },
  {
    slug: "lighting",
    title: "Lighting",
    descriptor: "Lights · Modifiers · Stands",
    description: "Create a soft studio look with controlled illumination.",
    image: "/manus-storage/onestop-lighting-studio_11999866.webp",
  },
  {
    slug: "accessories",
    title: "Accessories",
    descriptor: "Bags · Batteries · Memory · Tripods",
    description: "Finish the system with the parts that keep it moving.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  label: string;
  image: string;
  tone: "warm" | "cool" | "neutral";
};

export const products: Product[] = [
  {
    slug: "mirrorless-camera-body",
    name: "Mirrorless camera body",
    category: "cameras",
    label: "Camera system",
    image: "/manus-storage/onestop-camera-body_2721f148.jpg",
    tone: "warm",
  },
  {
    slug: "portrait-prime-lens",
    name: "Portrait prime lens",
    category: "lenses",
    label: "Optics",
    image: "/manus-storage/onestop-portrait-lens_63c93032.jpg",
    tone: "neutral",
  },
  {
    slug: "creator-video-setup",
    name: "Creator video setup",
    category: "video",
    label: "Video support",
    image: "/manus-storage/onestop-creator-rig_b9f34334.jpg",
    tone: "cool",
  },
  {
    slug: "on-camera-microphone",
    name: "On-camera microphone",
    category: "audio",
    label: "Audio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=82",
    tone: "neutral",
  },
  {
    slug: "led-lighting-kit",
    name: "LED lighting kit",
    category: "lighting",
    label: "Lighting",
    image: "/manus-storage/onestop-lighting-studio_11999866.webp",
    tone: "warm",
  },
  {
    slug: "travel-camera-support",
    name: "Travel camera support",
    category: "accessories",
    label: "Accessories",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82",
    tone: "cool",
  },
];

export const purposeOptions = [
  "Photography",
  "YouTube",
  "Weddings",
  "Travel",
  "Cinematography",
];

export const experienceOptions = ["Beginner", "Intermediate", "Professional"];

export const budgetOptions = [
  "I’m exploring",
  "Entry setup",
  "Serious kit",
  "Professional setup",
];

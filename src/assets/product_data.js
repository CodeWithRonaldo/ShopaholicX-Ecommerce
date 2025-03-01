import img1 from "./best1.png";
import img2 from "./best2.png";
import img3 from "./best3.png";
import img5 from "./best5.png";
import img6 from "./best6.png";
import img7 from "./best7.png";
import img8 from "./best8.png";
import img9 from "./best.png";
import img10 from "./8&9.png";
import img11 from "./culture.png";
import img12 from "./kleep.png";
import img13 from "./leroyJenkins.png";
import img14 from "./mafioso.png";
import img15 from "./oneDegree.png";
import img16 from "./pablo.png";
// import img17 from "./prepCoterie.png";
import img18 from "./pvt.png";
import img19 from "./stayWinning.png";
import img20 from "./talent.png";
import img21 from "./tlr.png";
import img22 from "./trojans.png";
import img23 from "./weiv.png";
import img24 from "./yler.png";

export const productData = [
  {
    id: crypto.randomUUID(),
    name: "Elk Denim",
    price: 100,
    originalPrice: 150,
    discount: Math.round(((150 - 100) / 150) * 100),
    image: img1,
    category: "Jeans",
    brand: "Elk Wear",
    description:
      "Premium slim-fit denim with durable stitching and a modern cut.",
    stock: 15,
  },
  {
    id: crypto.randomUUID(),
    name: "Green Bean Denim",
    price: 200,
    originalPrice: 250,
    discount: Math.round(((250 - 200) / 250) * 100),

    image: img2,
    category: "Jeans",
    brand: "Urban Classics",
    description: "Eco-friendly denim with a relaxed fit and breathable fabric.",
    stock: 10,
  },
  {
    id: crypto.randomUUID(),
    name: "Archer Denim",
    price: 300,
    originalPrice: 350,
    discount: Math.round(((350 - 300) / 350) * 100),

    image: img3,
    category: "Jeans",
    brand: "Archer Apparel",
    description:
      "Rugged, durable, and stylish. Perfect for casual and semi-formal wear.",
    stock: 8,
  },
  {
    id: crypto.randomUUID(),
    name: "San Pedro C21",
    price: 330,
    originalPrice: 400,
    discount: Math.round(((400 - 330) / 400) * 100),

    image: img5,
    category: "Jeans",
    brand: "San Pedro",
    description: "A unique blend of comfort and durability with a faded wash.",
    stock: 12,
  },
  {
    id: crypto.randomUUID(),
    name: "Timeless Denim",
    price: 200,
    originalPrice: 250,
    discount: Math.round(((250 - 200) / 250) * 100),

    image: img6,
    category: "Jeans",
    brand: "Vintage Co.",
    description: "Classic straight-leg jeans that never go out of style.",
    stock: 20,
  },
  {
    id: crypto.randomUUID(),
    name: "Amir Straight",
    price: 300,
    originalPrice: 350,
    discount: Math.round(((350 - 300) / 350) * 100),

    image: img7,
    category: "Jeans",
    brand: "Amir Designs",
    description: "Stylish straight-fit jeans with a touch of street fashion.",
    stock: 9,
  },
  {
    id:crypto.randomUUID(),
    name: "Dakota Skinny",
    price: 400,
    originalPrice: 450,
    discount: Math.round(((450 - 400) / 450) * 100),

    image: img8,
    category: "Jeans",
    brand: "Dakota Wear",
    description: "Skinny-fit jeans designed for a sleek, modern look.",
    stock: 5,
  },
  {
    id: crypto.randomUUID(),
    name: "Granite Denim",
    price: 120,
    originalPrice: 150,
    discount: Math.round(((150 - 120) / 150) * 100),

    image: img9,
    category: "Jeans",
    brand: "Granite Gear",
    description: "Stone-washed denim with reinforced seams for durability.",
    stock: 18,
  },
  {
    id:crypto.randomUUID(),
    name: "Urban Edge",
    price: 180,
    originalPrice: 220,
    discount: Math.round(((220 - 180) / 220) * 100),

    image: img10,
    category: "Jeans",
    brand: "StreetWear Inc.",
    description: "Trendy urban jeans with a relaxed fit and stretch fabric.",
    stock: 14,
  },
  {
    id: crypto.randomUUID(),
    name: "Culture Shock",
    price: 260,
    originalPrice: 300,
    discount: Math.round(((300 - 260) / 300) * 100),

    image: img11,
    category: "T-Shirts",
    brand: "Culture Wear",
    description: "A fusion of culture and fashion, featuring unique prints.",
    stock: 7,
  },
  {
    id: crypto.randomUUID(),
    name: "Kleep Classic",
    price: 210,
    originalPrice: 270,
    discount: Math.round(((270 - 210) / 270) * 100),
    image: img12,
    category: "T-Shirts",
    brand: "Kleep Apparel",
    description: "Classic cotton tee with a minimalist design.",
    stock: 25,
  },
  {
    id: crypto.randomUUID(),
    name: "Leroy Jenkins",
    price: 250,
    originalPrice: 310,
    discount: Math.round(((310 - 250) / 310) * 100),
    image: img13,
    category: "T-Shirts",
    brand: "Leroy",
    description: "Bold statement tee with eye-catching graphics.",
    stock: 13,
  },
  {
    id: crypto.randomUUID(),
    name: "Mafioso Fit",
    price: 280,
    originalPrice: 330,
    discount: Math.round(((330 - 280) / 330) * 100),
    image: img14,
    category: "Shirts",
    brand: "Mafioso",
    description: "Premium button-up shirt with a sleek, tailored fit.",
    stock: 10,
  },
  {
    id: crypto.randomUUID(),
    name: "One Degree",
    price: 320,
    originalPrice: 400,
    discount: Math.round(((400 - 320) / 400) * 100),
    image: img15,
    category: "Shirts",
    brand: "One Degree",
    description:
      "Sophisticated long-sleeve shirt for business or casual outings.",
    stock: 6,
  },
  {
    id: crypto.randomUUID(),
    name: "Pablo Premium",
    price: 290,
    originalPrice: 350,
    discount: Math.round(((350 - 290) / 350) * 100),

    image: img16,
    category: "Shirts",
    brand: "Pablo",
    description: "Luxury silk shirt with an elegant design.",
    stock: 8,
  },

  {
    id: crypto.randomUUID(),
    name: "Private Label",
    price: 300,
    originalPrice: 380,
    discount: Math.round(((380 - 300) / 380) * 100),
    image: img18,
    category: "Shirts",
    brand: "Private Label",
    description: "High-quality fabric with a sophisticated fit.",
    stock: 9,
  },
  {
    id: crypto.randomUUID(),
    name: "Stay Winning",
    price: 280,
    originalPrice: 350,
    discount: Math.round(((350 - 280) / 350) * 100),
    image: img19,
    category: "Shirts",
    brand: "Stay Winning",
    description: "Sporty yet casual, perfect for any occasion.",
    stock: 10,
  },
  {
    id: crypto.randomUUID(),
    name: "Polo Premium",
    price: 240,
    originalPrice: 300,
    discount: Math.round(((300 - 240) / 300) * 100),
    image: img20,
    category: "Shirts",
    brand: "Polo Premium",
    description: "Classic and timeless, suitable for formal events.",
    stock: 11,
  },
  {
    id: crypto.randomUUID(),
    name: "TLR",
    price: 260,
    originalPrice: 320,
    discount: Math.round(((320 - 260) / 320) * 100),
    image: img21,
    category: "Shirts",
    brand: "TLR",
    description: "Elegant and refined, perfect for business meetings.",
    stock: 12,
  },
  {
    id: crypto.randomUUID(),
    name: "Trojans",
    price: 220,
    originalPrice: 270,
    discount: Math.round(((270 - 220) / 270) * 100),
    image: img22,
    category: "Shirts",
    brand: "Trojans",
    description: "Sporty and casual, great for everyday wear.",
    stock: 13,
  },
  {
    id: crypto.randomUUID(),
    name: "Weiv",
    price: 280,
    originalPrice: 340,
    discount: Math.round(((340 - 280) / 340) * 100),
    image: img23,
    category: "Shirts",
    brand: "Weiv",
    description: "Modern and stylish, suitable for fashion events.",
    stock: 14,
  },
  {
    id: crypto.randomUUID(),
    name: "Tyler",
    price: 240,
    originalPrice: 290,
    discount: Math.round(((290 - 240) / 290) * 100),
    image: img24,
    category: "Shirts",
    brand: "Tyler",
    description: "Classic and sophisticated, perfect for formal occasions.",
    stock: 15,
  },
];

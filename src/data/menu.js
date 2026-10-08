export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'beverages', label: 'Coffee & Beverages' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'starters', label: 'Snacks & Starters' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'momos', label: 'Momos & More' }
];

export const MENU_ITEMS = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'beverages',
    description: 'Rich espresso layered with thick silky steamed milk foam and delicate latte art.',
    price: null, // Price upon cafe confirmation
    image: '/images/cappuccino.png',
    isFeatured: true,
    tags: ['Popular', 'Hot Coffee', 'Veg'],
    rating: 4.8
  },
  {
    id: 'cold-coffee-ice-cream',
    name: 'Cold Coffee with Ice Cream',
    category: 'beverages',
    description: 'Signature blended cold coffee topped with a velvety scoop of vanilla ice cream and dark cocoa drizzle.',
    price: null,
    image: '/images/featured_cold_coffee.png',
    isFeatured: true,
    tags: ['Bestseller', 'Chilled', 'Veg'],
    rating: 4.9
  },
  {
    id: 'kit-kat-shake',
    name: 'Kit Kat Shake',
    category: 'beverages',
    description: 'Thick chocolate milkshake blended with crunchy KitKat bars, topped with whipped cream and wafer crust.',
    price: null,
    image: '/images/featured_kitkat_shake.png',
    isFeatured: true,
    tags: ['Popular', 'Dessert Shake', 'Veg'],
    rating: 4.7
  },
  {
    id: 'nescafe',
    name: 'Classic Nescafe Coffee',
    category: 'beverages',
    description: 'Warm and comforting classic brewed milk coffee for instant rejuvenation.',
    price: null,
    image: '/images/hero_coffee_bg.png',
    isFeatured: false,
    tags: ['Hot Coffee', 'Classic', 'Veg'],
    rating: 4.5
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon Mocktail',
    category: 'beverages',
    description: 'Refreshing citrus mocktail infused with blue curaçao syrup, sprite, lime and fresh mint.',
    price: null,
    image: '/images/featured_cold_coffee.png', // Crisp mocktail representation
    isFeatured: false,
    tags: ['Refreshment', 'Mocktail', 'Chilled'],
    rating: 4.6
  },
  {
    id: 'veg-cheese-sandwich',
    name: 'Veg Cheese Sandwich',
    category: 'sandwiches',
    description: 'Fresh garden vegetables layered with generous melted cheddar and mozzarella cheese toasted to crisp perfection.',
    price: null,
    image: '/images/veg_cheese_sandwich.png',
    isFeatured: true,
    tags: ['Cafe Favorite', 'Veg'],
    rating: 4.8
  },
  {
    id: 'grilled-sandwich',
    name: 'Classic Grilled Sandwich',
    category: 'sandwiches',
    description: 'Golden grilled sandwich stuffed with seasoned spiced potato mash and crisp capsicum.',
    price: null,
    image: '/images/veg_cheese_sandwich.png',
    isFeatured: false,
    tags: ['Grilled', 'Veg'],
    rating: 4.6
  },
  {
    id: 'paneer-momos',
    name: 'Paneer Momos (Steamed)',
    category: 'momos',
    description: 'Hand-crafted dumplings filled with cottage cheese, fresh garlic, herbs and served with spicy tomato chili chutney.',
    price: null,
    image: '/images/featured_paneer_momos.png',
    isFeatured: true,
    tags: ['Bestseller', 'Steamed', 'Veg'],
    rating: 4.9
  },
  {
    id: 'veg-momos-steamed',
    name: 'Veg Momos (Steamed)',
    category: 'momos',
    description: 'Delicate dumplings stuffed with finely minced cabbage, carrots and spring onions.',
    price: null,
    image: '/images/featured_paneer_momos.png',
    isFeatured: false,
    tags: ['Steamed', 'Veg'],
    rating: 4.5
  },
  {
    id: 'veg-cheese-pizza',
    name: 'Veg Cheese Pizza',
    category: 'pizza',
    description: 'Hand-tossed thin crust pizza topped with rich tomato herb sauce, sweet corn, bell peppers and molten cheese.',
    price: null,
    image: '/images/featured_veg_cheese_pizza.png',
    isFeatured: true,
    tags: ['Popular', 'Pizza', 'Veg'],
    rating: 4.8
  },
  {
    id: 'chicken-barbeque-pizza',
    name: 'Chicken Barbeque Pizza',
    category: 'pizza',
    description: 'Savory roasted barbecue chicken chunks, caramelized onions and mozzarella over hand-stretched pizza crust.',
    price: null,
    image: '/images/featured_veg_cheese_pizza.png',
    isFeatured: false,
    tags: ['Non-Veg', 'BBQ', 'Pizza'],
    rating: 4.7
  },
  {
    id: 'french-fries',
    name: 'Crispy French Fries',
    category: 'starters',
    description: 'Golden, crispy potato fries tossed in mild peri-peri seasoning and sea salt.',
    price: null,
    image: '/images/featured_veg_cheese_sandwich.png',
    isFeatured: false,
    tags: ['Crispy Snack', 'Veg'],
    rating: 4.6
  },
  {
    id: 'spring-rolls',
    name: 'Crispy Veg Spring Rolls',
    category: 'starters',
    description: 'Golden fried rolls stuffed with glass noodles and shredded stir-fried vegetables.',
    price: null,
    image: '/images/featured_paneer_momos.png',
    isFeatured: false,
    tags: ['Crispy', 'Veg'],
    rating: 4.5
  },
  {
    id: 'manchurian',
    name: 'Veg Manchurian Dry',
    category: 'starters',
    description: 'Crispy vegetable balls tossed in dark soy sauce, fresh garlic and green scallions.',
    price: null,
    image: '/images/featured_paneer_momos.png',
    isFeatured: false,
    tags: ['Spicy', 'Veg'],
    rating: 4.6
  }
];

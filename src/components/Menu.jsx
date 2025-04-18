const dishes = [
    {
      id: 1,
      name: 'Quantum Taco',
      description: 'Spicy beef with a fusion of galactic spices, topped with neon salsa.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
    },
    {
      id: 2,
      name: 'Cosmic Burger',
      description: 'Juicy patty with interstellar sauce, served on a glowing bun.',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    },
    {
      id: 3,
      name: 'Stellar Fries',
      description: 'Crispy fries dusted with cosmic seasoning and a side of supernova dip.',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1573084139789-27e43ec28a07',
    },
  ];
  
  const Menu = ({ addToCart }) => {
    return (
      <section id="menu" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="dish-card bg-gray-800 rounded-lg overflow-hidden glow"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-300 mb-4">{dish.description}</p>
                <p className="text-neon-blue font-bold mb-4">${dish.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(dish)}
                  className="w-full bg-neon-blue text-black font-bold py-2 px-4 rounded hover:bg-white transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Menu;
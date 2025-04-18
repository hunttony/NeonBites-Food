const Hero = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1512152272826-1f1756f76937')] bg-cover bg-center">
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg glow">
          <h2 className="text-5xl font-bold mb-4 text-neon-blue animate-pulse">Welcome to NeonBites</h2>
          <p className="text-xl mb-6">Futuristic flavors from our food truck, crafted to tantalize your taste buds.</p>
          <a
            href="#menu"
            className="inline-block bg-neon-blue text-black font-bold py-3 px-6 rounded-full hover:bg-white transition glow"
          >
            Explore Menu
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
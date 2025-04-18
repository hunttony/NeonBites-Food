import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-neon-blue mb-4">Join Our Cosmic Crew</h3>
          <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates from NeonBites!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-64 bg-gray-800 text-white border border-neon-blue rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-neon-blue glow"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-neon-blue text-black font-bold py-2 px-6 rounded-full hover:bg-white transition disabled:opacity-50 glow"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {message && (
            <p className={`mt-4 ${message.includes('Thank you') ? 'text-neon-blue' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </div>
        <p className="text-gray-400">© 2025 NeonBites. All rights reserved.</p>
        <p className="text-gray-400 mt-2">Follow us on X: @NeonBitesTruck</p>
      </div>
    </footer>
  );
};

export default Footer;
const AboutUsCard = () => (

  <section className="w-full max-w-xl mx-auto my-6 sm:my-12 p-4 sm:p-8 bg-white rounded-2xl shadow-2xl flex flex-col items-center animate-fadeInUp">
    <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center">About Us</h2>
    <p className="text-gray-700 text-base sm:text-lg mb-6 text-center">
      Welcome to Namaste React! This project is inspired by modern food delivery platforms and built with React and Tailwind CSS. Our mission is to deliver a beautiful, fast, and interactive food ordering experience. Explore restaurants, view menus, and enjoy stunning UI animations.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full justify-center">
      <div className="flex flex-col items-center w-full sm:w-auto">
        <span className="text-2xl font-bold text-green-500">100+</span>
        <span className="text-gray-500">Restaurants</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-blue-500">1000+</span>
        <span className="text-gray-500">Dishes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-pink-500">∞</span>
        <span className="text-gray-500">Possibilities</span>
      </div>
    </div>
  </section>

);

export default AboutUsCard;

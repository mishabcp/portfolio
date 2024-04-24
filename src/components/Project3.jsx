import Header from '../components/P3-Header';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Project3 = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
    pauseOnHover: false,

  };
  

  const images = [
    'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/cart page.png',
    'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/homepage.png',
    'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/restaurants page.png',
    'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/orders page.png',
    'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/menu page.png',
  ];
  
  
  return (
    <div className="flex flex-col mb-36 min-h-screen"> {/* Use flexbox to make sure the footer sticks to the bottom */}
      <Header />
      <main className="w-4/5 2xl:w-3/5 mx-auto flex-1">
        <h1 className='font-bold text-6xl flex items-center justify-center mb-36 mt-44'>Project Details</h1>
        <div className="items-center justify-center">
        {/* First Two Divs */}
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg bg-white md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/user flow.png"
              alt="Project Image"
              className=" w-full h-auto rounded-3xl"
            />
          </div>

          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">User Flow</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">Users begin by securely registering and logging in to explore a variety of restaurants listed on the platform. Each restaurant features detailed information retrieved dynamically from the database. Upon selecting a restaurant, users are directed to the menu page, where they can view items along with descriptions and prices. The app allows users to add items to their cart, with each addition stored in the database for easy checkout. The cart page provides a detailed list of items, ensuring a seamless shopping experience. When ready to place an order, users' requests are securely processed, clearing the cart and storing order details in the database. This end-to-end process ensures a convenient and efficient platform for browsing, selecting, and ordering food.</p>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">EER Diagram</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">The EER diagram encapsulates the data architecture of our food delivery app. It comprises tables like User (for user details), Restaurant (for restaurant information), Menu (for menu items), Cart (for user cart management), and Order (for order processing). These interconnected tables facilitate seamless user experiences, allowing browsing, ordering, and cart management functionalities within the app.</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-3 px-2">
              <img
                src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/EER Diagram.png"
                alt="Project Image"
                className="mb-3 w-full h-auto rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* next two divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/MVC.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
          </div>
          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Project Structure</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">The project is designed using the MVC (Model-View-Controller) architecture, emphasizing a structured and modular approach. It leverages Java servlets and JDBC for server-side logic and MySQL for data storage. The directory structure encompasses distinct folders for DAO interfaces, DAO implementations, model classes (representing database entities like Cart, User, Restaurant, OrderTable, and Menu), servlets (handling HTTP requests and business logic), and web assets (images, JSP files). This architectural pattern ensures separation of concerns, enhances code organization, and facilitates efficient development and maintenance of the application.</p>
          </div>
        </div>
        
      </div>
      <div className="flex items-center justify-center overflow-hidden">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className='m-4'> {/* Add a unique key prop to each child in the array */}
                <img src={image} alt={`Image ${index}`} className="h-72 w-auto rounded-lg" />
              </div>
            ))}
          </Slider>
      </div>
    </main>
  </div>
  );
};

export default Project3;

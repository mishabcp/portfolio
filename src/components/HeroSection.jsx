import React from 'react';

const HeroSection = () => {
  const onButtonClick = () => {
<<<<<<< HEAD
    fetch('/portfolio/src/assets/resume.pdf')
=======
    const resumeUrl = 'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/resume.pdf';

    fetch(resumeUrl) // Fetch the PDF file
>>>>>>> 1c2b78c6d0f0a9f2931f949a33ad50acf13ad5b2
      .then((response) => {
        return response.blob(); // Convert response to a blob
      })
      .then((blob) => {
        // Create a URL for the blob
        const url = window.URL.createObjectURL(new Blob([blob]));
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Mishab_Resume.pdf'); // Set the download attribute
        // Append the link to the body and trigger the click event
        document.body.appendChild(link);
        link.click();
        // Clean up by removing the link and revoking the URL
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  };

  return (
<<<<<<< HEAD
    <section className="bg-gray-900 text-white py-10 md:py-24 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
    <div className="container mx-auto text-left sm:pl-4 md:pl-4 lg:pl-0 animate-slide-in-opacity" style={{ paddingLeft: '40px' }}>
      {/* Add left padding for small (sm) screen sizes */}
      <h1 className="text-5xl  md:text-7xl lg:text9xl font-bold mb-4 md:mb-8">Mishab</h1>
      {/* Adjust font sizes for better readability */}
      <p className="text-3xl  md:text-5xl lg:text-7xl mb-4 md:mb-8 font-bold">Full Stack Developer</p>
      {/* Adjust font sizes and padding for the button */}
      <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-8 lg:px-10  mb-0 mt-8 rounded-full shadow-lg">
        Resume
      </button>
    </div>
  </section>
  

=======
    <section className="bg-gray-900 text-white py-40 mt-0 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
      <div className="container mx-auto text-left animate-slide-in-opacity">
        <h1 className="text-5xl font-bold mb-4">Mishab</h1>
        <p className="text-7xl mb-8 font-bold">Full Stack Developer</p>
        {/* Render a button to trigger the download */}
        <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Download Resume
        </button>
      </div>
    </section>
>>>>>>> 1c2b78c6d0f0a9f2931f949a33ad50acf13ad5b2
  );
};

export default HeroSection;

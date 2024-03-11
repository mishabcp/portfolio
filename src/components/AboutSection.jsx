// AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-white mt-20">
      <div className="container mx-auto text-center"> {/* Added text-center */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada posuere velit sit amet fermentum. Nullam gravida ligula eget nisl porta, eget pretium libero maximus. Vestibulum vulputate nunc eget lorem consequat, id egestas metus convallis. Integer quis libero in est placerat venenatis non at tortor. Sed nec arcu id velit ullamcorper faucibus. Vestibulum posuere velit in ante cursus scelerisque. Integer laoreet magna ac lacus sollicitudin feugiat. Curabitur quis odio id nulla fringilla rhoncus.
        </p>
        <p className="text-lg mb-8">
          Fusce vel commodo nisi. Nam accumsan mauris non neque tincidunt, ac laoreet ex ullamcorper. Morbi finibus nulla nec eros varius mollis. Duis at lorem vel purus sollicitudin tincidunt. Integer a consectetur tortor. Mauris et sapien a nibh finibus dapibus. Nunc id elit dictum, varius lacus nec, efficitur justo.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

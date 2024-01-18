import React, { useState, useEffect } from 'react';

const NoteSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint according to your design
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderContent = () => {
    return (
      <>
        <p className="Please-note2">Please note</p>
        {isExpanded ? (
          <>
            <p className="Please-note1">
              Once you upload your desired photos, each will undergo a brief initial
              analysis and processing by our AI algorithm to ensure optimal alignment.
              This may take a minute or two.
            </p>
            <p className="Please-note1">
              After the images are processed, you are ready to generate your images.
              Our powerful GPU will generate 10 high-resolution (2048 x 2048) images
              of your future children. This may take approximately 10 minutes.
            </p>
          </>
        ) : (
          <>
            <p className="Please-note1">
              Once you upload your desired photos, each will undergo a brief initial
              analysis and processing by our AI algorithm to ensure optimal alignment.
              This may take a minute or two.
            </p>
            {!isMobile && (
              <p className="Please-note1">
                After the images are processed, you are ready to generate your images.
                Our powerful GPU will generate 10 high-resolution (2048 x 2048) images
                of your future children. This may take approximately 10 minutes.
              </p>
            )}
          </>
        )}

        {isMobile && (
          <button onClick={toggleExpand}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="Please-note">
      {renderContent()}
    </div>
  );
};

export default NoteSection;

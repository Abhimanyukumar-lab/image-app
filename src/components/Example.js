import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Example.css'; // Import the custom CSS file

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='marquee'>नारी शक्ति हमारी गर्व है!</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>"नारी शक्ति हमारी गर्व है,</p>
                    <p>
            जगत की सृष्टि में महिलाओं का महत्व है।
            साहस, समर्पण और सामरिकता से युक्त,
            नारियों में छिपी अद्भुत शक्ति है।
            जब वो साथ देतीं, तो आसमान छू सकती हैं,
            वो शक्तिशाली हैं, नारी हैं हमारी।": <a href="https://example.com">Women Power</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <h1>Home Page</h1>
      <p>This is the content of the home page.</p> */}

    </div>
  );
};

export default HomePage;

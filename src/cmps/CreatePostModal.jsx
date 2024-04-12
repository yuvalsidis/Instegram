import React, { useState } from 'react';
import { ImgUploader } from './ImgUploader';
import { CreateModalHeader } from './CreateModalHeader';
import { CreateModalContent } from './CreateModalContent';

export function CreatePostModal({ isOpen }) {


  return (
    <div className="create-post-modal">
      <div className="create-modal-container" style={{ display: isOpen ? 'block' : 'none'}}> {/* Conditional CSS class */}
        
          <CreateModalHeader />
          <CreateModalContent /> 
         
        
        {/* <div className="modal-overlay" onClick={onClose}></div> Optional overlay */}
      </div>
    </div>
  );
}


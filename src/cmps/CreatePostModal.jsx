import React, { useState } from 'react';
import { ImgUploader } from './ImgUploader';
import { CreateModalHeader } from './CreateModalHeader';
import { CreateModalContent } from './CreateModalContent';

export function CreatePostModal({ isOpen }) {


  return (
      <div className="create-modal-container" style={{ display: isOpen ? 'block' : 'none'}}>
        
          <CreateModalHeader />
          <CreateModalContent /> 
         
      </div>
  )
}


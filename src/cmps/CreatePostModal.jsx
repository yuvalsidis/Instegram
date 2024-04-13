import React, { useState } from 'react';
import { ImgUploader } from './ImgUploader';
import { CreateModalHeader } from './CreateModalHeader';
import { CreateModalContent } from './CreateModalContent';

export function CreatePostModal() {


  return (
      <div className="create-modal-container" >
        
          <CreateModalHeader />
          <CreateModalContent /> 
         
      </div>
  )
}


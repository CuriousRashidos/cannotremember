import React, { useState } from 'react';
import './flashyflash.css'

export interface IFlashyFlashProps {
    
}

const FlashyFlash: React.FC<IFlashyFlashProps> = ({ }) => {
    const [image, setImage] = useState('')
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    
    return (
        <div className="flashCard">
            <h1> Preview Text </h1>
            <div className='flashCard__content'>
                <div className="flashCard__image">
            <p>Image</p>
                </div>
                <div className="flashCard__text">
            <p>text</p>
            </div>
            </div>
           
        </div>
    );
}

export { FlashyFlash };
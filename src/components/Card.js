import React from 'react';
import './Card.css';

const Card = ({title, content}) => {
    // const [input, setInput] = useState('');

    // const handleInput = (e) => {
    //     setInput(e.target.value);
    // }

  return (
    <div className="card">
      <h2 className='title'>{title}</h2>
        <p className='content'>{content}</p>
    </div>
  );
};

export default Card;

import React from 'react';
import './buttonRead.css';

function ButtonRead({ emailData, setEmailData }) {
  const handleClick = () => {
    const newData = emailData.map((singleEmail) => (
      {
        id: singleEmail.id,
        title: singleEmail.title,
        status: 1,
      }));
      setEmailData(newData);
  };
  return (
    <button
      onClick={handleClick}
      className="btn-component">
      <p>Marcar todas como lidas</p>
    </button>
  );
}

export default ButtonRead;
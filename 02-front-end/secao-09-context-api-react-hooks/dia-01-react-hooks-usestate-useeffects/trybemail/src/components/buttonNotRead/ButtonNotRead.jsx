import React from 'react';

function ButtonNotRead({ emailData, setEmailData }) {
  const handleClick = () => {
    const newData = emailData.map((singleEmail) => (
      {
        id: singleEmail.id,
        title: singleEmail.title,
        status: 0,
      }));
    setEmailData(newData);
  };
  return (
    <button
      onClick={handleClick}
      className="btn-component">
      <p>Marcar todas como não lidas</p>
    </button>
  );
}

export default ButtonNotRead;
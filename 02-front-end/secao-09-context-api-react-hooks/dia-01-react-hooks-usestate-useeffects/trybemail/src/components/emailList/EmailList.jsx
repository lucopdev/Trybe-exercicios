import React, { useEffect, useState } from 'react';
import emails from '../../data/emails';
import './emailList.css';
import ButtonRead from '../buttonRead/ButtonRead';
import ButtonNotRead from '../buttonNotRead/ButtonNotRead';

function EmailList() {
  const [emailData, setEmailData] = useState(emails);

  useEffect(() => {
    if (emailData.every((singleEmail) => singleEmail.status === 1)) {
      alert('Parabéns, você leu todos os seus emails!');
    }
  }, [emailData]);

  const handleClick = (target, email) => {
    if (target.innerHTML === 'Lido') {
      const targetEmail = {
        ...email,
        status: 1,
      }
      setEmailData([...emailData.filter((singleEmail) => (
        singleEmail.id !== email.id
      )), targetEmail].sort((a, b) => a.id - b.id));
    } else {
      const targetEmail = {
        ...email,
        status: 0,
      }
      setEmailData([...emailData.filter((singleEmail) => (
        singleEmail.id !== email.id
      )), targetEmail].sort((a, b) => a.id - b.id));
    }
  };
  return (
    <div className="email-board">
      <div className="board-btn-div">
        <ButtonRead emailData={emailData} setEmailData={setEmailData} />
        <ButtonNotRead emailData={emailData} setEmailData={setEmailData} />
      </div>
      <div className="delete-button">
        <button>Excluir</button>
      </div>
      {emailData.map((email, index) => (
        <div
          className="email-card"
          key={index}>
          <div className={`email-list ${email.status === 0 ? 'email-not-read' : 'email-read'}`}>
            <input type="checkbox" />
            <p className="email-title">{email.title}</p>
          </div>
          <button
            className="btn-read"
            onClick={({ target }) => handleClick(target, email)}
          >Lido</button>
          <button
            onClick={({ target }) => handleClick(target, email)}
            className="btn-delete"
          >Não lido</button>
        </div>
      ))}
    </div>
  );
}

export default EmailList;

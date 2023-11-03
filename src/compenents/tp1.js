import React, { useState } from 'react';
import './tp1.css';

export default function Tp1() {
  const [valuee, setValuee] = useState('');

  const handleButtonClick = (e) => {
    setValuee(valuee + e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div>
              <input type="text" id="display" value={valuee} />
            </div>
            <br />
            <div>
              <input type="button" value="AC" onClick={() => setValuee('')} />&nbsp;&nbsp;
              <input type="button" value="DE" onClick={() => setValuee(valuee.slice(0, -1))} />&nbsp;&nbsp;
              <input type="button" value="." onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="/" onClick={handleButtonClick} />
            </div>
            <br />
            <div>
              <input type="button" value="7" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="8" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="9" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="*" onClick={handleButtonClick} />
            </div>
            <br />
            <div>
              <input type="button" value="4" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="5" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="6" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="+" onClick={handleButtonClick} />
            </div>
            <br />
            <div>
              <input type="button" value="1" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="2" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="3" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="-" onClick={handleButtonClick} />
            </div>
            <br />
            <div>
              <input type="button" value="00" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="0" onClick={handleButtonClick} />&nbsp;&nbsp;
              <input type="button" value="=" className="equal" onClick={() => setValuee(eval(valuee))} />&nbsp;&nbsp;
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

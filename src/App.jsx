import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [frm1, setFrm1] = useState('');
  const [frm2, setFrm2] = useState('');

  const displayData = (data) => {
    if (['+', '-', '*', '/'].includes(data)) {
      setFrm1(result + data);
      setResult('');
      setFrm2('')
    } 
    else {
        setFrm2((prevFrm2) => prevFrm2 + data);      
        setResult((prevResult) => prevResult + data); 
    }
  };

  const calclear = () => {
    setFrm1('');
    setFrm2('');
    setResult('');
  };

  const calresult = () => {
    if (frm1 !== '' && result !== '') {
      try {
        const finalResult = eval(frm1 + result).toString();
        setFrm1('');
        setResult('');
        setFrm2(finalResult);
      } catch {
        setFrm2('Error ! ! !');
        setFrm1('');
        setResult('');
      }
    }
  };

  const removelast = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <>
      <div className='bg'>
        <div className="content">
          <div className="container">
            {/* display */}
            <div
              className="container p-2 w-50 rounded"
              style={{ backgroundColor: "white" }}
              id="display"
            >
              <div className="d-flex flex-column justify-content-end rounded p-4">
                <input type="text" className="form-control frm1" id="result" disabled value={frm1} />
                <input type="text" className="form-control frm2" id="result" disabled value={frm2} />
              </div>
              
            </div>
            {/* buttons */}
            <div
              className="container w-50 rounded"
              style={{ backgroundColor: "white" }}
            >
              {/* row 1 */}
              <div className="row ">
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="bracketleft" onClick={() => displayData('(')}>
                    (
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="bracketright" onClick={() => displayData(')')}>
                    )
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="clear" onClick={removelast}>
                    <i className="fa-solid fa-delete-left" />
                  </button>
                </div>
                {/* divide  */}
                <div
                  className="col-3 border p-3 rounded"
                  style={{ backgroundColor: "#f8f3fd" }}
                >
                  <button
                    className="btn btn-light buton w-100"
                    id="divide"
                    style={{ color: "#3f008f" }}
                    onClick={() => displayData('/')}
                  >
                    <i className="fa-solid fa-divide" />
                  </button>
                </div>
              </div>
              {/* row 2 */}
              <div className="row ">
                <div className="col-3 border p-3 rounded ">
                  <button className="btn btn-light buton w-100" id="seven" onClick={() => displayData('7')}>
                    7
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="eight" onClick={() => displayData('8')}>
                    8
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="nine" onClick={() => displayData('9')}>
                    9
                  </button>
                </div>
                {/* multiply */}
                <div
                  className="col-3 border p-3 rounded"
                  style={{ backgroundColor: "#f8f3fd" }}
                >
                  <button
                    className="btn btn-light buton w-100"
                    id="multi"
                    style={{ color: "#3f008f" }}
                    onClick={() => displayData('*')}
                  >
                    <i className="fa-solid fa-multiply" />
                  </button>
                </div>
              </div>
              {/* row 3 */}
              <div className="row ">
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="four" onClick={() => displayData('4')}>
                    4
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="five" onClick={() => displayData('5')}>
                    5
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="six" onClick={() => displayData('6')}>
                    6
                  </button>
                </div>
                {/* minus */}
                <div
                  className="col-3 border p-3 rounded"
                  style={{ backgroundColor: "#f8f3fd" }}
                >
                  <button
                    className="btn btn-light buton w-100"
                    id="min"
                    style={{ color: "#3f008f" }}
                    onClick={() => displayData('-')}
                  >
                    <i className="fa-solid fa-minus" />
                  </button>
                </div>
              </div>
              {/* row 4 */}
              <div className="row ">
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="one" onClick={() => displayData('1')}>
                    1
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="two" onClick={() => displayData('2')}>
                    2
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button
                    className="btn btn-light buton w-100 bold"
                    id="three"
                    onClick={() => displayData('3')}
                  >
                    3
                  </button>
                </div>
                {/* plus */}
                <div
                  className="col-3 border p-3 rounded"
                  style={{ backgroundColor: "#f8f3fd" }}
                >
                  <button
                    className="btn btn-light buton w-100"
                    id="plus"
                    style={{ color: "#3f008f" }}
                    onClick={() => displayData('+')}
                  >
                    <i className="fa-solid fa-add" />
                  </button>
                </div>
              </div>
              {/* row 5 */}
              <div className="row ">
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="zero" onClick={() => displayData('0')}>
                    0
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="dot" onClick={() => displayData('.')}>
                    .
                  </button>
                </div>
                <div className="col-3 border p-3 rounded">
                  <button className="btn btn-light buton w-100" id="ac" onClick={calclear}>
                    AC
                  </button>
                </div>
                {/* equals */}
                <div
                  className="col-3 border p-3 rounded"
                  style={{ backgroundColor: "#3f008f" }}
                >
                  <button
                    className="btn  buton w-100 text-light"
                    id="equal"
                    onClick={calresult}
                  >
                    <i className="fa-solid fa-equals" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

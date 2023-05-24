import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Component/Header';
import List from './Component/ListProject';
import Form from './Component/Form';
import React, { useState, useEffect } from 'react';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [state, setState] = useState([]);

  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [EditIndex, setEditIndex] = useState(null);

  const [action, setAction] = useState()

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setState(parsedData);
  }, []);

  function handleClickControl(status, action) {
    setAction(action)
    setIsFormVisible(!isFormVisible)
    // setEditIndex(null);    
  }
  function handleUpdate(updatedData) {
    const updatedState = [...state];
    updatedState[EditIndex] = updatedData;
    setState(updatedState);
  }
  function handleShowEditForm(index) {
    
    setIsFormVisible(true);
    setEditIndex(index);
  }

  const getIndexData = (index) => {
    setEditIndex(index);
  }
  return (
    <div className="App">
      <div className='container'>
        <NavScrollExample handleClickControl={handleClickControl} />
      </div>
      <div className="card">
        <div className='section'>
          <div >
            <List handleClickControl={handleClickControl}
              handleShowEditForm={handleShowEditForm}
              setIsEditFormVisible={() => setIsEditFormVisible(true)}
              state={state}
              handleUpdate={handleUpdate}
              setEditIndex={setEditIndex} />
          </div>
          {isFormVisible && <div className="modal-wrapper">
            <Form
              initialData={state[EditIndex]}
              handleUpdate={handleUpdate}

              handleClose={() => setIsFormVisible(false)}
              state={state}
              setState={setState} />

          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;

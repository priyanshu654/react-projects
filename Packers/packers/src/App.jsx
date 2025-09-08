import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingLists from './components/PackingLists';
import Stats from './components/Stats';

function App() {
  const [formData, setFormData] = useState([]);

  function handleDelete(id) {
    setFormData((prevData) => prevData.filter((el) => el.id !== id));
  }

  function handleToggle(id) {
    setFormData((prevData) =>
      prevData.map((el) =>
        el.id === id ? { ...el, packed: !el.packed } : el
      )
    );
  }
  function handleClear(){
    setFormData([]);
  }
  return (
    <>
      <Logo />
      <Form setData={setFormData} />
      <PackingLists  className="packing-list-css" formData={formData} handleDelete={handleDelete} handleToggle={handleToggle} toHandleClear={handleClear}/>
      <Stats formData={formData} />
    </>
  );
}

export default App;

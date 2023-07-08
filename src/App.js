import {useState} from 'react';
import './App.css';

export default function App(){
  const[listA, setListA] =useState([]);
  const[listB, setListB]= useState([]);
  const[differences, setDifferences]=useState(null);

  const handleListAChange = (event) => {
    const newListA=event.target.value.split('\n');
    setListA(newListA);
  }

  const handleListBChange = (event) => {
    const newListB = event.target.value.split('\n');
    setListB(newListB);
  };

  function computeDifferences(){

    const itemsOnlyinA=listA.filter((item) => !listB.includes(item));
    const itemsOnlyinB=listB.filter((item) => !listA.includes(item));

    const itemsinBoth= listA.filter((item) => listB.includes(item));
    const combinedItems=[...new Set([...listA,...listB])];

    const differences = {
      itemsOnlyinA,
      itemsOnlyinB,
      itemsinBoth,
      combinedItems
    };

    setDifferences(differences);
  };

  return (
    <div className='container'>
      <textarea className="textarea" placeholder="List A"value={listA.join('\n')} onChange={handleListAChange} />

      <br />
      
      

      <textarea className="textarea" placeholder='List B' value={listB.join('\n')} onChange={handleListBChange} />

      <button className="button" onClick={computeDifferences}>Compute</button>
    
      {differences && (
        <div  className="result">
          <p>Items only in A : {differences.itemsOnlyinA.join(',')}</p>
          <p>Items only in B : {differences.itemsOnlyinB.join(',')}</p>
          <p>Items in Both A and B : {differences.itemsinBoth.join(',')}</p>
          <p>Combines items of A and B :{differences.combinedItems.join(',')}</p>
        </div>
      )}
    
    </div>
  );
}
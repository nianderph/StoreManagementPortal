import './App.css';
import Table from './Table'
import React, {useState} from 'react';
import { render } from '@testing-library/react';

const storeData = [
  {
    StoreId:1,
    SKU: '12478942748',
    ProductName: 'Haldirams Namkeen',
    Price: '$200',
    Date: '12/04/2022'
  },
  {
    StoreId:1,
    SKU: '12189u910898',
    ProductName: 'Ariel',
    Price: '$500',
    Date: '13/04/2022'
  },
  {
    StoreId:2,
    SKU: '52478942748',
    ProductName: 'Millets',
    Price: '$200',
    Date: '14/04/2022'
  },
  {
    StoreId:3,
    SKU: '82478942748',
    ProductName: 'Cereals',
    Price: '$1200',
    Date: '17/04/2022'
  }
];
const state = {
  characters: [
    {
      StoreId:1,
      SKU: '12478942748',
      ProductName: 'Haldirams Namkeen',
      Price: '$200',
      Date: '12/04/2022'
    },
    {
      StoreId:1,
      SKU: '12189u910898',
      ProductName: 'Ariel',
      Price: '$500',
      Date: '13/04/2022'
    },
    {
      StoreId:2,
      SKU: '52478942748',
      ProductName: 'Millets',
      Price: '$200',
      Date: '14/04/2022'
    },
    {
      StoreId:3,
      SKU: '82478942748',
      ProductName: 'Cereals',
      Price: '$1200',
      Date: '17/04/2022'
    }
  ]
}


function App() : JSX.Element {
   //const {characters} = this.state
   const [characters, setCharaters] = useState({characters:[
    {
      StoreId:1,
      SKU: '12478942748',
      ProductName: 'Haldirams Namkeen',
      Price: '$200',
      Date: '12/04/2022'
    },
    {
      StoreId:1,
      SKU: '12189u910898',
      ProductName: 'Ariel',
      Price: '$500',
      Date: '13/04/2022'
    },
    {
      StoreId:2,
      SKU: '52478942748',
      ProductName: 'Millets',
      Price: '$200',
      Date: '14/04/2022'
    },
    {
      StoreId:3,
      SKU: '82478942748',
      ProductName: 'Cereals',
      Price: '$1200',
      Date: '17/04/2022'
    }
  ]});

    return (
      <div className="container">
      <Table characterData={state.characters} updateCharacter={(index)=>{}} />
    </div>
    )
 
}

export default App;

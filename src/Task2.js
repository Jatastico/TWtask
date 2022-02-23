/* eslint-disable */

import { useEffect,useState } from 'react';

export function Task2() {
  const [products, setProds] = useState([]);
  const [numDay, setDay] = useState(1);
    useEffect(() => {
      setProds( [
            {
                name: 'concert a',
                type: 'TICKETS',
                quality: 30,
                sellIn: 12,
            },
            {
                name: 'concert b',
                type: 'TICKETS',
                quality: 30,
                sellIn: 8,
            },
            {
                name: 'concert c',
                type: 'TICKETS',
                quality: 30,
                sellIn: 1,
            },
            {
                name: 'macbook',
                type: 'NORMAL',
                quality: 30,
                sellIn: 0,
                isSecondHand: false,
            },
            {
                name: 'monitor',
                type: 'NORMAL',
                quality: 30,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'keyboard',
                type: 'NORMAL',
                quality: 0,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
        ])
    }, []);

  const updateQuality2= () => {



      for (let i = 0; i < products.length; i++) {

        let auxSecHand= products[i].isSecondHand? 2: 1;

        if (products[i].type == "TICKETS")
        {
          if(products[i].sellIn >= 10)
          {
            products[i].quality = products[i].quality + 1;
          }
          else if(products[i].sellIn > 1)
          {
            products[i].quality = products[i].quality + 2;
          }
          else
          {
            products[i].quality = 0;
          }
        }

        if (products[i].type == "NORMAL" && products[i].quality > 0)
        {
          if(products[i].sellIn <= 0)
          {
            products[i].quality = products[i].quality - 2*auxSecHand;
          }
          else if(products[i].sellIn > 0)
          {
            products[i].quality =   products[i].quality - 1*auxSecHand;
          }
        }
    
        if (products[i].sellIn > 0) {
          products[i].sellIn = products[i].sellIn - 1;
        }
    
        if (products[i].quality <= 0) {
          products[i].quality = 0;
        }
      }
    
    setDay(numDay+1)  
    }

    return (<><button onClick={updateQuality2}>update</button>
    <div>Day: {numDay}</div>
    <ul>
      {products.map((prod, idx) => {
        return <li key={idx}><p>{prod.name} -  {prod.type} - Quality; {prod.quality} - SellIn: {prod.sellIn} - SecondHand: {prod.isSecondHand?'Yes':'No'}
        </p></li>;
      })}
    </ul>
    </>
      );
}

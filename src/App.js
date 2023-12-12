import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [d,setD] = useState(data);
  function del(){
      setD([]);
  }

  function delOnePerson(id){
    // console.log(id);
     setD(prevD => {
          return prevD.filter(item => { 
              return id !== item.id;
       })
     });
  }

  return ( 
     <main>
        <section className='container'>
            <h3>{d.length} Birthday's Today</h3>
            {d.map( person => <List id={person.id} name={person.name} age={person.age} image={person.image} d={delOnePerson}/> )}
            <button onClick={del}>Clear All</button>
        </section>
     </main>
  );
}

export default App;

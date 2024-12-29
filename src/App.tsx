import React from 'react';
import Body from './components/Body';

interface AppProps{
  //title:string;
}
const App:React.FC<AppProps>=()=>{
  return (  
     <Body/>
  );
}

export default App;

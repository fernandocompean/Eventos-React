import React, {Fragment} from 'react';
import Header from './components/Header';
import CategotiasProvider from './context/CategoriasContext';

function App() {

  return (

    <CategotiasProvider>
      <Header/>
    </CategotiasProvider>

  );
}

export default App;

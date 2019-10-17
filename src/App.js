import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategotiasProvider from './context/CategoriasContext';

function App() {

  return (

    <CategotiasProvider>
      <Header/>
      <div className="uk-container">
        <Formulario/>
      </div>
    </CategotiasProvider>

  );
}

export default App;

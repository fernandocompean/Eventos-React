import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

  token = 'QOPFZLXES25LP34MELGT';
  ordenar = 'date'

  state = {
      eventos : []
  }

  obtenerEvento = async(busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}`;

    console.log(url);
    // consultar la API con la URL
    
    const eventos = await axios(url)
  
    this.setState({
      eventos : eventos.data.events
    })

  }

  render() {
    return (
        <EventosContext.Provider
            value={{
                eventos: this.state.eventos,
                obtenerEvento: this.obtenerEvento
            }}>
            {this.props.children}
        </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
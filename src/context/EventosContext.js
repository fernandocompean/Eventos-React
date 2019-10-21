import React, { Component } from 'react';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

  token = 'QOPFZLXES25LP34MELGT';
  ordenar = 'fecha'

  state = {}

  obtenerEvento = async(busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/event/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`
  }

  render() {
    return (

    );
  }
}

export default EventosProvider;
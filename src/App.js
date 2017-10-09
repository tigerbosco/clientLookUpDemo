import React, { Component } from "react";
import SelectedClients from "./SelectedClients";
import ClientsSearch from "./ClientsSearch";

class App extends Component {
  state = {
    selectedClientsVar: [] 
  };

  removeClient = itemIndex => {
    const filteredClients = this.state.selectedClientsVar.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedClientsVar: filteredClients });
  };

  addClient = client => {
    const newClients = this.state.selectedClientsVar.concat(client);
    this.setState({ selectedClientsVar: newClients });
  };

  render() {
    const { selectedClientsVar } = this.state;

    return (
      <div className="App">
        <div className="ui text container">
          <SelectedClients
            clients={selectedClientsVar}
            onClientClick={this.removeClient}
          />
          <ClientsSearch onClientClick={this.addClient} />
        </div>
      </div>
    );
  }
}

export default App;

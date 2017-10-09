import React from "react";
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

class clientsearch extends React.Component {
  state = {
    clients: [],
    showRemoveIcon: false,
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        clients: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      Client.search(value, clientsFrmServer => {
        console.log("In Search"+clientsFrmServer);
        this.setState({
            clients: clientsFrmServer.clients.slice(0, MATCHING_ITEM_LIMIT)
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      clients: [],
      showRemoveIcon: false,
      searchValue: ""
    });
  };

  render() {
    const { showRemoveIcon, clients } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

    const clientRows = clients.map((client, idx) => (
      <tr key={idx} onClick={() => this.props.onClientClick(client)}>
        <td>{client.description}</td>
        <td className="right aligned">{client.id}</td>
        <td className="right aligned">{client.name}</td>
        <td className="right aligned">{client.address}</td>
        <td className="right aligned">{client.crimeScore}</td>
      </tr>
    ));

    return (
      <div id="client-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search Client..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="four wide">Description</th>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>CrimeScore</th>
            </tr>
          </thead>
          <tbody>
            {clientRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default clientsearch;

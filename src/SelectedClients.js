import React from "react";

export default function SelectedClients(props) {
  console.log("====>"+JSON.stringify(props));
  const  clientsFrmService  = props;
  //const clientsRow=null;
//if(clientsFrmService.clients){
  console.log("====>%%%%%%%%%%%%%%%%%"+JSON.stringify(props));
  const clientsRow = clientsFrmService.clients.map((client, idx) => (
    <tr key={idx} onClick={() => props.onClientClick(idx)}>
      <td>{client.description}</td>
      <td className="right aligned">{client.id}</td>
      <td className="right aligned">{client.name}</td>
      <td className="right aligned">{client.address}</td>
      <td className="right aligned">{client.crimeScore}</td>
    </tr>
  ));
//}

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected client(s)</h3>
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
        {clientsRow}
      </tbody>
      
    </table>
  );
}

function sum(clients, prop) {
  return clients
    .reduce((memo, client) => parseInt(client[prop], 10) + memo, 0.0)
    .toFixed(2);
}

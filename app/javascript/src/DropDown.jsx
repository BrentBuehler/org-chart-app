import React from "react";

const DropDown = ({ parent, nodes, updateNodes }) => {

  const updateParent = (nodeToUpdate, newParent, updateNodes) => {

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    fetch('/nodes/' + parent.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      },
      // Pass the new parent id as a param
      body: JSON.stringify({
        parent_id: newParent
      })
    })
      // Wait for response then call the setNodes in App component to refresh node array
      .then((resp) => resp.json())
      .then((data) => {
        updateNodes(data);
      });
  }

  return (
    <select onChange={e => updateParent(parent, parseInt(e.currentTarget.value), updateNodes)}>
      <option selected disabled>Change boss</option>
      {nodes.map(node => (
        <option
          key={node.id}
          value={node.id}
        >
          {node.first_name} {node.last_name}
        </option>
      ))}
    </select>
  )
};

export { DropDown };
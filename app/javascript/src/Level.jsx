import React from "react";
import { DropDown } from './DropDown';

const Level = ({ nodes, parent, updateNodes }) => {

  const hasChildren = ({ node, nodes }) =>
    nodes.some((item) => item.parent_id === node.id);
  const getChildren = ({ node, nodes }) =>
    nodes.filter((item) => item.parent_id === node.id);

  const name = parent.last_name ? (
    <div className="name">
      {parent.first_name} {parent.last_name}
      <DropDown parent={parent} nodes={nodes} updateNodes={updateNodes}/>
    </div>
  ) : null;

  if (!hasChildren({ nodes, node: parent })) {
    return name;
  }

  return (
    <>
      {name}
      <ul>
        {getChildren({ node: parent, nodes }).map((child) => (
          <li key={child.id}>
            <Level nodes={nodes} parent={child} updateNodes={updateNodes} />
          </li>
        ))}
      </ul>
    </>
  );
};

export { Level };
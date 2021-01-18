import React, { useEffect, useState } from "react";
import { Level } from './Level';

const App = () => {
  const [nodes, setNodes] = useState(null);
  useEffect(() => {
    fetch("/nodes", {
      method: "GET",
      headers: new window.Headers({
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNodes(data);
      });
  }, []);

  return (
    <>
      <h1>Org Chart</h1>
      {nodes ? (
        <Level nodes={nodes} parent={nodes.find((node) => node.root)} updateNodes={setNodes} />
      ) : (
        "loading..."
      )}
    </>
  );
};

export default App;

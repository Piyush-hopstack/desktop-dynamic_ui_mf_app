import React from "react";

const EventButton = ({ title, node, changeNode, validated = null }) => {
  function onClick() {
    if (validated != null) {
      validated ? changeNode(node) : alert("User field not validated");
    } else changeNode(node);
  }

  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-600 my-2 text-white px-2 py-1">
      {title}
    </button>
  );
};

export default EventButton;

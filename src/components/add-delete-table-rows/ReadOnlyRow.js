import React from "react";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

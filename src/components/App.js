import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import moment from "moment";

import { API, graphqlOperation } from "aws-amplify";
import { createNotes, deleteNotes } from "../graphql/mutations";
import { listNotess } from "../graphql/queries";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const listNotesData = await API.graphql(graphqlOperation(listNotess));
    const notes = listNotesData.data.listNotess.items;
    console.log("notes = ", notes);

    if (notes) {
      setNotes(notes);
    }
  };

  const handleNameChange = (e) => {
    if (e.target.value) {
      setName(e.target.value);
    }
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value) {
      setDescription(e.target.value);
    }
  };

  const handleSubmitClick = async (name, description) => {
    if (name && description) {
      const data = {
        input: {
          id: nanoid(),
          name: name,
          description: description,
        },
      };
      await API.graphql(graphqlOperation(createNotes, data));
      await getNotes();
    }
  };

  const handleDeleteClick = async (id) => {
    if (id) {
      const data = {
        input: {
          id: id,
        },
      };
      await API.graphql(graphqlOperation(deleteNotes, data));
      await getNotes();
    }
  };

  const renderNotesList = (notes) => {
    let notesListDiv = null;

    if (notes) {
      notesListDiv = notes.map((item, i) => {
        return (
          <div className="card my-3" key={i}>
            <div className="card-body">
              <div>Name: {item.name}</div>
              <div>Description: {item.description}</div>
              <div>
                CreatedAt:{" "}
                {moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
              </div>
              <div>
                UpdatedAt:{" "}
                {moment(item.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      });
    }

    return notesListDiv;
  };

  return (
    <div className="container p-5">
      <h3 className="">Notes taking app</h3>

      <div>
        <div className="my-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => handleNameChange(e)}
          />
        </div>

        <div className="my-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            onChange={(e) => handleDescriptionChange(e)}
          />
        </div>

        <div className="my-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSubmitClick(name, description)}
          >
            Submit
          </button>
        </div>
      </div>

      <div>{renderNotesList(notes)}</div>
    </div>
  );
}

export default App;

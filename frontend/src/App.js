import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "./redux/noteSlice";
import axios from "axios";

function App() {
  const notes = useSelector((state) => state.notes.notes);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/notes");
        console.log("Notes from server - ", res.data);
        dispatch(addNotes(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    getNotes();
  }, [dispatch, note]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/notes", { note });
      if (res.status === 200) {
        console.log("Note added in DB -", res.data);
      }
    } catch (err) {
      console.log(err);
    }
    setNote("");
  };

  console.log("note -", note);
  console.log("notes in redux -", notes);

  return (
    <div className="App">
      <div className="input-field">
        <input
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Enter your Text"
          value={note}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="content">
        {notes.map((item, index) => {
          return <p key={index}>{item.note}</p>;
        })}
      </div>
    </div>
  );
}

export default App;

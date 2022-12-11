const Note = require("../modals/Note");

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json("Something went wrong");
  }
};

const postNotes = async (req, res) => {
  const newNote = new Note({
    note: req.body.note,
  });
  try {
    await newNote.save();
    res.status(200).json("Note Added");
  } catch (err) {
    res.status(500).json("Something went wrong");
  }
};

module.exports = { getNotes, postNotes };

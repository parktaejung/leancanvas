import { FaPlus } from 'react-icons/fa';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';
function CanvasCard({ title, isSubtitle = false, notes = [], onNotesChange }) {
  const handleAddnote = () => {
    // setNotes([...notes, { id: uuidv4(), content: '' }]);\
    const newNote = {
      id: uuidv4(),
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };
  const handleRemoveNote = id => {
    //  setNotes(notes.filter(note => note.id !== id));
    onNotesChange(notes.filter(note => note.id !== id));
  };
  const handleUpdateNote = (id, content, color) => {
    onNotesChange(
      notes.map(note => (note.id === id ? { ...note, content, color } : note)),
    );
  };

  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${!isSubtitle && 'bg-gray-100 border-b border-b-gray-300'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={!isSubtitle && 'font-bold'}>{title}</h3>
        <button
          className="bg-blue-400 rounded-md p-1.5 text-white hover:bg-blue-500 transform duration-300"
          onClick={handleAddnote}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3  min-h-32 p-3  ">
        {notes.map(note => (
          <Note
            key={note.id}
            content={note.content}
            onRemoveNote={handleRemoveNote}
            id={note.id}
            color={note.color}
            onUpdatedNote={handleUpdateNote}
          />
        ))}
      </div>
    </div>
  );
}

export default CanvasCard;

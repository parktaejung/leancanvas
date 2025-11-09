import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
function Note({
  onRemoveNote,
  id,
  content,
  color: initialColor,
  onUpdatedNote,
}) {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  const [isEditing, setIsEditing] = useState(false);

  const [localContent, setLocalContent] = useState(content);
  const textAreaRef = useRef(null);

  const [color, setColor] = useState(() => {
    if (initialColor) return initialColor;
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
  });
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  }, [content]);
  const handleContentChange = () => {
    onUpdatedNote(id, localContent, color);
  };
  const handleColorChange = newColor => {
    onUpdatedNote(id, content, newColor);
    setColor(newColor);
  };
  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            onClick={e => {
              e.stopPropagation();
              setIsEditing(false);
              onUpdatedNote(id, content, color);
            }}
            className="text-gray-700"
            aria-label="Check Note"
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              onRemoveNote(id);
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        ref={textAreaRef}
        value={localContent}
        onBlur={handleContentChange}
        onChange={e => setLocalContent(e.target.value)}
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요"
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(option)}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Note;

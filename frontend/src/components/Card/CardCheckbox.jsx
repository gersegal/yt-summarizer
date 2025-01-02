import React, { useState } from "react";

const checkboxes = [
  {
    title: "Option 1",
    description: "Checkbox 1",
    id: "1",
    color: "dark" //default, dark, red, blue, yellow, indigo, purple, pink
  },
  {
    title: "Option 2",
    description: "Checkbox 2",
    id: "2",
    color: "dark" //default, dark, red, blue, yellow, indigo, purple, pink
  },
  {
    title: "Option 3",
    description: "Checkbox 3",
    id: "3",
    color: "dark" //default, dark, red, blue, yellow, indigo, purple, pink
  },
  {
    title: "Option 4",
    description: "Checkbox 4",
    id: "4",
    color: "dark" //default, dark, red, blue, yellow, indigo, purple, pink
  },
  {
    title: "Option 5",
    description: "Checkbox 5",
    id: "5",
    color: "dark" //default, dark, red, blue, yellow, indigo, purple, pink
  },
];

const CardCheckbox = () => {
  const handleRemove = (id) => {
    // Handle remove logic here
    console.log(`Removing tag with id: ${id}`);
  };

  const [checkedIds, setCheckedIds] = useState([]);

  const toggleCheck = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  return (
    <>
      {checkboxes.map((checkbox) => (
        <span key={checkbox.id} className={`cursor-pointer inline-flex items-center mt-1 px-2 py-1 me-2 text-sm font-medium text-slate-400 bg-${checkedIds.includes(checkbox.id) ? 'text-slate-400' : 'text-slate-400'} rounded dark:bg-${checkedIds.includes(checkbox.id) ? 'text-slate-400' : 'blue-900'} dark:text-slate-400 `} onClick={() => toggleCheck(checkbox.id)}>
          {checkbox.title}
          <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" onClick={() => handleRemove(checkbox.id)} aria-label="Remove">
            {checkedIds.includes(checkbox.id) ? (
              <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 7l3 3 6-6"/>
              </svg>
            ) : (
              <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      ))}
    </>
  );
};

export default CardCheckbox;

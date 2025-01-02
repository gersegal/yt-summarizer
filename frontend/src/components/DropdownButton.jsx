import React, { useState, useRef, useEffect } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tone');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div id="dropdownselect" className="py-1" role="none">
            <span onClick={() => toggleOption("Journalist")} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="journalist">Journalist</span>
            <span onClick={() => toggleOption("Storyteller")} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="storyteller">Storyteller</span>
            <span onClick={() => toggleOption("Informative")} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="informative">Informative</span>
            <span onClick={() => toggleOption("Tone: Default")} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="default">None</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

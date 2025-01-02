import React from 'react'
import { useState } from "react";
import CardCheckbox from './Card/CardCheckbox'
import CardButtons from './Card/CardButtons'
import DropdownButton from './DropdownButton';

const Normal = () => {

  const [inputs, setInputs] = useState([{ placeholder: "Add video link"}]);

  const addInput = () => {
      if (inputs.length <= 4) {
        setInputs([...inputs, { placeholder: "Add video link"}]);
      } else {
        console.log("Added max number of inputs")
      }
  };


  return (
    <>
      <form class="max-w-md mx-auto align-middle justify-center">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            {inputs.map((input) => (
              <div class="relative mb-4">
                  <input onKeyDown={addInput} type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert video link" />
              </div>
            ))}

            
            <div class="relative mb-4">
              {/* Dropdown and CTA */}
              {inputs.length > 1 &&
                <CardCheckbox />  
              }     
            </div>
              
            {/* Dropdown and CTA */}
            {inputs.length > 1 &&
              <CardButtons />
            }

            <DropdownButton />

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </form>
    </>
  )
}

export default Normal

import React from "react";
// https://www.elastic.co/
// https://github.com/elastic/elasticsearch
// https://github.com/betagouv/react-elasticsearch
// https://blog.reactivesearch.io/react-search-ui-tutorial
// https://opensource.reactivesearch.io/
// https://www.freecodecamp.org/news/building-a-github-repo-explorer-with-react-and-elasticsearch-8e1190e59c13/
const checkboxes = [
  {
    title: "Option 1",
    description: "Checkbox 1",
    id: "1",
    color: "dark" //defaukt, dark,red, blue, yellow, indigo, pruple, pink
  },
  {
    title: "Option 2",
    description: "Checkbox 2",
    id: "2",
    color: "dark" //defaukt, dark,red, blue, yellow, indigo, pruple, pink
  },
  {
    title: "Option 3",
    description: "Checkbox 3",
    id: "3",
    color: "dark" //defaukt, dark,red, blue, yellow, indigo, pruple, pink
  },
  {
    title: "Option 4",
    description: "Checkbox 4",
    id: "4",
    color: "dark" //defaukt, dark,red, blue, yellow, indigo, pruple, pink
  },
  {
    title: "Option 5",
    description: "Checkbox 5",
    id: "5",
    color: "dark" //defaukt, dark,red, blue, yellow, indigo, pruple, pink
  },
];

const CardCheckbox = () => {
  return (
    <>
      {checkboxes.map((checkbox) => (
        <>
          {/* Checkbox */}
        {/*
          <div class="flex px-5 pb-5">
            <div class="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ms-2 text-sm">
              <label
                for="helper-checkbox"
                class="font-medium text-gray-900 dark:text-gray-300"
              >
                {checkbox.title}
              </label>
              <p
                id="helper-checkbox-text"
                class="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                {checkbox.description}
              </p>
            </div>
          </div>
          */}


          <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
            {checkbox.title}
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Remove badge</span>
            </button>
          </span>


        </>
      ))}
    </>
  );
};

export default CardCheckbox;

import React from "react";
import { useState } from "react";
import CardOutput from "./CardOutput";
import CardCheckbox from "./CardCheckbox";
import CardButtons from "./CardButtons";
import CardTitle from "./CardTitle";
import CardPrompt from "./CardPrompt";

const Cards = () => {
  return (
    <>
      {/* Header text*/}
      <CardTitle />

      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-yellow-100 dark:bg-yellow-100dark:border-gray-600">
        <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            Enter video link
          </div>
        </div>
        <div class="px-4 py-2 bg-yellow-100 rounded-b-lg dark:bg-yellow-100">
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-5">
              <li>
                <input placeholder="Insert link here" type="test" id="ytLink" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </li>
          </ul>
          <CardCheckbox />
        </div>
      </div>
      

      <form>
        <CardOutput />

        {/* This is where the marquee goes */}

        {/* Dropdown and CTA */}
        <CardButtons />
      </form>
    </>
  );
};

export default Cards;

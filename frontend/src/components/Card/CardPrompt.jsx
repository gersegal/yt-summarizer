import React from 'react'
import { useState } from 'react';

const CardOutput = () => {


  return (
    <>
        {/* Output Textarea */}
        <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-yellow-100 dark:bg-yellow-100dark:border-gray-600">
                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        Enter prompt
                    </div>
                </div>
                <div class="px-4 py-2 bg-yellow-100 rounded-b-lg dark:bg-yellow-100">
                    <label for="editor" class="sr-only">Publish post</label>
                    <textarea id="editor" rows="4" class="block w-full px-0 text-sm text-gray-800 bg-yellow-100 border-0 dark:bg-yellow-100 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Enter prompt" required ></textarea>
                </div>
            </div>
            <div class="px-5 pb-5">
                <div class="flex items-center justify-between">
                    <button onClick={handlePrompt} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
                </div>
            </div> 
        </form>
    </>
  )
}

export default CardOutput

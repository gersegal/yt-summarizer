import React from 'react'

const CardOutput = () => {
  return (
    <>
    {/* Output Textarea */}
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-yellow-100 dark:bg-yellow-100dark:border-gray-600">
        <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg>
                        <span class="sr-only">Download</span>
                    </button>
                    This is were the user sees their prompt result and edits their summary if needed 
                </div>
                
            </div>
        </div>
        <div class="px-4 py-2 bg-yellow-100 rounded-b-lg dark:bg-yellow-100">
            <label for="editor" class="sr-only">Publish post</label>
            <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-yellow-100 border-0 dark:bg-yellow-100 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="OUTPUT" required ></textarea>
        </div>
    </div>
    </>
  )
}

export default CardOutput

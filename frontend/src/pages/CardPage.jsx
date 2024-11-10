import React from 'react'
import Card from '../components/Card/Card'

const CardPage = () => {
  return (
  <>
<div class="bg-sky-100 w-screen pt-5 pb-5 flex justify-center items-center"> 
  <div class="bg-white rounded-xl border w-3/4 sm:w-3/4 ">
    <div class="w-full max-w-full bg-yellow-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block ">
      <Card />
    </div>
  </div>
</div>
  </>
  )
}

export default CardPage

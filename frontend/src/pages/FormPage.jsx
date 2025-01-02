import { useState } from "react";
import axios from "axios";
import { FormInput } from "../components/FormInput";
import { FormOutput } from "../components/FormOutput";
//https://www.davidhu.io/react-spinners/ ||| https://www.davidhu.io/react-spinners/storybook/?path=/docs/pacmanloader--docs//

const About = () => {
  const [isLoading, setLoading] = useState(false);
  const [output, setOutput] = useState();
  return (
<div class="flex h-screen bg-gray-900">
  <div class="m-auto px-6">
    <h1 class="text-slate-50 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
    <p class="text-center mb-6 text-lg font-normal text-slate-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    <FormInput setOutput={setOutput} setLoading={setLoading} />
    <FormOutput output={output} isLoading={isLoading} />
  </div>
</div>
  )
};

export default About;

import axios from "axios";

export const FormInput = ({ setOutput, setLoading }) => {
  const handleSubmit = () => {
    const parsedUrl = new URL(document.getElementById("grid-password").value);
    const videoId = parsedUrl.searchParams.get("v");
    setLoading(true);
    axios
      .get(`http://0.0.0.0:8000/summary?video_url=${videoId}`)
      .then((response) => {
        setLoading(false);
        setOutput(response.data.content); // Assuming the API returns a summary
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching the summary:", error);
        setOutput("Error fetching the summary. Please try again.");
      });
  };
  return (
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Youtube Video Link
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder=""
          />
          <p class="text-gray-600 text-xs italic">Validation field</p>
        </div>
      </div>
      <div class="flex items-center justify-between mb-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => handleSubmit()}
        >
          Submit link
        </button>
      </div>
    </form>
  );
};

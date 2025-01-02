import LoadingScreen from "./LoadingScreen";

export const FormOutput = ({ isLoading, output }) => {
  return (
    <div class="rg:pr-4">
      <div class="rg:max-w-rg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">

            {isLoading ? (
              <>
                <LoadingScreen size="25" color="#ffffff" />
              </>
            ) : (
              <p></p>
            )}

            {output ? (
              <>
            <label
              class="block uppercase tracking-wide text-stone-50 text-xs font-bold mb-2"
              for="grid-password"
            >
              Video Summary
            </label>
                <textarea
                id="output"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="textarea"
                placeholder=""
                rows="14"
                readOnly
              >
                {output}
              </textarea>
              </>
            ) : (
              <p></p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

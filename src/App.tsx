import { useEffect, useState } from "react";

const App = () => {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>();

  useEffect(() => {
    inputRef?.focus();

    setTimeout(() => {
      inputRef?.focus();
    }, 3_000);
  }, [inputRef]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl">Focus Thief</h1>
        <div className="mt-4">
          I’m stealing the focus on mount. Did you notice?
          <br />
          <input
            ref={setInputRef}
            className="mt-4 rounded-md border bg-transparent px-2 py-1 outline-white outline-offset-2 focus:outline-dashed"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

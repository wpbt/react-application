import { FormEvent, useRef, useState } from "react";
import LinkInfo from "./LinkInfo";

export default function MyForm() {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({ text: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (textInputRef.current?.value) {
      console.log("submitting the form ...");
      data.text = textInputRef.current.value;
      setData({ text: textInputRef.current.value });
    } else {
      setData({ text: "" });
      console.log("input is empty");
    }
  };
  return (
    <>
      <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
        Working with form
      </h2>
      <div className="mb-3 px-2">
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <label
                className="font-semibold text-sm cursor-pointer"
                htmlFor="text-input"
              >
                Text Input
              </label>
            </p>
            <p>
              <input
                className="border border-black py-1 px-2 mt-2 mb-3 rounded"
                id="text-input"
                type="text"
                name="text-input"
                ref={textInputRef}
              />
            </p>
          </div>

          <button
            className="bg-blue-300 rounded-lg px-3 py-2"
            type="submit"
            // disabled={data.text ? false : true}
          >
            Submit
          </button>
        </form>
        <div className="mb-3">
          {data.text && (
            <div className="my-3">
              <p className="font-semibold text-sm">
                Submitted value: {data.text}
              </p>
            </div>
          )}
        </div>
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1">
            Note: you can use form library like 'React Hook Form' to simplify
            the form building in your application.
          </p>
          <LinkInfo
            url="https://www.react-hook-form.com"
            content="React Hook Form"
          />

          <p className="font-semibold text-sm mt-3">
            Use Zod or any other validation library.
          </p>

          <LinkInfo url="https://zod.dev" content="Zod" />
        </div>
      </div>
    </>
  );
}

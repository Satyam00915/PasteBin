"use client";
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

const IDE = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("Title");

  const [showInput, setShowInput] = useState(false);
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      inputref.current?.focus();
    }
  }, [showInput]);
  return (
    <div>
      <h1
        className={`text-5xl font-bold cursor-pointer ${showInput && "hidden"}`}
        onClick={() => {
          setShowInput((c) => !c);
        }}
      >
        {title}
      </h1>
      <input
        ref={inputref}
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        className={`${!showInput && "hidden"} text-5xl max-w-fit`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setShowInput(false);
          }
        }}
      />

      <button
        onClick={async () => {
          await navigator.clipboard.writeText(content);
        }}
        className="border border-white p-1 rounded-lg cursor-pointer mb-2"
      >
        Copy
      </button>
      <select
        name="Select language"
        onChange={(e) => setLanguage(e.target.value)}
        defaultValue={language}
      >
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">Javascript</option>
        <option value="cpp">C++</option>
        <option value="typescript">Typescript</option>
      </select>
      <Editor
        language={language}
        theme="vs-dark"
        height={"50vh"}
        onChange={(value) => setContent(value || "")}
        options={{
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          fontFamily: "var(--font-source-code), monospace",
        }}
      />
    </div>
  );
};

export default IDE;

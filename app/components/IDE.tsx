"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";

const IDE = () => {
  const [Code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  return (
    <div>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(Code);
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
        onChange={(value) => setCode(value || "")}
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

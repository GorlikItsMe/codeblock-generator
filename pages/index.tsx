/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";
import Head from "next/head";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import TopBar from "../components/TopBar";
import { codeblocks, themes } from "../components/data";
import domtoimage from "dom-to-image";

const sample = codeblocks;

export default function Home() {
  const [selectedTheme, changeTheme] = useState(dracula);
  const [selectedName, changeName] = useState("dracula");
  const [language, changeLanguage] = useState("tsx");
  const [languageDemo, changeDemo] = useState(codeblocks["tsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const myRef = useRef<HTMLDivElement | null>(null);
  const [ssUrl, setSSUrl] = useState<string | null>(null);

  function saveImage() {
    if (myRef.current == null) return;
    domtoimage
      .toJpeg(myRef.current)
      .then((dataUrl) => {
        setSSUrl(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <>
      <Head>
        <title>Create CodeBlock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <TopBar
          select={{
            value: selectedName,
            onChange: (e) => {
              const theme = require(`react-code-blocks`)[e.target.value];
              changeTheme(theme);
              return changeName(e.target.value);
            },
            options: Object.keys(themes).map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            )),
          }}
          language={{
            value: language,
            onChange: (e) => {
              // @ts-ignore: e.target.value have correct type
              changeDemo(sample[e.target.value]);
              return changeLanguage(e.target.value);
            },
            options: Object.keys(sample).map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            )),
          }}
          toggle={{
            checked: lineNumbers,
            onChange: (e) => toggleLineNumbers(!lineNumbers),
          }}
          saveImage={saveImage}
        />
        <div className="demo">
          <div ref={myRef} id="codeblock">
            <CodeBlock
              language={language}
              text={languageDemo}
              showLineNumbers={lineNumbers}
              theme={selectedTheme}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <textarea
            value={languageDemo}
            onChange={(e) => changeDemo(e.target.value)}
            style={{
              width: "100%",
              backgroundColor: "#bbb",
            }}
          />
          <div>{ssUrl && <img src={ssUrl} alt="preview" />}</div>
        </div>
      </div>
    </>
  );
}

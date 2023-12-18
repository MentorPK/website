import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { useEffect, useState } from 'react';
import 'highlight.js/styles/monokai.css';

hljs.registerLanguage('typescript', typescript);

type Highlighter = {
  language: 'ts';
  children: React.ReactNode;
};

export const useLoaded = () => {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return loaded;
};

const Highlighter = ({ language, children }: Highlighter) => {
  const value = hljs.highlight('tsx', children.toString(), { language }).value;

  return (
    <div className="border-2 p-4 rounded-lg">
      <pre
        className="hljs language-{language}"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
};
export default Highlighter;

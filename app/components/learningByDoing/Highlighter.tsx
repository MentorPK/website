import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { useEffect, useState } from 'react';

type Highlighter = {
  children: React.ReactNode;
};

const Highlighter = ({ children }: Highlighter) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/material-dark').then(
      (mod) => setStyle(mod.default)
    );
  });
  return (
    <div className="border-2 p-4 rounded-lg">
      <SyntaxHighlighter language="javascript" style={style}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
export default Highlighter;

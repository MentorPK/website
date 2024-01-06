import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { useEffect, useState } from 'react';

type Highlighter = {
  children: string;
};

const Highlighter = ({ children }: Highlighter) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/a11y-dark').then(
      (mod) => setStyle(mod.default)
    );
  });
  return (
    <div className="p-2">
      <SyntaxHighlighter language="javascript" style={style}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
export default Highlighter;

import { useState } from 'react';
import Button from '../Button';
import Highlighter from './Highlighter';

type HighlighterTabs = {
  tabs: string[];
  names: string[];
};

const HighlighterTabs = ({ tabs, names }: HighlighterTabs) => {
  const [activeTab, setActiveTab] = useState(0);
  if (tabs.length !== names.length) {
    console.error("ERROR: Tabs and names don't have the same length.");
    return <div>ERROR: Tabs and names don't have the same length.</div>;
  }
  return (
    <>
      <div className="flex gap-2">
        {names.map((item, idx) => (
          <div key={idx}>
            <Button type="button" onClick={() => setActiveTab(idx)}>
              {item}
            </Button>
          </div>
        ))}
      </div>
      <Highlighter>{tabs[activeTab]}</Highlighter>
    </>
  );
};

export default HighlighterTabs;

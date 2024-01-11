import { useState } from 'react';
import Highlighter from './Highlighter';
import WarningBox from '../WarningBox';

type Tabs = {
  names: string[];
  onClick: (idx: number) => void;
  activeTab: number;
};
const Tabs = ({ names, onClick, activeTab }: Tabs) => {
  return (
    <div className="mb-[-8px] w-[400px]">
      <div className="flex gap-1 justify-center">
        {names.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={`px-2 py-2 rounded-tl-lg rounded-tr-lg font-semibold border-2 border-b-0 w-max transitio-all duration-200 ease-in-out ${
              activeTab === idx
                ? 'bg-primary text-secondary'
                : 'hover:bg-primary focus:bg-primary hover:text-secondary  bg-secondary'
            }   border-primary`}
            onClick={() => onClick(idx)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-primary min-h-[2px]" />
    </div>
  );
};

type HighlighterTabs = {
  tabs: string[];
  names: string[];
};

const HighlighterTabs = ({ tabs, names }: HighlighterTabs) => {
  const [activeTab, setActiveTab] = useState(0);

  if (tabs.length !== names.length) {
    console.error("ERROR: Tabs and names don't have the same length.");
    return (
      <WarningBox text={"ERROR: Tabs and names don't have the same length."} />
    );
  }
  return (
    <>
      <Tabs names={names} onClick={setActiveTab} activeTab={activeTab} />
      <Highlighter>{tabs[activeTab]}</Highlighter>
    </>
  );
};

export default HighlighterTabs;

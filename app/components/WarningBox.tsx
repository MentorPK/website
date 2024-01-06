import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WarningBox {
  text: string;
}
const WarningBox = ({ text }: WarningBox) => {
  return (
    <div className="border-2 border-primary rounded-lg p-4 flex flex-row">
      <FontAwesomeIcon
        icon={faCircleInfo}
        className="w-6 h-6 mr-4 text-primary"
      />
      {text}
    </div>
  );
};

export default WarningBox;

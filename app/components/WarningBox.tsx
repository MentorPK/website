import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WarningBox {
  text: string;
}
const WarningBox = ({ text }: WarningBox) => {
  <div className="border-2 border-primary rounded-lg p-4 flex flex-row">
    <FontAwesomeIcon
      icon={faCircleInfo}
      className="w-6 h-6 mr-4 text-primary"
    />{' '}
    Vacation: 11.08.2023 - 20.08.2023
  </div>;
};

export default WarningBox;

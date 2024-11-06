
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {

  const { toggleDarkMode, isDarkModeEnabled } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}              
      className={`${isDarkModeEnabled ? 'bg-blue-600' : 'bg-gray-800'} rounded-full p-2 text-white`}
    >
      {isDarkModeEnabled ? 'Dark' : 'Light'}
    </button>
  );
};

export default DarkModeToggle;  

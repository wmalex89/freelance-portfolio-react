import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import sun from "./sun.svg";
import moon from "./Moon.svg";
import "./btnDarkMode.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  
  useEffect(() => {
    //3. Если меняются системные настройки, меняем тему
    window
        .matchMedia("(prefers-color-scheme: dark")
        .addEventListener("change", (event) => {
            const newColorsScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorsScheme);
        });
    }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
      <img className="dark-mode-btn__icon" src={moon} alt="Dark mode" />
    </button>
  );
};

export default BtnDarkMode;

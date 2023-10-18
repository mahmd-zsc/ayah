import React from "react";
import { Provider, useSelector } from "react-redux";
import EN from "./en/en"; // Import other language components as needed

function App() {
  const language = useSelector((state) => state.settings.language);

  return (
    <div>
      {language === "en" && <EN />}
      {language === "ar" && <EN />}
    </div>
  );
}

export default App;

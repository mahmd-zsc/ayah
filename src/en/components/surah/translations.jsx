import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "./../../../redux/translations/translationsAction";

function Translations({ index }) {
  let translations = useSelector((state) => state.translations);

  const renderTranslation = () => {
    if (translations.loading) {
      return null;
    }

    const translationText = translations.data.translations[index].text;

    return <div dangerouslySetInnerHTML={{ __html: translationText }} />;
  };

  return <div>{renderTranslation()}</div>;
}

export default Translations;

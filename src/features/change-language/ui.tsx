import { languageList } from 'entities/language/model';
import { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.sass';

export const LanguageSelect: FC = () => {
  const { t, i18n } = useTranslation();
  const currLang = i18n.language.slice(0, 2);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.language_select_container}>
      <label className={styles.language_select_label}>
        {t('change_language')}:
      </label>
      <select
        className={styles.language_select_select}
        value={currLang}
        onChange={handleChange}
      >
        {languageList.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

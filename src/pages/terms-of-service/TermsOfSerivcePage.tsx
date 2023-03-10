import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/ui/Title';

const TermsOfSerivcePage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Title level={2}>{t('footer.about')}</Title>
      <div>
        <p>{t('lorem-ipsum.part1')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
      </div>
    </div>
  );
};

export default TermsOfSerivcePage;

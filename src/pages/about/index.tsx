import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from 'shared/ui/components/Heading';

const AboutPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Heading level={2}>{t('footer.about')}</Heading>
      <div>
        <p>{t('lorem-ipsum.part1')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
        <p>{t('lorem-ipsum.part2')}</p>
      </div>
    </div>
  );
};

export default AboutPage;

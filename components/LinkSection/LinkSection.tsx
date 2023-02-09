import List from '../List';

import styles from './LinkSection.module.scss';

export type LinkSectionProps = {
  title: string;
  linkList: Array<{ text: string; value: string }>;
};

export function LinkSection({ title, linkList }: LinkSectionProps) {
  const linkItems = linkList.map((link) => ({
    ...link,
    hasIcon: true,
  }));

  return (
    <div className={styles.linkSection}>
      <h2>{title}</h2>
      <List listItems={linkItems} />
    </div>
  );
}

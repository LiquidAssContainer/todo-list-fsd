import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import cn from 'classnames';

import styles from './styles.module.sass';

interface ExpandableRowProps extends PropsWithChildren {
  hasContent?: boolean;
}

type ExpandableRowComponent = FC<ExpandableRowProps> & {
  Summary: typeof Summary;
  Content: typeof Content;
};

interface ExpandableRowContext {
  hasContent?: boolean;
  isExpanded?: boolean;
  setIsExpanded?: any;
}

export const ExpandableRowContext = createContext<ExpandableRowContext>({});

const ExpandableRow: ExpandableRowComponent = ({
  children,
  hasContent = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const context = { hasContent, isExpanded, setIsExpanded };

  return (
    <ExpandableRowContext.Provider value={context}>
      <div className={styles.expandable_row}>{children}</div>
    </ExpandableRowContext.Provider>
  );
};

const Summary: FC<PropsWithChildren> = ({ children }) => {
  const { hasContent, isExpanded, setIsExpanded } =
    useContext(ExpandableRowContext);

  const handleClick = (): void => {
    if (hasContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={styles.summary}>
      <div
        className={cn(styles.summary_content, {
          [styles.has_content]: hasContent,
        })}
        role="button"
        aria-label="Раскрыть описание"
        onClick={handleClick}
      >
        {children}
      </div>
    </div>
  );
};

const Content: FC<PropsWithChildren> = ({ children }) => {
  const { isExpanded } = useContext(ExpandableRowContext);

  return isExpanded ? <div className={styles.content}>{children}</div> : null;
};

ExpandableRow.Summary = Summary;
ExpandableRow.Content = Content;

export { ExpandableRow };

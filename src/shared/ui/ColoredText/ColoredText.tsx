import { FC, PropsWithChildren } from 'react';

interface ColoredTextProps extends PropsWithChildren {
  color: string;
}

export const ColoredText: FC<ColoredTextProps> = ({ children, color }) => (
  <span style={{ color: color }}>{children}</span>
);

type unionTypeColor = 'bg-blue-500' | 'bg-orange-200' | 'bg-lime-200';

type BotoTailwindT = {
  background: unionTypeColor;
  color: string;
  fontSize: string;
  tupleTypePadding: [string, string];
  disabled?: boolean;
  handleClick: (id: string) => void;
  children: React.ReactNode;
};

type BotoCSST = {
  styles: React.CSSProperties;
  borderRadius: { [key: string]: number };
  /*borderRadius: Record<string, number>;*/
  disabled?: boolean;
  handleClick: (id: string) => void;
  children: React.ReactNode;
};

/* export function Boto1({ background, color, fontSize, disabled }: ButtonProps) {
  return (
    <button
      className={`self-center bg-${background} text-[${fontSize}px] text-${color} rounded px-4 py-2`}
      disabled={disabled}>
      Click me
    </button>
  );
} */

const BotoTailwind: React.FC<BotoTailwindT> = ({
  background,
  color,
  fontSize,
  tupleTypePadding,
  disabled,
  handleClick,
  children,
}): JSX.Element => (
  <button
    id='blau'
    className={`self-center ${background} ${fontSize} ${color} ${tupleTypePadding[0]} ${tupleTypePadding[1]} rounded-xl`}
    disabled={disabled}
    onClick={(e) => handleClick(e.currentTarget.id)}>
    {children}
  </button>
);

export { BotoTailwind };

const BotoCSS: React.FC<BotoCSST> = ({
  styles,
  borderRadius,
  disabled,
  handleClick,
  children,
}) => (
  <button
    id='vermell'
    style={{ ...styles, ...borderRadius }}
    disabled={disabled}
    onClick={(e) => handleClick(e.currentTarget.id)}>
    {children}
  </button>
);

export { BotoCSS };

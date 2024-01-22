type Color = 'bg-blue-500' | 'bg-orange-200' | 'bg-lime-200';

type BotoTailwindT = {
  background: Color;
  color: string;
  fontSize: string;
  padding: [string, string];
  disabled?: boolean;
};

type BotoCSST = {
  styles: React.CSSProperties;
  borderRadius: { [key: string]: number };
  /*borderRadius: Record<string, number>;*/
  disabled?: boolean;
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
  padding,
  disabled,
}) => (
  <button
    className={`self-center ${background} ${fontSize} ${color} ${padding[0]} ${padding[1]}`}
    disabled={disabled}>
    Click me
  </button>
);

export { BotoTailwind };

const BotoCSS: React.FC<BotoCSST> = ({ styles, borderRadius, disabled }) => (
  <button style={{ ...styles , ...borderRadius }} disabled={disabled}>
    Click me
  </button>
);

export { BotoCSS };

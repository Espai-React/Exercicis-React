type unionTypeColor = 'bg-blue-500' | 'bg-orange-200' | 'bg-lime-400';

/* ComponentProps => tots els atributs segons element HMTL. No cal 'disabled' ni 'children' 
    Opcions amb React.ComponentPropsWithoutRef<'button'>
    Opcions amb React.ComponentPropsWithRef<'button'>
*/
type TBotoTailwind = React.ComponentProps<'button'> & {
  background: unionTypeColor;
  color: string;
  fontSize: string;
  tupleTypePadding: [string, string];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

/* CSSProperties => totes les propietats CSS en general */
type TBotoCSS = {
  styles: React.CSSProperties;
  borderRadius: { [key: string]: number };
  /*borderRadius: Record<string, number>;*/
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

type TBotoRest = React.ComponentPropsWithoutRef<'button'> & {
    className: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
  };

const BotoTailwind: React.FC<TBotoTailwind> = ({
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
    onClick={handleClick}>
    {children}
  </button>
);

export { BotoTailwind };

const BotoCSS: React.FC<TBotoCSS> = ({
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
    onClick={handleClick}>
    {children}
  </button>
);

export { BotoCSS };
  
/* ...rest no agafa ni funcions ni el children */
const BotoRest: React.FC<TBotoRest> = ({ children, handleClick, ...rest }) => (
  <button
    id='verd'
    onClick={handleClick}
    {...rest}>
    {children}
  </button>
);

export { BotoRest };

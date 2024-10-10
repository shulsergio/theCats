import css from "./Button.module.css";

interface ButtonInit {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
}


const Button : React.FC<ButtonInit> =({ onClick = undefined, type, text='OK' })=> {
  return (
    <>
      <button onClick={onClick} type={type} className={css.allButtons}>
        {text}
      </button>
    </>
  );
}
export default Button;
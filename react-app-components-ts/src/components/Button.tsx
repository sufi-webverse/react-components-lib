const Button = ({ text, onClick, disabled = false }: any) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;

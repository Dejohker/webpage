const Button = ({ text, type = "submit" }) => {
  return (
    <div className="button-row">
      <button type={type}>{text}</button>
    </div>
  );
};

export default Button;

import "./Button.scss";

const Button = (props) => {
  const { text, type } = props;
  return <button className={`btn btn-primary ${type}-btn`}>{text}</button>;
};

export default Button;

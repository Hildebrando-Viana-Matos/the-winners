import "./styles.scss";

type ButtonProps = {
  text: string;
  router?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button type="button" className="mainButton">
      <span>{props.text}</span>
    </button>
  );
}

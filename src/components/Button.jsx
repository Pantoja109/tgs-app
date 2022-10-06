export function Button({ children, version, type }) {
  return (
    <button type={type} className={version}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "btn-primary",
  type: "button",
};

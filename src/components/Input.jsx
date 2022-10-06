export function Input({ placeholder, version, type }) {
  return <input type={type} className={version} placeholder={placeholder} />;
}

Input.defaultProps = {
  version: "ipt-text",
  type: "text",
};

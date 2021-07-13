import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </div>
  );
};

export default Header;

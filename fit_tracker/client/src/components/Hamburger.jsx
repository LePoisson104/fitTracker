const Hamburger = ({ onClick }) => {
  return (
    <button className="hamburger-container" type="button" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default Hamburger;

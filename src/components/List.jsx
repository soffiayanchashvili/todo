import "./style.css";
import deletecan from "./../Vector.png";


function List() {
  return (
    <div className="todo">
      <input
        type="checkbox"
        className="checkbox"
      />
      <div className="list">
        <ul>
          <li>list</li>
        </ul>
        <p className="category">kategoria</p>
      </div>
      <img
        src={deletecan}
        alt="deletecan romelic hoverze unda gamochndes"
        height="16px"
      />
    </div>
  );
}

export default List;

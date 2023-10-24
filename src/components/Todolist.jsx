import List from "./List";
import "./style.css";

function Todolist() {
  return (
    <div className="todolist">
      <header>
        <nav>
          <ul className="categoris">
            <li>All</li>
            <li>Groceries</li>
            <li>College</li>
            <li>Payments</li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>All Tasks</h1>
        <div className="addDiv">
          <input
            type="text"
            className="addTodo"
            placeholder="Add a new task insdie ‘All’ category"
          />
          <button 
            className="addOnList" 
            // onClick={addNewTodo}
          >
            add
          </button>
        </div>
        <List />
      </section>
    </div>
  );
}

export default Todolist;

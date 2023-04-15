import logo from './logo.svg';

import listSvg from './assets/img/list.svg'

function App() {
  return (
    <div className="todo">
      <div className="todo_sidebar">
          <ul className="todo_list">
              <li className="active">
                  <i>
                      <img src={listSvg} alt="list icon"/>
                  </i>
                  <span>All tasks</span>
              </li>
          </ul>
      </div>
        <div className="todo_tasks"></div>
    </div>
  );
}

export default App;

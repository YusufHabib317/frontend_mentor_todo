import "./todo.css";
import dark from "../../assets/icon-moon.svg";
import light from "../../assets/icon-sun.svg";
import check from "../../assets/icon-check.svg";
import coss from "../../assets/icon-cross.svg";
import { useState } from "react";
import shortid from "shortid";

const TodoApp = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(darkTheme);

  const [showCross, setShowCross] = useState(false);

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({
      id: shortid.generate(),
      text,
      complete: false,
    });
    setText("");
  };

  const handleClick = (id) => {
    const newTodos = todos.filter((ele) => ele.id !== id);
    setTodos(newTodos);
  };

  let [todos, setTodos] = useState([]);
  const [todotoShow, setTodotoShow] = useState("all");

  const updateTodosToShow = (type) => {
    setTodotoShow(type);
  };

  if (todotoShow === "active") {
    todos = todos.filter((ele) => !ele.complete);
  } else if (todotoShow === "complete") {
    todos = todos.filter((ele) => ele.complete);
  }

  const handleShowCross = (id) => {
    const show = todos.map((todo) => {
      if (todo.id === id) {
        return setShowCross(true);
      } else {
        return;
      }
    });
    return show;
  };
  const handleUnShowCross = (id) => {
    const show = todos.map((todo) => {
      if (todo.id === id) {
        return setShowCross(false);
      } else {
        return;
      }
    });
    return show;
  };

  const toggleComplete = (id) => {
    const toggle = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });
    setTodos(toggle);
  };

  const removeComplete = () => {
    setTodos(todos.filter((ele) => !ele.complete));
  };

  let items = todos.filter((ele) => !ele.complete).length;

  return (
    <div className={`bg-skin-app ${darkTheme ? "theme-dark" : ""}`}>
      <div
        className={`reative w-full h-screen  bg-no-repeat bg-top flex justify-center items-center
        ${darkTheme ? "bg-dark" : "bg-light"}
        `}
      >
        <div className="min-w-[28rem] mx-auto relative">
          {/* head */}

          <div className="absolute top-[-18rem] left-0 w-full  flex flex-row justify-between items-center ">
            <h2 className="tracking-widest text-[2.5rem] text-white">TODO</h2>
            <img
              src={darkTheme ? light : dark}
              alt="img"
              onClick={() => setDarkTheme(!darkTheme)}
              className="cursor-pointer"
            />
          </div>

          {/* form  */}

          <form
            className="w-full flex flex-row justify-between items-center bg-skin-todo rounded-lg mt-5  p-5 space-x-3 text-skin-textTodo 
            absolute top-[-13rem] left-0
            "
            onSubmit={handleAddTodo}
          >
            <div className="w-6 h-6 rounded-full border-[1px] border-gray-400 " />
            <input
              type="text"
              className="basis[95%] w-full input-todo bg-transparent"
              placeholder="Create a new todo"
              onChange={handleChange}
              value={text}
            />
          </form>
          <div className="absolute w-full h-auto mt-5 top-[-8rem] left-0 shadow-lg ">
            <div className="w-full flex flex-col justify-center items-cente mt-5 bg-skin-todo  rounded-t-lg">
              {todos.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full flex justify-between items-center relative px-5 py-4 leading-6"
                    onMouseEnter={() => handleShowCross(item.id)}
                    onMouseLeave={() => handleUnShowCross(item.id)}
                  >
                    <div className="flex justify-center items-center space-x-3">
                      <div
                        className={`h-5 w-5 rounded-full border ${
                          darkTheme ? "border-[#383b4e] " : ""
                        }
                        hover:bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center`}
                      >
                        <div
                          className={` rounded-full  w-[1rem] h-[1rem] bg-skin-todo  flex justify-center items-center ${
                            item.complete
                              ? "bg-gradient-to-r from-green-400 to-blue-500 "
                              : ""
                          }`}
                        >
                          <img
                            src={item.complete ? check : null}
                            className=""
                          />
                        </div>
                      </div>
                      <p
                        className="text-skin-textTodo font-[700] text-[1rem] select-none cursor-pointer"
                        style={{
                          textDecoration: item.complete
                            ? "line-through"
                            : "none",
                        }}
                        onClick={() => toggleComplete(item.id)}
                      >
                        {item.text}
                      </p>
                    </div>
                    {showCross && (
                      <img
                        src={coss}
                        alt="cross"
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => handleClick(item.id)}
                      />
                    )}
                    <div
                      className={`absolute w-full h-[0.5px] bottom-[-5px] left-0 ${
                        darkTheme ? "bg-[#383b4e]" : "bg-gray-200 "
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className="flex flex-row justify-between items-center bg-skin-todo font-[400]
            text-[0.75rem] p-5 text-skin-textTodo rounded-b-lg
            "
            >
              <div> {items} items left</div>
              <div className="flex justify-center items-center space-x-2">
                <p
                  className="text-skin-textActive cursor-pointer hover:text-skin-textActivehover"
                  onClick={() => updateTodosToShow("all")}
                >
                  All
                </p>
                <p
                  className="cursor-pointer hover:text-skin-texthover"
                  onClick={() => updateTodosToShow("active")}
                >
                  Active
                </p>
                <p
                  className="cursor-pointer hover:text-skin-texthover"
                  onClick={() => updateTodosToShow("complete")}
                >
                  Complete
                </p>
              </div>
              <div
                className="cursor-pointer hover:text-skin-texthover"
                onClick={removeComplete}
              >
                Clear Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

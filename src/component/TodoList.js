import { useState } from "react";

function TodoList() {
    // 작성한 todoList를 기억할 List 상태 -> 배열
    const [todoList, setTodoList] = useState([]); // { title : inputValue, isDone : false }
    const [inputValue, setInputValue] = useState("");

    // Add Todo 버튼 클릭 시 todoList 상태에 업데이트
    const addTodo = () => {
        // javascript spread 연산자 == ... : 기존 배열이나, 객체의 전체 또는 일부를 다른 배열이나 객체로 복사함
        setTodoList([...todoList ,{title : inputValue, isDone : false} ]);
        setInputValue("");
    }

    // todoList에 있는 값 삭제하기
    const deleteTodo = (index) => {
        // splice 함수 : mutates 함수라서 원본이 변경되는 함수이므로 state인 todoList에 직접적으로 사용 불가
        // todoList와 똑같은 배열 newTodoList를 만들어 splice 이용 후, setState함수 이용하여 상태 업데이트

        const newTodoList = [...todoList]; // todoList와 똑같은 배열 만들기 (복사)
        newTodoList.splice(index, 1); // 복사한 배열에서 index 번호부터 1개 잘라내기
        setTodoList(newTodoList);
    }

    const YNToggle = (index) => {
        const newTodoList = [...todoList];
        newTodoList[index].isDone = !newTodoList[index].isDone;
        setTodoList(newTodoList);
    }

    return(
        <div>
            <h1>나의 Todo List</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {
                    todoList.map((todo, index) => (
                        <li key={index}>
                            <span style={{ textDecoration : todo.isDone ? 'line-through' : 'none'}}>{todo.title}</span>
                            <button onClick={() => YNToggle(index)}>{todo.isDone ? '미완료' : '완료'}</button>
                            <button onClick={() => deleteTodo(index)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

};

export default TodoList;
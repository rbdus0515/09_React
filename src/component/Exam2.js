import React, { useState } from 'react';

const Exam2 = () => {

    const [count, setCount] = useState(0);

    const plusClick = () => {
        setCount(count + 1);
    }

    const handleClick = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={plusClick}>+</button>
            <button onClick={handleClick}>-</button>
        </div>
    );
};

export default Exam2;

// rsc (VS 플러그인 설치 시 단축키 함수 컴포넌트 자동완성) 
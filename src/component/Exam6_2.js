// Context API 사용 했을 때

import React, { useState, useContext, createContext } from "react";

// Context API : React 컴포넌트 트리 전체에서 데이터를 공유할 수 있는 방법을 제공
//              중첩된 구조에서 데이터를 전달하는데 있어서 불필요한 props drilling을 방지함
//              사용하기 휘해선 useContext hook이 필요함

// createContext() : Context 객체를 생성시 사용
const UserContext = createContext();


// 최상위 컴포넌트
function Exam6_2 () {
    const [user, setUser] = useState("홍길동");

    // Context.Provider : 하위 컴포넌트에게 데이터를 전달할 때 사용
    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2 () {
    return (
        <>
            <h1>Component2</h1>
            <Component3 />
        </>
    )
}

function Component3 () {
    return (
        <>
            <h1>Component3</h1>
            <Component4 />
        </>
    )
}

function Component4 () {
    return (
        <>
            <h1>Component4</h1>
            <Component5 />
        </>
    )
}

function Component5 () {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component5</h1>
            <h1>Welcome {user} !</h1>
        </>
    )
}

export default Exam6_2;
// Context API 사용 안했을 때

import React, { useState } from "react";

// 최상위 컴포넌트
function Exam6_1 () {
    const [user, setUser] = useState("홍길동");

    return (
        <>
            <h1>Hello {user}</h1>
            <Component2 user={user} />
        </>
    )
}

function Component2 ({user}) {
    return (
        <>
            <h1>Component2</h1>
            <Component3 user={user} />
        </>
    )
}

function Component3 ({user}) {
    return (
        <>
            <h1>Component3</h1>
            <Component4 user={user} />
        </>
    )
}

function Component4 ({user}) {
    return (
        <>
            <h1>Component4</h1>
            <Component5 user={user} />
        </>
    )
}

function Component5 ({user}) {
    return (
        <>
            <h1>Component5</h1>
            <h1>Welcome {user} !</h1>
        </>
    )
}

export default Exam6_1;
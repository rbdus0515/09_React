import React, { useState } from "react";

const SpringFront = () => {

    const [message, setMessage] = useState([]);
    const [user, setUser] = useState("");

    const getPortNumber = () => {
        fetch("/getPortNumber")
        .then((res) => res.json())
        .then((data) => setMessage(data))
        .catch((err) => console.log("err :: ", err));
    }

    const getUserInfo = () => {
        fetch("/getUserInfo" , {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: "홍길동", // 만약 다른 이름이면 백엔드에서 확인 후 출력
                age: 20
            })
        })
        .then((res) => res.text()) // text형태 파싱하고
        .then((data) => setUser(data)) // 파싱완료 => 데이터 상태에 세팅
        .catch((err) => console.log(err)); // 예외발생 시 콘솔 출력
    }

    return (
        <>
            <div>
                <p>1. 서버로부터 응답 받은 값</p>
                <button onClick={getPortNumber}>통신하기</button>
                <ul>{message.map((el) => <li>{el}</li>)}</ul>
            </div>

            <div>
                <p>2. 서버로 값 전달 후, 응답 받은 값</p>
                <button onClick={getUserInfo}>통신하기</button>
                <ul>{user && <li>{user}</li>}</ul>
            </div>
        </>
    );

}

export default SpringFront;
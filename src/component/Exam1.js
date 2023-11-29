import React, { Component } from 'react';

class Exam1 extends Component {

    constructor(props) {
        super(props);
        this.state = { count : 0 };
    }

    handleClick = () => {
        this.setState({ count : this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Exam1;
// rcc (VS 플러그인 설치 시 클래스 컴포넌트 자동완성)

/*
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Person {
    constructor(name) {
        super(name);
        this.test();
    }
    test() {
        //alert("hello");
        alert("my name is" + this.name + "입니다");
    };
    
}*/
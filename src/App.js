import React, {Component} from "react";
import './App.css';
import MyHeader from "./MyHeader"
import Counter from "./Counter"
import Container from "./Container"

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                world wide web!
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">html</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>
        );
    }
}

const App = () => {

    const counterProps = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        initialValue:5
    }

    return (
        <div className="App">
            <Container>
            <MyHeader />
            <Counter {...counterProps} />
            </Container>
        </div>
    );
};

export default App;



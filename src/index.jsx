import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import './index.css';
import FullPage from "./components/fullpage";

class Demo extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">React Page Scroller Demo</h1>
                <div className="links">
                    <div className="link">
                    <button style={{position: "absolute", top: "50%", left: "48%"}}>
                        <Link to="/fullpage">Full page demo</Link>
                    </button>
                    </div>
                   
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Router basename="/demos">
        <div>
            <Switch>
                <Route exact path="/" component={Demo}/>
                <Route path="/fullpage" component={FullPage}/>
               
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
);
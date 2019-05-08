import React from "react";
import {Pager} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import About from "./about";
import Album from "./album";
import Contact from "./contact";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 3; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <About/>
                <Album/>
                <Contact goToPage={this.goToPage}/>
            </ReactPageScroller>
            <Pager className="pagination-additional-class" bsSize="small">
                {pagesNumbers}
            </Pager>
        </React.Fragment>
    }
}
import React, {Component} from 'react'

class Header extends Component {

    render() {
        return (

            <div className="header" ref="innerHeader">
                <img 
                    src="https://betterlifecentre.com.au/wp-content/uploads/2016/04/stock-forest-header-2.jpg"
                    alt="bear-header"
                />
            </div>

        )
    }
}

export default Header;
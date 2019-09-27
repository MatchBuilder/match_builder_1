import React, { PureComponent } from 'react'
import Header from '../components/Header'

class Layout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout
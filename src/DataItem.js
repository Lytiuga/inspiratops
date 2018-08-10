import React, { Component } from "react";


class DataItem extends Component {
    render() {
        return (
            <li key={this.props.id}>{this.props.url}</li>
        )
    }
}

export default DataItem

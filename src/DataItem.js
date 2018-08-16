import React, { Component } from "react";


class DataItem extends Component {
    render() {
        return (
          <div>
            <li key={this.props.id}>{this.props.ProjName} </li>
            <img src={this.props.PicUrl} alt={this.props.ProjName} style={{maxWidth: "20%"}}/>
            <link title={this.props.ProjName} href={this.props.ProjUrl}/>
            <a href={this.props.ProjUrl}>{this.props.ProjName}</a>
            <p>{this.props.ProjUrl}</p>
          </div>



        )
    }
}

export default DataItem

import React, { Component } from 'react'
import DataItem from './DataItem'

const DataSet = (props) => {

    const dataList = props.results.map(project => (<DataItem
        Key={project.id}
        url={project.url}
        />
    ))
    return dataList

}

export default DataSet

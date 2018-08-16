import React, { Component } from 'react'
import DataItem from './DataItem'



const DataSet = (props) => {
const allIds=[];
    const dataList = props.results.map(project => (<DataItem
        Key={project.id}
        ProjName={project.name}
        PicUrl={project.covers.original}
        ProjUrl={project.url}
      
        />
    ))


    return dataList
}


export default DataSet

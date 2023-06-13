import React, { Component } from 'react'
import axios from 'axios'
class ViewJobComponent extends Component {
    constructor(){
        super()
        this.state = {
            jobs:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3500/view")
        .then((response)=>{
            console.log(response)
            this.setState({jobs:response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render() {
    const {jobs}=this.state
    return (
      <div>
        {jobs.length?jobs.map((job)=><div className="main"><a href="/jobdetails"><div key={job._id} className='set'><h1>{job.company}</h1><h2>{job.location}</h2></div></a></div>):null}
      </div>
    )
  }
}

export default ViewJobComponent
import React, { Component } from 'react'

class EditJobComponent extends Component {
    constructor(){
        super()
        this.state = {
            company:"",
            location:"",
            yearsofexperience:"",
            skillneeded:"",
            jobDescription:"",
            minSalary:"",
            maxSalary:""
        }
    }
    handleCompany = (event) => {
        this.setState({
            company:event.target.value
        })
    }
    handleLocation = (event) => {
        this.setState({
            location:event.target.value
        })
    }
    handleExperience = (event) => {
        this.setState({
            yearsofexperience:event.target.value
        })
    }
    handleSkill = (event) => {
        this.setState({
            skillneeded:event.target.value
        })
    }
    handleDescription = (event) => {
        this.setState({
            jobDescription:event.target.value
        })
    }
    handleMinSalary = (event) => {
        this.setState({
            minSalary:event.target.value
        })
    }
    handleMaxSalary = (event) => {
        this.setState({
            maxSalary:event.target.value
        })
    }
    handleSubmit = (event) => {
        const id=prompt("Enter an id to edit :")
        // alert(`${this.state.company}\n${this.state.location}\n${this.state.yearsofexperience}\n${this.state.skillneeded}\n${this.state.jobDescription}\n${this.state.minSalary}\n${this.state.maxSalary}`)
        fetch(`http://localhost:3500/admin/edit/${id}`,{
            method : 'PATCH',
            crossDomain : true,
            headers : {
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body : JSON.stringify({
                company : this.state.company,
                location : this.state.location,
                yearsofexperience : this.state.yearsofexperience,
                skillneeded : this.state.skillneeded,
                jobDescription : this.state.jobDescription,
                minSalary : this.state.minSalary,
                maxSalary : this.state.maxSalary
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        document.write("Edited Successfully <br/><a href='/view'>View Jobs</a>")
    }
    render() {
        const {company,location,yearsofexperience,skillneeded,jobDescription,minSalary,maxSalary} = this.state
        return (
            <div className='container'>
                <h1>Edit Jobs</h1>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="company">Company Name : </label>
                    <input
                    type="text"
                    name="company"
                    id="company"
                    onChange={this.handleCompany}
                    value={company}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location : </label>
                    <input
                    type="text"
                    name="location"
                    id="location"
                    onChange={this.handleLocation}
                    value={location}
                    />
                </div>
                <div>
                    <label htmlFor="yearsofexperience">Years of Experience Needed : </label>
                    <input
                    type="number"
                    name="yearsofexperience"
                    id="yearsofexperience"
                    onChange={this.handleExperience}
                    value={yearsofexperience}
                    />
                </div>
                <div>
                    <label htmlFor="skillneeded">Skills Needed : </label>
                    <textarea
                    type="text"
                    name="skillneeded"
                    id="skillneeded"
                    onChange={this.handleSkill}
                    value={skillneeded}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="jobdescription">Job Description : </label>
                    <textarea
                    type="text"
                    name="jobdescription"
                    id="jobdescription"
                    onChange={this.handleDescription}
                    value={jobDescription}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="minsalary">Minimum Salary : </label>
                    <input
                    type="text"
                    name="minsalary"
                    id="minsalary"
                    onChange={this.handleMinSalary}
                    value={minSalary}
                    />
                </div>
                <div>
                    <label htmlFor="maxsalary">Maximum Salary : </label>
                    <input
                    type="text"
                    name="maxsalary"
                    id="maxsalary"
                    onChange={this.handleMaxSalary}
                    value={maxSalary}
                    />
                </div>
                <div>
                    <button type="submit">Edit Job</button>
                </div>
            </form>
        </div>
        )
    }
}

export default EditJobComponent
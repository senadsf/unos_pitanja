import React from "react"
import ReactDOM from "react-dom"
import ZakonForma from "./unos_zakona"

class FormaUnosaPitanja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      odgA: "",
      odgB: "",
      odgC: "",
      pitanje: "",
      allChecks: [
        {
        name: "odgACheck",
        checked: false
      }, 
      {
        name: "odgBCheck",
        checked: false
      }, 
      {
        name: "odgCCheck",
        checked: false
      }]
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleChangeCheckbox = event => {      
    const currentCheckBoxIndex = this.state.allChecks.findIndex(c => c.name === event.target.name)
    var modifiedCheckArray = this.state.allChecks
    
    for (let i = 0; i < this.state.allChecks.length; i += 1) {
      if (i !== currentCheckBoxIndex) {
        modifiedCheckArray[i] = {
          name: this.state.allChecks[i].name,
          checked: false
        }
      } else {
        modifiedCheckArray[i] = {
          name: this.state.allChecks[i].name,
          checked: true
        }
      }
    }

    this.setState({
      allChecks: modifiedCheckArray
    })
  }

  handleSubmit(event) {
    //šta sad kako handlati i gdje ga poslati
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    const {allChecks} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
        <label>
          Pitanje:
          <input  name="pitanje" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
            </li>
          <li>
         <label>
          Odgovor A:
          <input name="odgA" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input name="odgACheck" type="checkbox" checked={allChecks[0]["checked"]} onChange={this.handleChangeCheckbox} />
             </li>
         <label>          
          Odgovor B:
          <input  name="odgB" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input name="odgBCheck" type="checkbox" onChange={this.handleChangeCheckbox} checked={allChecks[1]["checked"]} />
          <li>
         <label>
          Odgovor C:
          <input  name="odgC" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input name="odgCCheck" type="checkbox" onChange={this.handleChangeCheckbox} checked={allChecks[2]["checked"]} />
          </li>
        </ul>
        <button>OK</button>
      </form>
    );
  }
}

export default FormaUnosaPitanja
import React from "react";

const emptyZakon = {
  name: "",
  fbih: false,
  kanton: "",
  opcina: "",
  nameError: "",
  fbihError: "",
  opcinaError: ""

}

class UnesiZakonForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      zakon: [
        {...emptyZakon}
      ],
      fbih: false
    };
  }

    // provjerava je li prazan zakon
  
  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };
  // provjerava koliko slova/znakova ima naziv zakona
  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 3 ? null : 'Zakon treba da sadrži više od 3 slova'
    });
  }

// indexira zakon
  handleZakonNameChange = idx => evt => {
    const newZakoni = this.state.zakon.map((zakon, sidx) => {
      if (idx !== sidx) return zakon;
      return { ...zakon, name: evt.target.value}
    });

    this.setState({ zakon: newZakoni });
  }
// dodaje zakon
  handleAddZakon = () => {
    this.setState({
      zakon: this.state.zakon.concat([{
        ...emptyZakon
      }])
    });
  };
// briše zakon
  handleRemoveZakon = idx => () => {
    this.setState({
      zakon: this.state.zakon.filter((s, sidx) => idx !== sidx)
    });
  };

  handleSaveAll = () => {
    // Validacija da li ima barem jedan zakon sa praznim nazivom, i da ima barem jedan od 2 filda (opcina ili kanton)
    // Da mora biti barem jedan popunjen zakon
    if (this.state.zakon.value ==""){
      alert ("Niste upisali Zakon");
      this.state.zakon.focus();
      return false
    }
    console.log(this.state.zakon)
  }

  toggleFbih = idx => () => {
    const newZakoni = this.state.zakon.map((zakon, sidx) => {
      if (idx !== sidx) return zakon;
      return { ...zakon, fbih: !zakon.fbih}
    });

    this.setState({ zakon: newZakoni });
  }

  onChangeKanton = idx => event => {
    const kanton = event.target.value

    const newZakoni = this.state.zakon.map((zakon, sidx) => {
      if (idx !== sidx) return zakon;
      return { ...zakon, kanton}
    });

    this.setState({ zakon: newZakoni });
  }

  render() {
    return (
      <div>
      <div>
        <input
          type="text"
          placeholder=" ADS FBiH"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h4>Zakoni</h4>

        {this.state.zakon.map((zakon, idx) => (
          <div key={idx} className="zakon">
            <input
              type="text"
              placeholder={`Zakon #${idx + 1} name`}
              value={zakon.name}
              onChange={this.handleZakonNameChange(idx)}
            />
            <button style={{ "backgroundColor": zakon.fbih ? "green" : "red"}} onClick={this.toggleFbih(idx)}>FBIH</button>
            <select onChange={this.onChangeKanton(idx)}>
              <option disabled selected value>Kanton</option>
              <option value="HNK">HNK</option>
              <option value="ZEDO">ZEDO</option>
              <option value="SA">SA</option>
              <option value="BPK">BPK</option>
            </select>
            <select>
              <option disabled selected value>Opcina</option>
              <option value="Konjic">Konjic</option>
              <option value="Jablanica">Jablanica</option>
              <option value="Mostar">Mostar</option>
              <option value="Goražde">Gorazde</option>
            </select>
            <button
              type="button"
              onClick={this.handleRemoveZakon(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddZakon}
          className="small"
        >
          Add Zakon
        </button>
      </div>
      
      <button onClick={this.handleSaveAll}>Spasi sve</button>
      </div>
    );
  }
}

export default UnesiZakonForm
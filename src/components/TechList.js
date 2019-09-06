import React, { Component } from "react";
import TechItem from "../components/TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  /**
   * ciclo de vidas dos componetes
   * componentes padroes
   */

  //executado assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // executado sempre que houver uma alteração na props ou states
  // componentDidUpdate(prevProps, prevState) {}
  //quando não esta usando o prevProps
  componentDidUpdate(_, prevState) {
    if (this.state.techs !== prevState.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // executado quando o componente deixa de existir
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //copiar o valor e acrescentar o novo
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

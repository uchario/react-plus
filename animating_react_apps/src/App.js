import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={
            () => this.setState(
              (prevState) => ({showBlock: !prevState.showBlock})
              )
            }
        >
          Toggle
        </button><br />
        <Transition 
          in={this.state.showBlock} 
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div 
            style={
              { 
                backgroundColor: 'red', 
                margin: 'auto',
                width: 100, 
                height: 100,
                transition: 'all 1s ease-in-out',
                opacity: state === 'exited' ? 0 : 1
              }
            }
          >
          </div> 
          )}
        </Transition>
        
        {this.state.modalIsOpen && <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>}
        {this.state.modalIsOpen && <Backdrop />}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

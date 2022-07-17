import React from "react";
import './App.css';

class App extends React.Component {
  spiceStatus = ["Start mopping your brow",  "Watch out", "Are you sure?", "Some like it hot", "May cause stomach upset"]
  state = {
    spiceLvl: "Nice",
    counter: 0
  }
  
  // upp the spice
  updateSpiceLvl = (num) => {
    let spiceLevel = this.state.spiceLvl;
    let newCounterVal = this.state.counter + num;
    // if (this.state.counter === 3) {
    //   this.state.spiceLvl = this.spiceStatus[0];
    //  } else if (this.state.counter === 5) {
    //   this.state.spiceLvl = this.spiceStatus[1];
    //  } if (this.state.counter === 10 ) {
    //   this.state.spiceLvl = this.spiceStatus[2];
    //  } if (this.state.counter === 15 ) {
    //   this.state.spiceLvl = this.spiceStatus[3];
    //  } if (this.state.counter === 20 ) {
    //   this.state.spiceLvl = this.spiceStatus[4];
    //  }
    switch(newCounterVal) {
      case 3:
        spiceLevel = this.spiceStatus[0]
        break;
      case 5:
        spiceLevel = this.spiceStatus[1]
        break;
      case 10:
        spiceLevel = this.spiceStatus[2]
        break;
      case 15:
        spiceLevel = this.spiceStatus[3]
        break;
      case 20:
        spiceLevel = this.spiceStatus[4]
        break;
    }
     this.setState({
      counter: newCounterVal,
      spiceLvl: spiceLevel
     });
    
  }
  render() {
    return (
      <div>
        <h1>Salad King Pepper Chart SPA</h1>
        <button onClick={() => this.updateSpiceLvl(1)}>Add Some Heat</button>
        <button onClick={() => this.updateSpiceLvl(-1)}>Cool It Off</button>
        <h2>Spice Level: {this.state.counter} </h2>
        <h2>Status: {this.state.spiceLvl} </h2>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import Button from "./Button";
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date(), locale: "bn-BD" };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       locale: "en-BD",
//     });
//   }

//   componentDidMount = () => {
//     this.timerId = setInterval(() => this.tick(), 1000);
//   };

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({ date: new Date() });
//   }

//   render() {
//     const { locale } = this.state;
//     // console.log(this);
//     return (
//       <>
//         <h1>It's {this.state.date.toLocaleTimeString(locale)}</h1>
//         <Button change={this.handleClick.bind(this, "en-bd")}></Button>
//       </>
//     );
//   }
// }

// export default Clock;

import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "en-US",
    };
  }

  change = (locale) => {
    
    this.setState({
      locale,
    });
  };

  componentDidMount() {
    this.timerId = setInterval(
      function () {
        this.setState({
          date: new Date(),
        });
      }.bind(this),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date, locale } = this.state;
    
    let button;
   
    if (locale === "bn-BD") {
      button = <Button change={this.change} locale="en-US"></Button>;
    } else {
      button = <Button change={this.change} locale="bn-BD"></Button>;
    }
    return (
      <>
        <h1>It's {date.toLocaleTimeString(locale)}</h1>
        {button}
      </>
    );
  }
}

export default Clock;

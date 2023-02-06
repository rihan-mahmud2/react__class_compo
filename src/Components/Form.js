import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
    text: "Javascript is awesome",
    library: "react",
    isAwesome: true,
  };
  handleInput = (e) => {
    console.log(e.target.type);
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing");
    }
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form>
          <input type="text" value={title} onChange={this.handleInput}></input>
          <br />
          <br />
          <textarea
            name="text"
            value={text}
            onChange={this.handleInput}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleInput}>
            <option value="react">react</option>
            <option value="angular">angular</option>
          </select>

          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleInput}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;

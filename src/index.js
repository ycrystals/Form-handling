import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      mygf: 1,
      language: true,
      status: "love"
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onChangeInput(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="panel-group">
          <div className="panel panel-danger">
            <div className="panel-heading">Form</div>
            <div className="panel-body">
              <form
                action=""
                className="was-validated"
                onSubmit={this.onHandleSubmit}
              >
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    placeholder="Enter username"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.onChangeInput}
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChangeInput}
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>
                <div className="form-group form-check">
                  <div class="form-check-inline">
                    <label class="form-check-label" for="radio1">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio1"
                        name="status"
                        value="love"
                        onChange={this.onChangeInput}
                        checked={this.state.status === "love"}
                      />
                      Love
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label" for="radio2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio2"
                        name="status"
                        value="hate"
                        onChange={this.onChangeInput}
                      />
                      Hate
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="radio" class="form-check-input" disabled />
                      Be friend
                    </label>
                  </div>
                </div>
                <div className="form-group form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="language"
                      value={true}
                      onChange={this.onChangeInput}
                      selected={this.state.language === true}
                      checked={this.state.language === true}
                    />
                    English
                  </label>
                  <br />
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="language"
                      value={false}
                      onChange={this.onChangeInput}
                      selected={this.state.language === false}
                      checked={this.state.language === false}
                    />
                    Vietnamese
                  </label>
                </div>

                <div className="form-group">
                  <label for="sel1">Select list (select one):</label>
                  <select
                    className="form-control"
                    id="sel1"
                    name="mygf"
                    value={this.state.mygf}
                    onChange={this.onChangeInput}
                  >
                    <option value={1}>Name-N</option>
                    <option value={2}>Name-H</option>
                    <option value={3}>Name-Tr</option>
                    <option value={4}>Name-Ch</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-outline-success mr-4">
                  &nbsp; Save &nbsp;
                </button>
                <button type="submit" className="btn btn-outline-danger">
                  &nbsp;Reset&nbsp;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

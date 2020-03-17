import React, { Component } from 'react'

class Editor extends Component {
  constructor() {
    super()

    this.state = {
      markdown: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value})
  }

  render() {
    return (
      <div class="form-group">
        <label className="font-weight-bold mt-5">Editor</label>
        <textarea class="form-control" rows="10" onChange={this.handleChange} value={this.state.markdown}></textarea>
      </div>
    )
  }
}

export default Editor
import Button from "./Button";
import React from "react";
import Field from "./Field";

export default React.createClass({
  render: function () {
    return <div className="field">
      <label className="field-label">Set value to</label>
      <div className="field-ui">
        <input onKeyUp={this.props.form.state.setFieldValue} />
        <Button onClick={this.props.form.updateFieldValue}>Set</Button>
      </div>
    </div>;
  }
});

import Button from "./Button";
import React from "react";
import Field from "./Field";

export default React.createClass({
  render: function () {
    return <div className="field">
      <label className="field-label">Controls</label>
      <div className="field-ui">
        <Button onClick={this.props.form.disableField}>{this.props.form.state.fieldIsDisabled ? "Disable" : "Enable"}</Button>
        <Button onClick={this.props.form.toggleReadOnly}>{this.props.form.state.fieldIsReadOnly ? "Set writable" : "Set read-only"}</Button>
        <Button onClick={this.props.form.invalidateField}>{this.props.form.state.fieldIsInvalid ? "Set valid" : "Set invalid"}</Button>
        <Button onClick={this.props.form.toggleLabel}>{this.props.form.state.fieldHasLabel ? "Remove label" : "Add label"}</Button>
      </div>
    </div>;
  }
});

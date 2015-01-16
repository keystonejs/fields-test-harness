import React from "react";

export default React.createClass({
  render: function () {
    return <button className="btn btn-default" onClick={this.props.onClick}>{this.props.children}</button>;
  }
});

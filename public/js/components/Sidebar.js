import React from "react";

export default React.createClass({
  render: function () {
    return <div id="sidebar">
      {this.props.items.map(function (item) {
        return <div>{item}</div>;
      })}
    </div>;
  }
});

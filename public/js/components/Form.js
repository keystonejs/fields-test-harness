import React from "react";

export default React.createClass({
  render: function () {
    return <div id="content">
      {this.props.children}
    </div>;
  }
});

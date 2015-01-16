import Sidebar from "./components/sidebar";
import React from "react";

import ModifyButtonsComponent from "./components/ModifyButtons";
import SetFieldComponent from "./components/SetField";
import ButtonComponent from "./components/Button";
import FieldComponent from "./components/Field";
import FormComponent from "./components/Form";

export default class Application {
  constructor(container) {
    this.container = container;
    this.forms = {};
    this.items = [];
  }

  add(name, buildForm) {
    this.items.push(name);
    this.forms[name] = buildForm;
  }

  init() {
    var Form = React.createClass({
      components: {
        ModifyButtons: ModifyButtonsComponent,
        SetField: SetFieldComponent,
        Button: ButtonComponent,
        Field: FieldComponent,
        Form: FormComponent,
      },

      getInitialState() {
        return {
          fieldIsDisabled: false,
          fieldIsReadOnly: false,
          fieldIsInvalid:  true,
          fieldHasLabel:   true,
          fieldValue:      ""
        };
      },

      setFieldValue() {
        console.log(arguments);
        this.setState({
          fieldValue: ""
        });
      },

      updateFieldValue() {
        this.setState({
          fieldValue: "lol"
        });
      },

      invalidateField() {
        this.setState({
          fieldIsInvalid: !this.state.fieldIsInvalid
        });
      },

      disableField() {
        this.setState({
          fieldIsDisabled: !this.state.fieldIsDisabled
        });
      },

      toggleReadOnly() {
        this.setState({
          fieldIsReadOnly: !this.state.fieldIsReadOnly
        });
      },

      toggleLabel() {
        this.setState({
          fieldHasLabel: !this.state.fieldHasLabel
        });
      },

      render: this.forms.select
    });

    React.render(<div>
      <Sidebar items={this.items} />
      <Form />
    </div>, this.container);
  }
}

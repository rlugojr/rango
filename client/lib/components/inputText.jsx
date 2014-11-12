'use strict';

var React = require('react');

var InputText = React.createClass({

  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  },

  getInitialState: function (props) {
    return {
      value: (props || this.props).value,
    };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState(this.getInitialState(nextProps));
  },

  render: function () {
    return (
      <div className='input input-text'>
        <label>{ this.props.label }</label>
        <input
          type='text'
          ref='input'
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  },

  onChange: function (e) {
    var el = this.refs.input.getDOMNode();
    var value = el.value;

    this.setState({
      value: value,
    });
  },

});

module.exports = InputText;

import React from 'react';
class ContactInfo extends React.Component {
  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }
  render() {
    let getStyle = isSelected => {
      if(!isSelected) return;

      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      };
      return style;
    }

    return(
      <li
        onClick={this.handleClick.bind(this)}
        style={getStyle(this.props.isSelected)}
        >{this.props.name} {this.props.phone}</li>
    );
  }
}

export default ContactInfo;

import React from 'react';

class HeyButton extends React.Conponent {
  sayHey() {
    alert('Hey!')
  }
  render() {
    return(
      <button onClick = {this.sayHey}>Hey!</button>
    );
  }
}

export default HeyButton;

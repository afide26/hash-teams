import React from 'react';
import PropTypes from 'prop-types';
const styles = {
  content:{
    textAlign:'center',
    fontSize: '35px'
  }
}
export default class Loading extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    text: 'Loading'
  }

  state = {
    text: this.props.text
  }

  componentDidMount(){
    const stopper = this.state.text + '...';

    this.interval = setInterval(()=>{
      const text = this.state.text;
      this.state.text === stopper
        ? this.setState(()=> ({text: text}))
        : this.setState(()=> ({text: text + '.'}))
    }, 300)
  }

  componentWillUnmount(){
    window.clearInterval(this.interval);
  }
  render(){
    return(
      <div className="container">
        <p style={styles.content}>
          {this.state.text}
        </p>
      </div>

    )
  }
}



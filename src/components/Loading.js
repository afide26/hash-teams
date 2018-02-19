import React from 'react';
import PropTypes from 'prop-types';
const styles = {
  content:{
    textAlign:'center',
    fontSize: '35px'
  }
}
export default class Loading extends React.Component {
  constructor(props){
    super(props);
    const originalText = props.text;
    this.state = {
      text: originalText
    }
  }

  componentDidMount(){
    const stopper = this.state.text + '...';

    this.interval = window.setInterval(function(){

      if(this.state.text === stopper){
        this.setState(function(){
          return {
            text: this.props.text
          }
        })
      }else {
        this.setState(function(prevState){
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this),this.props.speed)
  }

  componentWillUnmount(){
    window.clearInterval(this.interval);
  }
  render(){
    return(
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text:'Loading',
  speed: 150
}
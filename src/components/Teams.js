import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { getTeamNames } from '../api';
import parse from 'query-string';

export default class Teams extends Component{
  state = {
    loading:false,
    teamNames:[]
  }

  componentDidMount(){
    getTeamNames()
      .then((teamNames)=>{
        this.setState(()=>(
          {
            loading:false,
            teamNames
          }
        ))
      })
  }


  render(){

    const { loading, teamNames } = this.state;
    const { match, location } = this.props;

    return(
      <div className="container two-column">
        <Sidebar
          loading={loading}
          title="Teams"
          list={teamNames}
          {...this.props}
        />
        {loading === false && location.pathname ==='/teams'
          ? <div className="sidebar-instruction">Select a Team</div>
          : null
        }
      </div>
    )
  }
}
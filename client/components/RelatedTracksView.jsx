import React, {Component} from 'react';
import axios from 'axios';

import RelatedTrackEntry from './RelatedTrackEntry.jsx';

import RelatedTracksIcon from '../assets/relatedTracks.jsx'

const viewStyle = {
  header: {
    height: '31px',
    color: '#999',
    // display: 'inline',
    fontFamily:  'Lucida Sans Unicode', 
    fontSize: '14px',
    fontWeight: '100',
    headerText: {
      // marginTop: '4px',
      // marginBottom: '-10px'
    },
    title: {
      // marginBottom: '-10px'
    },
    viewAll: {
      float: 'right'
    },
    icon: {
      float: 'left',
      width: '20.99px',
      margin: '4px'
    }
  }
}

class RelatedTracksView extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <h3>
          <div style={viewStyle.header}>
            <span style={viewStyle.header.icon}>
              <RelatedTracksIcon />
            </span>
            <div style={viewStyle.header.headerText}>
              <span style={viewStyle.header.title}>Related Tracks</span>
              <span style ={viewStyle.header.viewAll}>View all</span>
            </div>
          </div>
        </h3>
        <div>
          {/* Temporarily hard coded */}
          <RelatedTrackEntry />
          <RelatedTrackEntry />
          <RelatedTrackEntry />
        </div>
      </div>
    )
  }
}


export default RelatedTracksView;
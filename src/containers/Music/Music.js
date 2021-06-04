import React, {Component} from 'react'
import classes from './Music.module.css'
import SearchMusic from "../../components/SearchMusic/SearchMusic";
import TrackList from "../../components/TrackList/TrackList";

class Music extends Component {
  state = {
    fetchingProcess: false,
    searchFieldState: '',
    tracks: [],
    expandedTrack: null,
  }

  searchChangeHandler = newSearchState => this.setState({ 
    searchFieldState: newSearchState
  })

  submitSearchHandler = event => { 
    event.preventDefault()

    if (this.state.fetchingProcess) { 
      return
    }

    this.setState({ 
      fetchingTracks: true
    })

    const searchQuery = this.state.searchFieldState
    const url = `https://itunes.apple.com/search?limit=12&explicit=no&term=${searchQuery}&country=RU&lang=EN`

    fetch(
      url,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(data => this.setState({
        tracks: data.results,
        fetchingTracks: false,
        expandedTrack: null
      }))
      .catch(() => alert('Something went wrong!'))
  }

  expandTrackHandler = expandedTrack => () => {
    if (expandedTrack === this.state.expandedTrack) {
      this.setState({
        expandedTrack: null
      })
    } else {
      this.setState({
        expandedTrack
      })
    }
  }

  render() {
    return (
      <div className={classes.Music}>
        <SearchMusic
          onSearchChange={this.searchChangeHandler}
          onSearchSubmit={this.submitSearchHandler}
        />
        <TrackList
          tracks={this.state.tracks}
          expandedTrack={this.state.expandedTrack}
          onExpandTrack={this.expandTrackHandler}
        />
      </div>
    );
  }
}

export default Music
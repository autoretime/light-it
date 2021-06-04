import React from 'react'
import classes from './TrackList.module.css'
import TrackItem from "./TrackItem/TrackItem";
import NoTracks from "./NoTracks/NoTracks";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";

const TrackList = ({
                     tracks,
                     expandedTrack,
                     onExpandTrack,
                   }) => {

  const trackItems = !!tracks && tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        index={index}
        image={track.artworkUrl100}
        artist={track.artistName}
        trackName={track.trackName}
        genre={track.primaryGenreName}
        collection={track.collectionName}
        trackCount={track.trackCount}
        collectionPrice={track.collectionPrice}
        trackTime={millisToMinutesAndSeconds(track.trackTimeMillis)}
        trackPrice={track.trackPrice}
        expandedTrack={expandedTrack}
        onExpandTrack={onExpandTrack}
      />
    )
  })

  return (
    <>
      <div className={classes.TrackList}>
        <div></div>
        <div>Artist</div>
        <div>Track</div>
        <div>Collection</div>
        <div>Genre</div>
        <div></div>
      </div>
      <hr/>
      {trackItems.length ? trackItems : <NoTracks/>}
    </>
  )
}

export default TrackList
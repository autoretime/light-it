import React from 'react'
import classes from './TrackItem.module.css'
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const TrackItem = ({
                     index,
                     expandedTrack,
                     artist,
                     image,
                     trackName,
                     trackCount,
                     trackTime,
                     trackPrice,
                     collection,
                     collectionPrice,
                     genre,
                     onExpandTrack,
                   }) => {

  const isExpanded = expandedTrack === index

  const additionalInfo = (
    isExpanded && <AdditionalInfo
      index={index}
      artist={artist}
      trackName={trackName}
      collection={collection}
      trackCount={trackCount}
      collectionPrice={collectionPrice}
      trackTime={trackTime}
      trackPrice={trackPrice}
      onExpandTrack={onExpandTrack}
    />
  )

  return (
    <>
      <div
        className={`${classes.TrackItem} ${index % 2 ? null : classes.odd}`}
        onClick={onExpandTrack(index)}
      >
        <div><img src={image} alt={'pic'}/></div>
        <div>{artist}</div>
        <div>{trackName}</div>
        <div>{collection}</div>
        <div>{genre}</div>
        <div className={classes.expandCollapseButton}>
          <i className={isExpanded ? 'fa fa-minus' : 'fa fa-plus'}/>
        </div>
      </div>
      {additionalInfo}
    </>
  )
}

export default TrackItem
import React from 'react'
import classes from './AdditionalInfo.module.css'

const AdditionalInfo = ({
                          index,
                          artist,
                          trackName,
                          collection,
                          trackCount,
                          collectionPrice,
                          trackTime,
                          trackPrice,
                          onExpandTrack,
                        }) => {

  return (
    <div
      className={`${classes.AdditionalInfo} ${index % 2 ? null : classes.odd}`}
      onClick={onExpandTrack(index)}
    >
      <div></div>
      <div>
        <span>{artist} - {trackName}&nbsp;<i className={'fa fa-music'}/></span>
      </div>
      <div></div>
      <div></div>
      <div>
        <div><strong>Collection:</strong>&nbsp;{collection}</div>
        <div><strong>Track Count:</strong>&nbsp;{trackCount}</div>
        <div><strong>Price:</strong>&nbsp;{collectionPrice}</div>
      </div>
      <div>
        <div><strong>Track duration:</strong>&nbsp;{trackTime}</div>
        <div><strong>Track Price:</strong>&nbsp;{trackPrice} USD</div>
      </div>
    </div>
  )
}

export default AdditionalInfo
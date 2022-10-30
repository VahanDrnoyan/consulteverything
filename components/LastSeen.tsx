import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastSeen({ date }: {date:  number}) {
  return (
    <div>
     <ReactTimeAgo date={date} style={{fontSize: '12px'}} locale="en-US"/>
    </div>
  )
}
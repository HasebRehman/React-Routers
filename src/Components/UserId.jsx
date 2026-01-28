import React from 'react'
import { useParams } from 'react-router-dom'

const UserId = () => {

    const {userid} = useParams();

  return (
    <div>
        user: {userid}
    </div>
  )
}

export default UserId
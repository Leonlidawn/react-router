import React from 'react'
import { withRouter } from 'react-router-dom'

const Redirect = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);

  console.log(props);
  return (
    <div className="continer">
      <h4 className="center">Redirect</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil provident saepe voluptate perferendis suscipit, ipsa omnis dicta magnam rerum. Molestias autem veniam assumenda similique voluptates explicabo repellat porro tempore.</p>
    </div>
  )
}

export default withRouter(Redirect);

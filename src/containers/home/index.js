import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
   

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

// const mapStateToProps = ({ counter }) => ({
//   count: counter.count,
//   isIncrementing: counter.isIncrementing,
//   isDecrementing: counter.isDecrementing
// })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // increment,
      // incrementAsync,
      // decrement,
      // decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  // mapStateToProps,
  mapDispatchToProps
)(Home)

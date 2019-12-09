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
    <h1>What makes something accessible on the web?</h1>

    <p>
      There's a lot you can say about this, but let's boil it down to some Key Prinicples
    </p>

    <p>For a form (or any part of a website) to be accessible, it must be:</p>
    <ul>
      <li>Perceivable</li>
      <li>Operable</li>
      <li>Understandable</li>
    </ul>
    <small>https://www.w3.org/WAI/WCAG21/quickref/</small>
   
    <p>Those prinicples must be met in order to be accessible for all types of users.</p>
    <p>
      In addition, browsers build an Accessible Tree that mirrors the DOM for assitive technologies, such as screen readers, to allow others to browse the web.
      The Accessibility Tree is made up of "accessible objects". For these objects to be useful for assistive technologies, they must provide information about their:
    </p>
    <ul>
      <li>Role and Name</li>
      <li>States</li>
      <li>Properties</li>
    </ul>
    <small>https://www.w3.org/TR/accname-1.1/</small>

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

import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const LabelsPage = props => (
  <div className="labels-page">
    <h1>What's the takeaway about Labels</h1>

    <ul>
      <li>Labels make your forms Understandable</li>
      <li>Labels increase the Operability of your forms</li>
      <li>Labels are the best way to provide form fields a Name for the Accessibility Tree</li>
    </ul>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div >
)

// const mapStateToProps = ({ counter }) => ({

// })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  // mapStateToProps,
  mapDispatchToProps
)(LabelsPage)

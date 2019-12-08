import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = '(num) => num + 1'

const LabelsPage = props => (
  <div>
    <h1>Labels</h1>

    <h2>Common Problems</h2>

    <ul>
      <li>No visual label, or no label at all</li>
      <li>Label isn't connected to the form component</li>
    </ul>

    <h3>No label at all</h3>
    <input type="text" placeholder="Enter your phone number" />
    {/* <SyntaxHighlighter language="javascript" style={okaidia}>
      '<input type="text" placeholder="Enter your phone number"/>'
    </SyntaxHighlighter> */}


    <h3>No visible label</h3>
    <input type="text" placeholder="Enter your phone number" aria-label="Phone Number" />
    {/* <SyntaxHighlighter language="javascript" style={okaidia}>
      '<input type="text" placeholder="Enter your phone number"/>'
    </SyntaxHighlighter> */}

    <h3>Label isn't connected to the form component</h3>
    <label>Phone Number</label>
    <input type="text" placeholder="Enter your phone number" />
    {/* <SyntaxHighlighter language="javascript" style={okaidia}>
      '<input type="text" placeholder="Enter your phone number"/>'
    </SyntaxHighlighter> */}

    <h2>Why is that a problem?</h2>
    <p>
      When there isn't a permanently visable label, it is easy to forget what an input is used for.
      This is frustrating for users. Whether they have cognitive disabilities, such as Alzheimers, or if they are 
      simply trying to multitask and get distracted, this can break the flow of completing a form.
    </p>

    <p>
      When a label is shown, but isn't connected to the form component, this is a serious barrier for screen reader users. 
      WAI reqs: Anything actionable must have an accessible name.
    </p>


    <h2>Beware of "helpful" aids that don't actually help</h2>
    <p>Show the tooltips on FB signup</p>

    <SyntaxHighlighter language="javascript" style={okaidia}>
      {codeString}
    </SyntaxHighlighter>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
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

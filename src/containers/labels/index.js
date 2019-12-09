import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './labels.scss'

const syntaxHighlighterStyle = okaidia
const problemsExample1 = 
`<input 
  type="text"
  placeholder="Enter your phone number" />`

const problemsExample2 =
`<input
   type="text"
   placeholder="Enter your phone number" 
   aria-label="Phone Number" />`

const problemsExample3 =
`<label>Phone Number</label>
<input 
  type="text" 
  placeholder="Enter your phone number" />`

const solutionExample1 =
`<label for="username">Username</label>
<input id="username" type="text" />`

const solutionExample2 =
`<label>
  Username
  <input type="text" />
</label>`

const solutionExample3 =
`<label id="username">Username</label>
<input aria-labelledby="username" type="text" />`

const LabelsPage = props => (
  <div className="labels-page">
    <h1>Labels</h1>

    <h2>Common Problems</h2>
    <ul>
      <li>No visual label, or no label at all</li>
      <li>Label isn't connected to the form component</li>
    </ul>

    <p>From our list of Key Principles, visible labels</p>

    <div className="flex">
      <div className="flex-card">
        <h3>No label at all</h3>
        <input type="text" placeholder="Enter your phone number" />
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle}>
          {problemsExample1}
        </SyntaxHighlighter>
      </div>
      <div className="flex-card">
        <h3>No visible label</h3>
        <input type="text" placeholder="Enter your phone number" aria-label="Phone Number" />
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle}>
          {problemsExample2}
        </SyntaxHighlighter>
      </div>
      <div className="flex-card">
        <h3>Label isn't connected to the form component</h3>
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" />
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle} wrapLines={true}>
          {problemsExample3}
        </SyntaxHighlighter>
      </div>
    </div>

    <h2>Why is that a problem?</h2>
    <p>
      When there isn't a permanently visable label, it is easy to forget what an input is used for.
      This is frustrating for users. Whether they have cognitive disabilities, such as Alzheimers, or if they are
      simply trying to multitask and get distracted, this can break the flow of completing a form.
    </p>

    <p>
      It is a serious barrier for screen reader users when a label is shown, but isn't connected to the form field.
      This violates the Name requirement for Accessibility Objects
    </p>

    <h2>Ways to do it right:</h2>

    <div className="flex">
      <div className="flex-card">

        <h3>Using the `for` attribute with an ID</h3>
        <label for="username">Username</label> <input id="username" type="text" />
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle} wrapLines={true}>
          {solutionExample1}
        </SyntaxHighlighter>
      </div>
      <div className="flex-card">

        <h3>Wrap the input with the label</h3>
        <label>
          Username
          <input type="text" />
        </label>
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle} wrapLines={true}>
          {solutionExample2}
        </SyntaxHighlighter>
      </div>
      <div className="flex-card">

        <h3>Using the `aria-labelledby` attribute with an ID</h3>
        <label id="username">Username</label>
        <input aria-labelledby="username" type="text" />
        <SyntaxHighlighter language="html" style={syntaxHighlighterStyle} wrapLines={true}>
          {solutionExample3}
        </SyntaxHighlighter>
        <p>This does not give you the larger click region benefit</p>
      </div>
    </div>

    <h2>What about other input types?</h2>
    <p>Often, when you look up tutorials, you only find examples with textbox inputs. But this is the case for all types of inputs:</p>

    <label>
      <input type="radio" />
       Radio option
    </label>
    <br />
    <label>
      <input type="checkbox" />
       Checkbox option
    </label>

    <h2>Beware of "helpful" aids that don't actually help</h2>
    <p>Show the tooltips on FB signup</p>

    {/* // <SyntaxHighlighter language="html" style={okaidia}>
    //   {codeString}
    // </SyntaxHighlighter> */}

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

import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const syntaxHighlighterStyle = okaidia

const errorProblem1 = 
`<label>
  Username
  <input type="text" />
</label>
<p class='err-msg'>This error message is not be connected to the input above</p>`

const errorSolution1 = 
`<label>
  Username
  <input
    type="text"
    aria-describedby="errMessage" />
</label>
<p id="errMessage" class='err-msg'>This error message is semantically connected by using aria-describedby</p>`

const FormErrorsPage = props => (
  <div>
    <h1>Error states for forms</h1>

    <h2>Common Problems</h2>
    <ul>
      <li>Error messages are not semantically connected to a form field</li>
      <li>Colors are used to convey meaning about validation</li>
    </ul>

    <h2>How to connect addition information to a form field</h2>
    <label>
      Username
      <input type="text" />
    </label>
    <p class='err-msg'>This error message is not be connected to the input above</p>

    <SyntaxHighlighter language="html" style={syntaxHighlighterStyle}>
      {errorProblem1}
    </SyntaxHighlighter>

    <label>
      Username
      <input type="text" aria-describedby="errMessage" />
    </label>
    <p id="errMessage" class='err-msg'>This error message is semantically connected by using aria-describedby</p>

    <SyntaxHighlighter language="html" style={syntaxHighlighterStyle}>
      {errorSolution1}
    </SyntaxHighlighter>

    <h3>A note:</h3>
    <ul>
      <li>Multiple messages can be connected to the same input field</li>
    </ul>

    <hr />

    <h2>What's the problem with using colors?</h2>

    <p>Show green and red outlines here, then use icons instead</p>

  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapDispatchToProps
)(FormErrorsPage)

import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Col, Row } from 'react-bootstrap'
import './App.css'

function App () {
  const {
    // loading,
    FromLanguage,
    toLanguage,
    // fromText,
    // result,
    interchangeLanguages,
    setFromLanguage
    // setToLanguage,
    // setFromText,
    // setResult
  } = useStore()

  return (
    <>
<div>
  <h1>
    Google translate
  </h1>
  <Row>
    <Col>
      <h2>from</h2>
      {FromLanguage}
      </Col>
      <Col>
      <button onClick={interchangeLanguages}>intercambiar</button>
      </Col>
      <Col>
      <h2>to</h2>
      {toLanguage}
      </Col>
      </Row>
  <button onClick={() => { setFromLanguage('holamundo') }}></button>
</div>
    </>
  )
}

export default App

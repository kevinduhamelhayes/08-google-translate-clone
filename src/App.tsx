import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'

function App () {
  const {
    // loading,
    // fromLanguage,
    // toLanguage,
    // fromText,
    // result,
    // interchangeLanguages,
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
  <button onClick={() => { setFromLanguage('holamundo') }}></button>
</div>
    </>
  )
}

export default App

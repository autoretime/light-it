import React, {Component} from 'react'
import Layout from "./components/hoc/Layout/Layout";
import Music from "./containers/Music/Music";

class App extends Component {
  render() {
    return (
      <Layout>
        <Music/>
      </Layout>
    )
  }
}

export default App
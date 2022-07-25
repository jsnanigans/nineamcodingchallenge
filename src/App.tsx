import Progress, { ProgressStatus } from "./components/Progress/Progress"

function App() {
  return (
    <div className="App">
      <Progress status={ProgressStatus.Initial} />
    </div>
  )
}

export default App

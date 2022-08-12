import Progress, { ProgressStatus } from "./components/Progress/Progress"


function App() {
  return (
    <div className="App">
      <Progress status={ProgressStatus.CompletedMedicalAssessment} />
    </div>
  )
}

export default App


import Hero from './Hero'
import Home from './Home'
import Projects from './Projects'
import './App.css'
import projects from './projectList'



function App() {
  const list = projects.map((x, index) => {
    return(
      <Projects key={index} projectTitle={x.projectTitle}
      projectDescription={x.projectDescription}
      projectImg={x.projectImg}
      />
    )
  })



  return (
    <>
      <Hero />
      <Home />
      
      {list}
      
    </>
   
  )
}

export default App

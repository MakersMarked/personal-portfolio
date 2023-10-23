import ProjectsList from '../ProjectsList'
import cvScreenshot from '../assets/cv-photo.jpg'
import noImage from '../assets/test.png'

const Projects = () => {
    class project {
        constructor(projectTitle, projectImg,projectDescription){
            this.projectTitle = projectTitle
            this.projectImg = projectImg
            this.projectDescription = projectDescription
        }

    }

    const cvGen = new project('Cv Generator',cvScreenshot,'this is a cool project');
    const temp = new project('Test Project', noImage,'Bladdy, bloddy, blah')
    const projects = [
        cvGen,
        temp,
    ]
    const projectsList = projects.map((x, index) => {
        return(
          <ProjectsList
            key={index} 
            projectTitle={x.projectTitle}
            projectDescription={x.projectDescription}
            projectImg={x.projectImg}
          />
        )
      })
return (
<div className=" flex-col flex rounded-xl">
    <div className="">
      {projectsList}
    </div>
    
</div>

)

}

export default Projects
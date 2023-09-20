import cvScreenshot from './assets/cv-photo.jpg'
class project {
    constructor(projectTitle, projectImg,projectDescription){
        this.projectTitle = projectTitle
        this.projectImg = projectImg
        this.projectDescription = projectDescription
    }

}


const cvGen = new project('Cv Generator',cvScreenshot,'this is a cool project');


const projects = [
    cvGen
]
export default projects
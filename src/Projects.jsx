import PropTypes from 'prop-types';


const Projects = ({projectTitle,projectImg,projectDescription,}) => {
   
    return(
        <>
            <div className="border-2 md:w-1/2 p-5 m-2">
                <div className="">
                    <h3>
                        {projectTitle}  
                    </h3>
                </div>
                <img src={projectImg} alt={projectTitle} className="w-fit" />
                <div className="">
                    <p className="project Description">{projectDescription}</p>
                    <div className="tools used">
                        {/* {toolsUsed} */}
                    </div>
                </div>
            </div>
        </>


    )
}
Projects.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectImg: PropTypes.string,
    projectDescription: PropTypes.string.isRequired
}

export default Projects
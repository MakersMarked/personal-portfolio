import PropTypes from 'prop-types';
import linkImg from './assets/link.svg';
import gHImg from './assets/github-mark.svg'


const ProjectsList = ({projectTitle,projectImg,projectDescription,}) => {
    
    
    return(
        <>
            <div className="border-2 md:w-1/2 p-5 m-2 border-black ">
                <div className="">
                    <h3>
                        {projectTitle}  
                    </h3>
                </div>
                <div className="border-4 hover:border-blue-400 hover:shadow-md">
                    <img src={projectImg}  alt={projectTitle} className="object-fill" />
                </div>
                
                <div className="flex border-2 p-1 ">
                    <p className="flex-1">{projectDescription}</p>
                    <div className="grid grid-flow-col gap-2 ">
                       <img src={linkImg} alt="" />
                       <img src={gHImg} className='w-1/4'  alt="" />
                    </div>
                </div>
            </div>
        </>


    )
}
ProjectsList.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectImg: PropTypes.string,
    projectDescription: PropTypes.string.isRequired
}

export default ProjectsList
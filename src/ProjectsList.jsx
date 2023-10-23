import PropTypes from 'prop-types';
import linkImg from './assets/link.svg';
import gHImg from './assets/github-mark.svg'


const ProjectsList = ({projectTitle,projectImg,projectDescription,}) => {
    
    
    return(
        <>
            <div className="border-2 md:w-[1000px] p-5 m-2 border-black rounded-2xl  ">
                <div className="flex justify-between">
                    <h3>
                        {projectTitle}  
                    </h3>
                    <div className="grid grid-flow-col gap-2 ">
                       <img src={linkImg} alt="" />
                       <img src={gHImg} className='w-1/4'  alt="" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="border-4 flex-1 hover:border-blue-400 hover:shadow-md">
                        <img src={projectImg} width={'500'}  alt={projectTitle} className="object-fill" />
                    </div>
                    <div className="flex-1 border-2 p-1 ">
                        <p className="flex-1">{projectDescription}</p>
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

import ContentBlock from '../ContentBlock'

const Bio = () => {
    const bio = [
         {
            title: 'About Me',
            content:'Hello, My name is Jordan. Im an aspiring software engineer',
          }, 
          {
            title: 'Hobbies',
            content:'When Im not coding, I love to take my dog on adventures, whether that be in nature somewhere with some great views, or a brewery with some great brews.'
          }
    ]
     const display = bio.map((sect, index) => {
                    return (
                        <ContentBlock
                            key={index} 
                            title={sect.title}
                            content={sect.content} />
                    )
                })
    return (
        <div className='gap-5  md:m-4'>
           { display }
        </div>
        
    )
    
    
}

export default Bio
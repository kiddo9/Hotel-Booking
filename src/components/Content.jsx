import Section1 from './section1'
import Sub_section from './sub-section1';
import Card from './card';
import Video from './video';

const Content = () => {
    return(
        <div>
            <Section1 image="images/gabriel ghnassia A9h6OsAxTyQ unsplash.png" />
            <Sub_section Des="All our room types are including complimentry breakfast" />
            <Card />
            <Video />
        </div>
    )
}

export default Content;
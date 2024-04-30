import '../App.css'
import Nav from '../components/nav'
import Section from '../components/section1'
import Sub from '../components/sub-section1'
import Video from '../components/video'
import Facilities from "../components/Facilities"
import Title from "../components/Title"

function View(){
    return(
        <div>
            <Nav />
            <Section image="images/palm-trees-at-night-258154 1.png" />
            <Title Title='FACILITIES' />
            <Sub Des="a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry" />
            <Facilities />
            <Video />
        </div>
    )
}

export default View;
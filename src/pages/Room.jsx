import Nav from '../components/nav'
import Section from '../components/section1'
import Sub from '../components/sub-section1'
import Video from '../components/video'
import Title from "../components/Title"
import Loom from "../components/Room"

function Room() {
  return (
    <div>
       <Nav />
            <Section image="images/apartment-bed-bedroom-chair-271618 1.png" />
            <Title Title='ROOMS AND RATES' />
            <Sub Des="ROOMS AND RATES a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry" />
            <Loom />
            <Video />
    </div>
  )
}

export default Room

import { useState } from 'react'
import './App.css'
import Developersteam from './Developersteam'
import SalesandMarketingTeam from './SalesandMarketingTeam'

function App() {
  const [team, setTeam] = useState(0);

  const showContent=()=>{
      setTeam(!team);
  };


  return (
  
    
    <div className="main">

      <div className="flag">
      
      
      </div>

      <div className="name"><h1>VeriTech Profile</h1></div>
      <p><h4>Welcome to the VeriTech, where a dedicated team of professionals works <br></br>together
        to bring the  innovation, creativity and expertise to the software industry, get to  know <br></br> the individuals who make our company thrive.</ h4></p>

      <div className="border"> <b>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </b></div>

    <div className="coreteam"> 
    <div className="team"><h1>Meet Our Team</h1></div>
    <button onClick={showContent} class="management" ><b>Leaders/Management team</b></button>
    <div className={'content1' + (team?'visible':'')}>

    <div className="lead1">

    <div className="profile1">
      <div className="member1">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name1"><b>Founder Name</b></div>
      <div className="post1">Founder/CEO</div>
    </div>

    <div className="profile2">
      <div className="member2">
      <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name2"><b>Founder Name</b></div>
      <div className="post1">Founder/CEO</div>
      </div>
    
    </div> 

    <div className="lead2">
    <div className="profile3">
      <div className="member3">
      <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name3"><b>VP Name</b></div>
      <div className="post3">VP Development & Growth</div>
    </div>

    <div className="profile4">
      <div className="member4">
      <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name4"><b>VP Name</b></div>
      <div className="post4">VP Sales and Marketing</div>
    </div>

    <div className="profile5">
      <div className="member5">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name5"><b>VP Name</b></div>
      <div className="post5">VP Finance & Operations</div>
    </div>
    </div>
    </div>

    
    
    <Developersteam/>

    

    <SalesandMarketingTeam/>

    </div>

    </div>
  )
}

export default App

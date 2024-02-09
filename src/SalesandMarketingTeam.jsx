import React from 'react'
import { useState } from 'react'
function SalesandMarketingTeam() {
    const [team, setTeam] = useState(0);

    const showContent=()=>{
        setTeam(!team);
    };

  return (
    <div>
     <button onClick={showContent} class="management" ><b>Sales and Marketing Team</b></button>
    <div className={'content1' + (team?'visible':'')}>
       
    <div className="sales1">

    <div className="profile1">
      <div className="member1">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name1"><b>Employee Name</b></div>
      <div className="post1">Team Lead</div>
    </div>

    <div className="profile2">
      <div className="member2">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name2"><b>Employee Name</b></div>
      <div className="post2">Sales Officer</div>
    </div>

    <div className="profile3">
      <div className="member3">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name3"><b>Employee Name</b></div>
      <div className="post3">Sales Officer</div>
    </div>

    <div className="profile4">
      <div className="member4">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name4"><b>Employee Name</b></div>
      <div className="post4">Sales Officer</div>
    </div>
    
   
    </div>

    <div className="sales2">
    
    <div className="profile5">
      <div className="member5">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name5"><b>Founder Name</b></div>
      <div className="post5">Marketing Officer</div>
    </div>

    <div className="profile6">
      <div className="member6">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name6"><b>Founder Name</b></div>
      <div className="post6">Marketing Officer</div>
    </div>

    <div className="profile7">
      <div className="member7">
        <div className="dp"><img src="./FacelessMan.png"></img></div>
      </div>
      <div className="name7"><b>Founder Name</b></div>
      <div className="post7">Marketing Officer</div>
    </div>

    </div>



    </div>

    </div>
  )
}

export default SalesandMarketingTeam

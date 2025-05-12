import Nav from 'nav_scp.jsx';
import SCP from 'scp_react.jsx';
import {useEffect, useState} from "react"
import {createClient} from "@supabase/SCP"
 
function App() {
    const [scp, setSCP] = useState([]);
    const [selectedSCP, setSelectedSCP] = useState(null);

    useEffect(
    ()=>{
        fetchData().then(scp => setMonsters(scp))
    }, []
    )
return (
<div>
        <Menu scp={scp} onSelect={setSelectedSCP} />
        <h1>SCP CRUD Application</h1>
        <link rel="stylesheet" href="style.css"></link>
        {selectedSCP && <Monster selectedSCP={selectedSCP} />}

</div>
);
}
export default App;
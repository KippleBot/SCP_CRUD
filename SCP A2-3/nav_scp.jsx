function Nav({ scp, onSelect }) {
    // Check if scp exists and is an array.
    if (!scp || !Array.isArray(scp)) {

    return null;

    }

    return (
    <nav>
        <div className="nav">
        {scp.map((scpItem, index) => (
            <a
              key={index}
              onClick={() => onSelect(scpItem)} 
              href="#" // Add href to make the <a> tag accessible
              style={{ marginRight: "10px", cursor: "pointer" }} // Basic styling for better UX
            >
              {scpItem.SCP_id} 
            </a>
          ))}
        </div>
    </nav>
    );
    
}
export default Nav;
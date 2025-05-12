function SCP({SCP_id, SCP_containment, SCP_description, SCP_image, SCP_class,SCP_name }) {
    if (!selectedSCP) {
        return <div>No SCP data available.</div>;
    }
    return(
    <div>
        <img src={selectedSCP.SCP_image} alt={selectedSCP.SCP_item}></img>
        <h1>Item#:{selectedSCP.SCP_item}</h1>
        <h2>Name of SCP:{selectedSCP.SCP_name}</h2>
        <h2>Class:{selectedSCP.class}</h2>
        <h3>How to Contain {selectedSCP.SCP_item}:</h3>
        <p>{selectedSCP.SCP_containment}</p>
        <h3>Description:</h3>
        <p>{selectedSCP.SCP_description}</p>
        
    </div>);

    }
export default SCP;
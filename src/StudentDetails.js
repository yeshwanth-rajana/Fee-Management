import React,{useState} from "react";
function StudentDetails(){
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[college,setCollege]=useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Given form details are:",{firstName,lastName,college});
        setFirstName('');
        setLastName('');
        setCollege('');


    };
    return(

        <form onSubmit={handleSubmit}>
            <label>
                Enter your first name:
                <input type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} />
                <br></br>
            </label>
            <label>
                Enter your last name:
                <input type="text" value={lastName} onChange={(event)=>setLastName(event.target.value)} /><br></br>
            </label>
            <label>
                Enter your college name:
                <input type="text" value={college} onChange={(event)=>setCollege(event.target.value)} /><br></br>
            </label>
            <input type="submit" value="submit" />
        </form>
    );

}
export default StudentDetails;


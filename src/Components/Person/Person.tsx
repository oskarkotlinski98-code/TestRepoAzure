// This is a tsx file , which means we're writing code with react and typescript


//we use this to specify parameters that are sent to a component

// same file as component
interface PersonProps{
    name:string,
    email:string,
}



//here we take props value
const Person =({name,email}:PersonProps)=>{

    // even values that are made inside of component has to have a datatype
    const age:number = 31;
return(
<>
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{age}</p>
</>)
}


export default Person;
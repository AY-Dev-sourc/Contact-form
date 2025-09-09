

export default function Err({name,msg}){
    if(!msg) return null;
    return(
        <label htmlFor={name} className="Err">{msg}</label>
    );
}
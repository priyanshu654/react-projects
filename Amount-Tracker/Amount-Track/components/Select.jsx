export default function Select({ label, id, name, value, onChange,optionsData,error }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="category">{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          //ref={categoryRef}
        >
         
          {optionsData.map((data,index)=>{
           
            if(index==0){
                return(<option key={index} value="" hidden>{data}</option>)
            }
            else{
                return(<option key={index} value={data}>{data}</option>)
            }
          })}

        </select>
      </div>
      <p className="error">{error}</p>
    </>
  );
}

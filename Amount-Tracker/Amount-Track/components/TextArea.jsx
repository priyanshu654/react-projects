export default function TextArea({id,name,value,onChane,error,label}) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="title">{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          //for this we have made special function...
          // onChange={(e) => {
          //   setGetFormData((prevState) => ({
          //     ...prevState,
          //     title: e.target.value,
          //   }));
          //   setErrors({});

          // }}
          //ref={titleRef}
          onChange={onChane}
        />
        {/* {by applying value=title which is emepty string initially,it will not allow us to write anything in title section, thus we have to apply eventListener onChange.... } */}
        {/* {onchange function for individual state   onChange={(e)=>setTitle(e.target.value)}} */}
      </div>
      <p className="error">{error}</p>
    </>
  );
}

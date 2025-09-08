export default function Tab({num,activeTab,setActiveTab}){
    return(
        <button className={activeTab===num?"tab active":"tab"} onClick={()=>{setActiveTab(num)}}>
            Tab {num+1}
        </button>
    )
}
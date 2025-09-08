import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentSection from "./DifferentSection";

export default function Tabbed({items}){
    const [activeTab,setActiveTab]=useState(0);
    return(
        <div>
            <div className="tabs">
                <Tab num={0} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>

            {activeTab<=2?<TabContent items={items[activeTab] }  key={items[activeTab].summary}/>:<DifferentSection/>}
        </div>
    )
}
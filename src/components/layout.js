import React, { useState } from "react";
import ModelOptions from "./modeloption/modeloptions";
import ModelView from "./modelview/modelview";

export default function Layout() {


    const [typeofbed, setTypeofbed] = useState('grey-green');

    const selectType = (bedtype) => {
        setTypeofbed(bedtype)
    }

    return (
        <div className="row lay-row">
            <div className="col-md-6">
                <ModelView 
                    typeofbed={typeofbed}
                />
            </div>
            <div className="col-md-6">
                <ModelOptions
                    selectType={selectType}
                 />
            </div>            
        </div>
    )
}
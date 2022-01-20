import React, { useState } from "react";

const first_thumbnails = ['grey-green','grey-grey','grey-red'];
const second_thumbnails = ['red-green','red-grey','red-red'];

export default function ModelOptions (props) {
    
    const [selectOption, setOption] = useState(true);
    const [focusOption, setFocusOption] = useState('grey-green');
    

    return (
        <div className="model-options">
            <div id="accordion">
                <div className="card">
                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseOne" onClick={ () => setOption(selectOption=='option1'?'':'option1') }>                    
                    <span className={`glyphicon ${selectOption!='option1'?'glyphicon-triangle-right':'glyphicon-triangle-top'}`}></span>
                    Label 1
                    </a>
                </div>
                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body">
                        <div className="opt-header row text-left">
                            <div className="col-md-6">
                                <p>Category</p>
                                <div className="flex">
                                <input type="checkbox" className="checkbox"/>
                                <p className="ml-3">ThreeSixty</p>
                                </div>                                
                            </div>
                            <div className="col-md-6 text-right">
                                <input placeholder="search..." />
                            </div>                                                        
                        </div>
                        <div className="row no-wrap">
                            {
                                first_thumbnails.map((thumbnail) => { 
                                    return(
                                     <div className="ml-3" key={thumbnail}>
                                        <a className="thumb" onClick={() =>{ props.selectType(thumbnail);setFocusOption(thumbnail)} }>
                                            <div className={`card color-card ${thumbnail==focusOption?'thumb-focus':''}`}>
                                                <img className='card-img-top' alt="Card image" src={require('../../assets/images/thumbnails/'+thumbnail+'.jpg')} />
                                                <div className="card-body">                                                
                                                    <p className="card-text">{thumbnail}</p>                            
                                                </div>
                                            </div>
                                        </a>
                                     </div>
                                    )                                                           
                                })                                                                
                            }
                        </div>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header">                
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo" onClick={ () => setOption(selectOption=='option2'?'':'option2') }>
                    <span className={`glyphicon ${selectOption!='option2'?'glyphicon-triangle-right':'glyphicon-triangle-top'}`}></span>
                    Label 2
                </a>
                </div>
                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                            <div className="opt-header row text-left">
                                <div className="col-md-6">
                                    <p>Category</p>
                                    <div className="flex">
                                    <input type="checkbox" className="checkbox"/>
                                    <p className="ml-2">ThreeSixty</p>
                                    </div>                                
                                </div>
                                <div className="col-md-6 text-right">
                                    <input className="search" placeholder="search..." />
                                </div>                                                        
                            </div>
                            <div className="row no-wrap">
                                {
                                    second_thumbnails.map((thumbnail) => { 
                                        return(
                                        <div className="ml-2" key={thumbnail}>
                                            <a className="thumb" onClick={() => {props.selectType(thumbnail) ;setFocusOption(thumbnail)} }>
                                                <div className={`card color-card ${thumbnail==focusOption?'thumb-focus':''}`}>
                                                <img className='card-img-top' alt="Card image" src={require('../../assets/images/thumbnails/'+thumbnail+'.jpg')} />
                                                    <div className="card-body">                                                
                                                            <p className="card-text">{thumbnail}</p>                            
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        )                                                           
                                    })                                                                
                                }
                            </div>
                        </div>
                </div>
                </div>
                </div>
        </div>
    )
}
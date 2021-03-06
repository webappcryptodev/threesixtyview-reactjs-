import React, { useCallback, useState } from "react";
import ImageZoom from 'react-image-zooom';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function ModelView(props) {

    const viewhandle = useFullScreenHandle();
    const [searchState, setSearchState] = useState(false);
    const [img_num, setImgnum] = useState(1);
    const [screenState, setScreen] = useState(true);
    
    var oldx = undefined;
   const mousemovemethod = (e) => {     
       console.log(e.pageX) ;
       if(oldx==undefined){
           oldx=e.pageX;
       }
        if(Math.abs(oldx-e.pageX) >= 10) {
            if (e.pageX < oldx) {            
                if(img_num==1){
                    setImgnum(24);
                }else{
                    setImgnum(img_num-1);
                    console.log(img_num);
                }            
            } else if (e.pageX > oldx) {            
                if(img_num==24){
                    setImgnum(1);
                }else{
                    setImgnum(img_num+1);
                }            
            }        
            oldx = e.pageX;           
        }    
    }

 
    const changeScreenState = useCallback((state,handle) => {        
    //    if(screenState){
           setScreen(!screenState);
    //    }
        
    },[viewhandle]);

    const setFullScreen = () => {        
        setSearchState(false);
        viewhandle.enter();        
    }
    


    return (
        <FullScreen handle={viewhandle} onChange={changeScreenState}>
            <div className='model-viewer p-1' >
                <div className="text-right">
                <button className="searchBtn" onClick={()=>setSearchState(!searchState)}><span className="glyphicon glyphicon-zoom-in"></span></button>
                <button className="fullBtn" onClick={()=>setFullScreen()}><i className="material-icons">fullscreen</i></button>
                </div>
                <div className="model text-center" > 
                    <div className={screenState?'lg-overlay':'overlay'} onDrag={ mousemovemethod }  draggable="true" ></div>               
                {
                    !searchState?                    
                    <img className={screenState?'model-full-img':'model-img'}  src={require('../../assets/images/'+props.typeofbed+'/'+props.typeofbed+'-'+img_num+'.jpg')} />                                    
                    :
                    <ImageZoom className={screenState?'model-full-img':'model-img'} src={require('../../assets/images/'+props.typeofbed+'/'+props.typeofbed+'-'+img_num+'.jpg')} onDrag={mousemovemethod} draggable='true' />                
                }
                </div>
                <div className="model-thumbnail row text-center">
                    <img className="thumbnail-img" src={require('../../assets/images/'+props.typeofbed+'/'+props.typeofbed+'-'+(img_num==1?24:img_num-1)+'.jpg')}  />                
                    <img className="thumbnail-img main-thumb" src={require('../../assets/images/'+props.typeofbed+'/'+props.typeofbed+'-'+img_num+'.jpg')} />                
                    <img className="thumbnail-img" src={require('../../assets/images/'+props.typeofbed+'/'+props.typeofbed+'-'+(img_num==24?1:img_num+1)+'.jpg')} draggable="false" />                
                </div>
            </div>
        </FullScreen>
    )
}
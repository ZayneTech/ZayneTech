import React from 'react';


const Icon = (props) => {

    const leftBottom = document.querySelectorAll("#Path_38");
    const leftMiddle = document.querySelectorAll("#Path_32");
    const leftTop = document.querySelectorAll("#Path_34");
    const top = document.querySelectorAll("#Path_30");
    const rightTop = document.querySelectorAll("#Path_28");
    const rightMiddle = document.querySelectorAll("#Path_26");
    const rightBottom = document.querySelectorAll("#Path_36");
    
    return (

    <svg xmlns="http://www.w3.org/2000/svg" width="50.516" height="54.599" viewBox="0 0 50.516 54.599" id="logo">
            {/*Zaynetech */}
        <g id="ZayneTechLogo_Dark_Blue" data-name="ZayneTechLogo Dark/Blue" transform="translate(-1572.61 -173.091)">

          {/* Left Bottom */}
        <g id="Path_21" data-name="Path 21" transform="matrix(0.766, 0.643, -0.643, 0.766, 1583.212, 209.795)">
            <path id="Path_38" data-name="Path 38" 
            d="M13.221,11.7
            H0
            L3.858,0
            H9.336Z" transform="translate(0.182 0.132)" fill={props.fill1}/>
            <path id="Path_39" data-name="Path 39" d="M4.136.264.365,11.7H13.22L9.423.264H4.136M3.945,0H9.614l3.972,11.961H0Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Left Middle */}
        <g id="Path_18" data-name="Path 18" transform="translate(1584.571 197.337) rotate(90)">
          <path id="Path_32" data-name="Path 32" 
          d="M13.221,11.7
          H0
          L3.858,0
          H9.336Z" transform="translate(0.182 0.132)" fill={props.fill2}/>
          <path id="Path_33" data-name="Path 33" d="M4.136.264.365,11.7H13.22L9.423.264H4.136M3.945,0H9.614l3.972,11.961H0Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Left Top */}
        <g id="Path_19" data-name="Path 19" transform="matrix(-0.766, 0.643, -0.643, -0.766, 1593.62, 188.232)">
          <path id="Path_34" data-name="Path 34" 
          d="M13.221,11.7
          H0
          L3.858,0
          H9.336Z" transform="translate(0.182 0.132)" fill={props.fill3}/>
          <path id="Path_35" data-name="Path 35" d="M4.136.264.365,11.7H13.22L9.423.264H4.136M3.945,0H9.614l3.972,11.961H0Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Top */}
        <g id="Path_17" data-name="Path 17" transform="translate(1604.652 185.052) rotate(180)">
          <path id="Path_30" data-name="Path 30" 
          d="M13.221,11.7
          H0
          L3.858,0
          H9.336
          l1.846,5.558Z" transform="translate(0.182 0.132)" fill={props.fill4}/>
          <path id="Path_31" data-name="Path 31" d="M4.136.264.365,11.7H13.22L11.239,5.731,9.423.264H4.136M3.945,0H9.614l1.876,5.648,2.1,6.313H0Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Right Top */}
        <g id="Path_16" data-name="Path 16" transform="matrix(0.766, 0.643, -0.643, 0.766, 1609.806, 179.069)">
          <path id="Path_28" data-name="Path 28" 
          d="M9.336,11.7
          H3.858
          L0,0
          H13.221Z" transform="translate(0.182 0.132)" fill={props.fill5}/>
          <path id="Path_29" data-name="Path 29" d="M9.423,11.7,13.22.264H.365L4.136,11.7H9.423m.19.264H3.945L0,0H13.586Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Right Middle */}
        <g id="Path_15" data-name="Path 15" transform="translate(1611.165 210.923) rotate(-90)">
          <path id="Path_26" data-name="Path 26" 
          d="M13.221,11.7
            H0L3.100,0
            H9.336Z" transform="translate(0.182 0.132)" fill={props.fill6}/>
          <path id="Path_27" data-name="Path 27" d="M4.136.264.365,11.7H13.22L9.423.264H.136M3.945,0H9.614l3.972,11.961H0Z" transform="translate(0 0)" fill="none"/>
        </g>

        {/* Right Bottom */}
        <g id="Path_20" data-name="Path 20" transform="matrix(0.766, -0.643, 0.643, 0.766, 1602.118, 218.528)">
          <path id="Path_36" data-name="Path 36" 
          d="M13.221,11.7
          H0
          L3.858,0
          H9.336Z" transform="translate(0.182 0.132)" fill={props.fill7}/>
          <path id="Path_37" data-name="Path 37" d="M4.136.264.365,11.7H13.22L9.423.264H4.136M3.945,0H9.614l3.972,11.961H0Z" transform="translate(0 0)" fill="none"/>
        </g>
      </g>
    </svg>
    )
}

export default Icon;
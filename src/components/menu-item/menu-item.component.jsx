import React from 'react';
import {withRouter} from 'react-router-dom';
//withRouter is a higher order component : is a function that take a component as argument and modify the component and return a new modified component.
import './menu-item.component.scss';

//react give to every html murkup element a style property (object).
const MenuItem = ({title , imageUrl , size , history,match,linkUrl}) => 
(
    <div  className={`${size} menu-item`} 
          onClick={() => history.push(`${match.url}hats`)}
    >
    {console.log(match.url)}
    <div className='background-image'
        style={
                {
                    backgroundImage:`url(${imageUrl})`
                }
               }
    
    />
    <div className='content'>
        <h1 className='subtitle'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);

export default withRouter(MenuItem);
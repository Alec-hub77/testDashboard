import React from 'react'
import './rightSide.scss'
import { RiArrowDropDownLine } from 'react-icons/ri';

const RightSide = () => {
const currency = ["USD", "EUR", "UAH", "PLN"]
    const [visibleMenu, setVisibleMenu] = React.useState(false);
   
    const [activeItem, setActiveItem] = React.useState(0);
    const activeLabel = currency[activeItem]

    console.log(activeLabel)
    
    const sortRef = React.useRef();
    
    const changeVisiblePopup = () => {
        setVisibleMenu(!visibleMenu)
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisibleMenu(false);
            
      };

    const handleOutsideClick = (e) => {
        if(!e.path.includes(sortRef.current)){
            setVisibleMenu(false)
        }
        
    }


    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick )
    },[])

    return (
        <div className="righSideWrapper">
            <div className="top">
                <h2>Dashboard profit currency</h2>
                <div className="selectContainer">
                    <div  className="select" ref={sortRef} onClick={changeVisiblePopup}>{activeLabel}<RiArrowDropDownLine/></div>
                   {visibleMenu && 
                    <div className="dropdownMenu">
                        <ul>
                            {currency.map((item, index) => (
                                <li
                                onClick={() => onSelectItem(index, item)} 
                                key={`${item}${index}`} 
                                >{item}</li>
                            ))}
                        </ul>    
                    </div> }
                     <span>Selected currency will effect all prifit in dashboard</span>   
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default RightSide

import "./DisplayItems.css" 


function DisplayItems(props) {  

    let getStorage = JSON.parse(localStorage.getItem("items"));
    //console.log(getStorage); 

    // implement delete item on button click
    function deleteItemOnClick(e) {
        let itemId = e.target.value;

        // hides the div that holds specific item
        // this was done to reflect changes immediately upon clicking
        // the delete item button
        document.querySelector(`#item${itemId}`).classList.add("hide")

        getStorage.splice(itemId, 1);
        localStorage.setItem("items", JSON.stringify(getStorage));    
        
        props.refreshTotal();
    }
    
    return (
        <div className="itemsContainer">            
            <ul >
            {getStorage.map((item, index) => {
          
            return <div className="liDiv" id={"item" + index} key={index}>
                <div>
                    <li className="itemCount">{index + 1}</li>
                </div>
                <div>
                <li className="liItemName">{item.userItem}</li>
                </div>
                <div>
                <li>£{item.userAmount}</li>
                </div>
                <div>
                <li>{item.userDateFormatted}</li>
                </div>
                <div>
                    <button id={"closeBtn"+index} value={index} onClick={deleteItemOnClick} className="closeBtn">X</button>
                </div>
            </div>
        })}          
            </ul>
        </div>
    )
}
export default DisplayItems;
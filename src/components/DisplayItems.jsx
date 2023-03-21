import "./DisplayItems.css" 


function DisplayItems(props) {  

    let getStorage = JSON.parse(localStorage.getItem("items"));
    console.log(getStorage);

    // implement delete item on button click
    function deleteItemOnClick() {
        console.log("clicked!");
    }

    return (
        <div>            
            <ul>
                {getStorage.map((item, index) => {
                    // 
                    return <div className="liDiv" key={index}>
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
                            <button onClick={deleteItemOnClick} className="closeBtn">X</button>
                        </div>
                    </div>
                })}
                
            </ul>
        </div>
    )
}
export default DisplayItems;
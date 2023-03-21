import "./DisplayItems.css" 


function DisplayItems(props) {  

    let getStorage = JSON.parse(localStorage.getItem("items"));
    console.log(getStorage);
    return (
        <div>            
            <ul>
                {getStorage.map((item, index) => {
                    // 
                    return <div className="liDiv" key={index}>
                        <li>{item.userItem}</li>
                        <li>{item.userAmount}</li>
                        <li>{item.userDateFormatted}</li>
                    </div>
                })}
                {/* <li>{"item 1"}</li>
                {props.items.map((item, index) => {
                    return (
                    <div className="liDiv" key={index}>
                    <li>{item.item}</li>
                    <li>£{item.amount}</li>
                    <li className="liDate">{item.date}</li>
                </div>);
                })} */}
            </ul>
        </div>
    )
}
export default DisplayItems;
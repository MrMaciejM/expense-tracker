import "./DisplayItems.css" 


function DisplayItems(props) {  

    return (
        <div>            
            <ul>
                <li>{"item 1"}</li>
                {props.items.map((item, index) => {
                    return (
                    <div className="liDiv" key={index}>
                    <li>{item.item}</li>
                    <li>{item.amount}</li>
                    <li>{item.date}</li>
                </div>);
                })}
            </ul>
        </div>
    )
}
export default DisplayItems;
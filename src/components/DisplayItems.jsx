import "./DisplayItems.css" 


function DisplayItems(props) {
    return (
        <div>            
            <ul>
                <li>{"item 1"}</li>
                <li>{props.userInput}</li>
            </ul>
        </div>
    )
}
export default DisplayItems;
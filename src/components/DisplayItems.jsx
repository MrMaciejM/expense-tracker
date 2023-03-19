import "./DisplayItems.css" 


function DisplayItems(props) {

    let array = [];
    let checkStorage = JSON.parse(localStorage.getItem("items"));
    //check if localStorage exists 
    if(checkStorage == null) {
        localStorage.setItem("items", JSON.stringify([])); 
    }
    
    let getStorage = JSON.parse(localStorage.getItem("items"));  //|| [];

    //console.log(getStorage); // []

    function pushToLocalStorage() {
        array = getStorage.slice(); // creates copy of getStorage 
        if(props.userInput) {
          array.push(props.userInput);
        }
        //array.push("test");  
        console.log("Ran push to storage");
        localStorage.setItem("items", JSON.stringify(array)); 
    }

    return (
        <div>            
            <ul>
                <li>{"item 1"}</li>
                {props.items.map((item, index) => {
                    return (
                    <div className="liDiv" key={index}>
                    <li>{item.item}</li>
                    <li>{item.amount}</li>
                </div>);
                })}
            </ul>
        </div>
    )
}
export default DisplayItems;
import "./Dashboard.css";
import Form from "./Components/Form";
import Items from "./Components/Items";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <Form></Form>
      <Items></Items>
    </div>
  );
}

export default Dashboard;

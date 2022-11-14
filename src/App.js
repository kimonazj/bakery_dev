
import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery_data.json";
import FilteredList from "./components/FilteredList.js";
import DisplayList from './components/DisplayList';
import Title from './components/Title';
import {Row, Col, Divider} from 'antd';

function App() {
  // use state to change display list
  const [list, setList] = useState([bakeryData])
  // update the list that will display on the screen
  function updateList(newlist){
    setList([newlist]);
  }

  // use state for the aggregator
  const [totalCal, setTotalCal] = useState(0)
  const [calList, setCalList] = useState([])

  function updateCal(checkstatus, item){
    if (checkstatus === true){
      setTotalCal(totalCal+item.cal);
      setCalList([...calList, item.name]);
    } else{
      setTotalCal(totalCal-item.cal);
      const filteredCal = calList.filter(x => x !== item.name)
      setCalList(filteredCal);
    }
  }

  return (
    <div className="App">
      {/* display header */}
      <Title/>
      {/* display the filtered list */}
      <Row gutter={[3,5]}>
        <Col xs={24} md={6} offset={1}>
          {/* Sort List selector and filters checkboxes */}
          <FilteredList theFullList={bakeryData} setFilterList={updateList} curList={list[0]}/>
          <h3>Calories Calculator</h3>
          {calList.map((x)=>(<p>{x}</p>))}
          <p>Total Calories: {totalCal}</p>
        </Col>
        <Col xs={24} md={17}>
          <Row gutter={[5,5]}>
            {/* Display cards */}
            <Divider></Divider>
            {list[0].map((x) =>(<DisplayList curItem = {x} calList={calList} calFunction={updateCal}/>))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;

// passed in the function and the list; filter the list and use setState to pass the filtered list the App
// param: theFullList([]: backeryData), set display list function (fun: updateList)
import { Select } from 'antd';
import { Checkbox, Divider, Row} from 'antd';
export default function FilteredList({theFullList, setFilterList, curList}){

    function sortChange(value){
        if (value === "Pop"){
            const filteredList = curList.sort((a, b)=>a.pop - b.pop)
            setFilterList(filteredList)
        } else if(value === "Cal"){
            const filteredList = curList.sort((a, b)=>b.cal - a.cal)
            setFilterList(filteredList)
        } else if(value === "Price"){
            const filteredList = curList.sort((a, b)=>b.price - a.price)
            setFilterList(filteredList)
        } 
        else{
            setFilterList(theFullList)
            console.log("else")
        }
    }

    function filterChange(checkedValues){
        console.log(checkedValues)
        if (checkedValues.includes("Gluten") && checkedValues.includes("Dairy")){
            var filteredList = theFullList.filter(x => x.gluten === false)
            filteredList = filteredList.filter(x => x.dairy === false)
            setFilterList(filteredList)
        }
        else if (checkedValues.includes("Gluten")){
            const filteredList = theFullList.filter(x => x.gluten === false)
            setFilterList(filteredList)
        } 
        else if (checkedValues.includes("Dairy")){
            const filteredList = theFullList.filter(x => x.dairy === false)
            setFilterList(filteredList)
        }else{
            console.log(theFullList)
            setFilterList(theFullList)
        }
    }

    return(
        <>
        <Divider></Divider>
        <h4>From most to least</h4>
        <Select defaultValue="Sort by popularity"
            style={{ width: 220, }}
            bordered={true}
            onChange={sortChange}
            options={[
            {
            value: 'Pop',
            label: 'Sort by Popularity',
            },
            {
            value: 'Cal',
            label: 'Sort by Calories',
            },
            {
            value: 'Price',
            label: 'Sort by Price',
            },
            ]}
        />
        <Divider></Divider>
        <Checkbox.Group onChange={filterChange}>
            <Row>
                <Checkbox defaultchecked={false}  value='Gluten'>Gluten-Free</Checkbox>
            </Row>
            <Row>
                <Checkbox defaultchecked={false}  value='Dairy'>Dairy-Free</Checkbox>
            </Row>
        </Checkbox.Group>
        <Divider></Divider>
        </>
    )
}
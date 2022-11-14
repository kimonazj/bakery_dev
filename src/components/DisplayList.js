// render the filtered list
import {Card,Checkbox,Image, Col, Divider} from 'antd'

export default function DisplayList({curItem, calFunction, calList}){
    function ifChecked(){
        if (calList.includes(curItem.name)){
            return true
        }else{
            return false
        }
    }

    return(
        <>
        <Col className='gutter-row' xs={23} md={10} xl={6} offset={1}>
            <Card title={curItem.name} cover={<Image src={curItem.image}/>} >
                <p>{curItem.description}</p>
                <Divider></Divider>
                <p>Calories: {curItem.cal}</p>
                <p>Price: {curItem.price}</p>
                <Checkbox defaultchecked={false} checked={ifChecked()} onClick={(e)=>{calFunction(e.target.checked, curItem)}}>Add to see total calories</Checkbox>
            </Card>
        </Col>
        </>
    )
}
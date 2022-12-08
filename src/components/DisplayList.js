// render the filtered list
import {Card,Checkbox,Image, Col, Divider} from 'antd'
import '../App.css';

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
            <Card className="card" title={<b className='card-title'>{curItem.name}</b>} cover={<Image className="card-img" src={curItem.image}/>} >
                <p className='card-info'>{curItem.description}</p>
                <Divider></Divider>
                <p>Calories: {curItem.cal}</p>
                <p>Price: {curItem.price}</p>
                <Checkbox className="card-info" defaultchecked={false} checked={ifChecked()} onClick={(e)=>{calFunction(e.target.checked, curItem)}}>Add to see total calories</Checkbox>
            </Card>
        </Col>
        </>
    )
}
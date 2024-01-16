import React, { useState } from 'react';
import { Button, Form, Input, Select, Space,Card, Col, Row  } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Payment = () => {

const[payments,setPayments] = useState([])
const[currentItm,setCurrentItm] = useState("")

  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios({
      url:"http://localhost:8080/payment",
      method: "POST",
      data:{
        amount: values.amount,
        type:values.paymentType
      }
    }).then(res=>{
        getPayments()
        form.resetFields();
    })
  };

  function handleDrop(param){
    axios({
      url:"http://localhost:8080/payment/" + currentItm,
      method: "PUT",
      data:{
        type:param
      }
    }).then(res=>{
        getPayments()
    })
  }

function DragStart(id){
  setCurrentItm(id)
}
  useEffect(()=>{
    getPayments()
      },[])
      function getPayments(){
        axios({
          url: "http://localhost:8080/payment",
          method: "GET"
        }).then(res=>{
          setPayments(res.data)
        })
      }
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
    <Form
      {...layout}
      form={form}
      onFinish={onFinish}
      name="control-hooks"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="paymentType"
        label="Type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="payment type..."
          allowClear
        >
          <Option value="CLICK">Click</Option>
          <Option value="MANDARIN">Mandarin</Option>
          <Option value="BANK">Bank</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button  htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
    <Row gutter={16}>
      <Col span={8}>
        <Card onDrop={()=>handleDrop("CLICK")} onDragOver={(e)=>{e.preventDefault()}}  title="Click" bordered={false}>
          {
            payments.filter(item1=>item1.type==="CLICK").map((item,index)=>{
              return(
                <div  onDragStart={()=>DragStart(item.id)} key={index}  draggable={true} className='d-flex align-items-center gap-3 bg-primary p-3 m-3' style={{borderRadius:"5px"}}>
                 <div className='' style={{color:"white", fontSize: "20px"}}>Id: {item.id}</div>
                 <div style={{color:"white", fontSize: "20px"}}>Amount: {item.amount}</div>
               </div>
              )
            })
          }
          
        </Card>
      </Col>
      <Col span={8}>
        <Card onDrop={()=>handleDrop("MANDARIN")} onDragOver={(e)=>{e.preventDefault()}}  title="Mandarin" bordered={false}>
        {
            payments.filter(item1=>item1.type==="MANDARIN").map((item,index)=>{
              return(
                <div onDragStart={()=>DragStart(item.id)}  key={index} draggable={true} className='d-flex align-items-center gap-3 bg-primary p-3 m-3' style={{borderRadius:"5px"}}>
                 <div className='' style={{color:"white", fontSize: "20px"}}>Id: {item.id}</div>
                 <div style={{color:"white", fontSize: "20px"}}>Amount: {item.amount}</div>
               </div>
              )
            })
          }
        </Card>
      </Col>
      <Col span={8}>
        <Card onDrop={()=>handleDrop("BANK")} onDragOver={(e)=>{e.preventDefault()}}  title="Bank" bordered={false}>
        {
            payments.filter(item1=>item1.type==="BANK").map((item,index)=>{
              return(
                <div onDragStart={()=>DragStart(item.id)} key={index} draggable={true} className='d-flex align-items-center gap-3 bg-primary p-3 m-3' style={{borderRadius:"5px"}}>
                 <div className='' style={{color:"white", fontSize: "20px"}}>Id: {item.id}</div>
                 <div style={{color:"white", fontSize: "20px"}}>Amount: {item.amount}</div>
               </div>
              )
            })
          }
        </Card>
      </Col>
    </Row>
</>
  );
};
export default Payment;
import React, {useEffect, useState} from 'react';
import { Table as ATable, Tag, Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import './Chart.css'; 
import { Pie } from '@ant-design/charts';

function Dashboard(props) {
    const [colleges, setColleges] = useState([]);
    const [students, setStudents] = useState([]);
    const [displayCollege, setDisplayCollege] = useState(false);
    const [statefilter, setStateFilter] = useState(true);
    const getStudents = ()=>{
        fetch("https://api-query.herokuapp.com/get/students")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        },(error)=>{
            console.log(error);
        });
    } 
    const getColleges = ()=>{
        fetch("https://api-query.herokuapp.com/get/colleges")
        .then(res=>res.json())
        .then((result)=>{
            for (let i=0; i<result.length; i++)
                result[i] = Object.assign(result[i],{key:(result[i].id).toString()});
            setColleges(result);
            // console.log(result);
        },(error)=>{
            console.log(error);
        });
    } 
    useEffect(()=>{getStudents();},[]);
    useEffect(()=>{getColleges();},[]);

    
      let config = {
        appendPadding: 10,
        data: colleges,
        angleField: 'noStudents',
        colorField: statefilter?'state':'courses',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-30%',
          content: function content(_ref) {
            var percent = _ref.percent;
            return ''.concat((percent * 100).toFixed(0), '%');
          },
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      };
      const tablemenu = (
        <Menu>
          <Menu.Item danger onClick={() => {setDisplayCollege(true)}} key="0">
            Colleges
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item danger onClick={() => {setDisplayCollege(false)}} key="1">
            Students
          </Menu.Item>
        </Menu>
      );
      const chartmenu = (
        <Menu>
          <Menu.Item danger onClick={() => {setStateFilter(true)}} key="0">
            State
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item danger onClick={() => {setStateFilter(false)}} key="1">
            Courses
          </Menu.Item>
        </Menu>
      );
    
    return (
      <>
            {/* <div className="shape"></div> */}
        {/* <div className="Wrapper">   */}
          {/* <div className="Container left">
            <Dropdown overlay={tablemenu} trigger={['click']}>
              <Button type="primary">{displayCollege?"Colleges":"Students"}<DownOutlined /></Button>
            </Dropdown>
            {displayCollege?
            (<ATable dataSource={colleges} columns={CollegeSchema} className="table"/> )
            :(
            <ATable dataSource={students} columns={StudentSchema} className="table"/> 
            )}
          </div> */}
          <div className="Container right">
            <Dropdown overlay={chartmenu} trigger={['click']}>
              <Button type="primary">{statefilter?"State":"Courses"}<DownOutlined /></Button>
            </Dropdown>
            <Pie {...config} />
            </div>
        {/* </div> */}
        </>
    );
}

export default Dashboard;
import React, {useEffect, useState} from 'react';
import { Table as ATable, Tag, Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import './Table.css'; 

function Table(props) {
    const [colleges, setColleges] = useState([]);
    const [students, setStudents] = useState([]);
    const [displayCollege, setDisplayCollege] = useState(true);
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

    const StudentSchema = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a,b)=>a.id-b.id
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
          },
        {
            title: 'College Id',
            dataIndex: 'collegeId',
            key: 'collegeId',
            sorter: (a,b)=>a.collegeId-b.collegeId
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
            render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              )
        }
      ];
      
      const CollegeSchema = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a,b)=>a.id-b.id
          },
          {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
          sorter: (a,b)=>a.year-b.year
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
            title: 'Students',
            dataIndex: 'noStudents',
            key: 'noStudents'
        },
        {
            title: 'Courses',
            dataIndex: 'courses',
            key: 'courses',
            render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              )
        }
      ];

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

    
    return (
      <>
            {/* <div className="shape"></div> */}
        {/* <div className="Wrapper">  className="Container left" */}
          <div className="Container left">
            <Dropdown overlay={tablemenu} trigger={['click']}>
              <Button type="primary">{displayCollege?"Colleges":"Students"}<DownOutlined /></Button>
            </Dropdown>
            {displayCollege?
            (<ATable dataSource={colleges} columns={CollegeSchema} className="table"/> )
            :(
            <ATable dataSource={students} columns={StudentSchema} className="table"/> 
            )}
            {/* <Pagination
              defaultPageSize={20}
            /> */}
          </div>
          {/* <div className="Container right">
            <Dropdown overlay={chartmenu} trigger={['click']}>
              <Button type="primary">{statefilter?"State":"Courses"}<DownOutlined /></Button>
            </Dropdown>
            <Pie {...config} />
            </div> */}
        {/* </div> */}
        </>
    );
}

export default Table;
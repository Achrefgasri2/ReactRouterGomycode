import React from 'react'
import {Form ,FormControl } from 'react-bootstrap';
import { Rate } from 'antd';
import './Filter.css'

const Filter = ({title, setTitle , rate , setRate}) => {
    

 

    return (
        <div className="filter">
          
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

            </Form>
            <span><Rate onChange={(rate) => setRate(rate)} value={rate} /></span>
        </div>
    )
}

export default Filter

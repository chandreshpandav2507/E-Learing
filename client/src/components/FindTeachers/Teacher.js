import React from 'react';

import './Teacher.css'

import { Button } from '@material-ui/core'
import { connect } from 'react-redux';

import { hireTeacher } from '../../store/actions/student'

const loadScript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })

}

const __DEV__ = document.domain === 'localhost'

const Teacher = (props) => {

  /* const hireHandler = (id) => {
    console.log(id)
    props.addTeacherToStudent(id.toString())
  } */
  async function displayRazorpay (id, amount) {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res) {
      alert('Razorpay SDK fail to load! Are you online?')
      return 
    }

    const data = await fetch('http://localhost:4000/payment', { method: 'POST'}).then(result => result.json())

    console.log(data)

    const options = {
      "key": __DEV__ ? 'rzp_test_PSwyr1a6iFSICI' : 'PRODUCTION KEY', // Enter the Key ID generated from the Dashboard
      "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": data.currency,
      "name": "Hire A Teacher",
      "description": "Thank you for hire me!",
      "image": "https://example.com/your_logo",
      // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      "handler": function (response){
          /* alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature) */
          props.addTeacherToStudent(id.toString())
      },
      "prefill": {
          "name": "Dharmik Pandav"
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open()
  } 
  
  
  return (
    <div className='row mx-auto'>
    {props.data.map((teacher, index) => (
      <div key ={index} className="col-sm-6 col-md-4">
        <div className="card">
          <div className="image mx-auto">
            <img src="https://image.shutterstock.com/image-vector/male-teacher-standing-front-blackboard-260nw-402654784.jpg" alt='Not found'/>
          </div>
          <div className="card-inner">
            <div className="header sm-6">
              <h2 className='font-weight-boldtext-info'>  
                {teacher.firstName} {teacher.lastName}
              </h2>
            </div>
            <div className="d-flex">
              <div className='p-2'>
                <h5>{teacher.degree}</h5>
              </div>
              <div className='ml-auto p-2'>
                <p className="font-weight-bold text-success"><span><h5>₹ {teacher.ratePerHour}</h5> </span>Per Hour. </p>
              </div>
            </div>
            <div className="content">
                <ul className='row' style={{listStyle: 'none', marginLeft: '-10%'}}>
                  {teacher.subjects.map((subject, index) => (
                    <li className='list-group-item m-1 rounded border-primary bg-primary text-white' key={index}>{subject}</li>
                ))}
              </ul>
            </div>
            <div className="content">
              <p className="font-weight-bold ml-1">Lanuage Known: </p>
              <ul className='row' style={{listStyle: 'none', marginLeft: '-10%'}}>
                {teacher.languageKnown.map((language, index) => (
                  <li className='list-group-item m-1 rounded bg-warning border-dark' key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* <Button variant='contained' color="primary" onClick={() => hireHandler(teacher._id)}>HIRE NOW</Button> */}
          <Button variant='contained' color="primary" onClick={() => displayRazorpay(teacher._id, teacher.ratePerHour)}>HIRE NOW</Button>
        </div>
      </div>
    ))}
    
  </div>
  );
}

const mapStateToProps = state => {
  return {
    gotTeacher: state.teacherReducer.teacherById
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTeacherToStudent: (id) => dispatch(hireTeacher(id)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher)


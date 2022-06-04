import React, {  } from 'react';
import {useForm, useStep} from 'react-hooks-helper'
// import { useHistory } from "react-router-dom";

import PersonalDetials from './PersonalDetails'
import OtherDetails from './OtherDetails'
import ReviewDetails from './ReviewDetails';
// import SubmitDetails from './SubmitDetails';

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  subjects: [],
  languageKnown: [],
  address: '',
  degree:'',
  universityName:'',
  ratePerHour: 100
}

const steps = [
  {id: 'Personal Details'},
  {id: 'Other Details'},
  {id: 'Review Details'},
  {id: 'Submit Details'}
]

const TeacherSignup = () => {
  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })

  const propsData = { formData, setFormData, navigation}
  switch (step.id) {
    case 'Personal Details':
      return <PersonalDetials {...propsData}/>
    case 'Other Details':
      return <OtherDetails {...propsData} />
    case 'Review Details':
      return <ReviewDetails {...propsData} />
    /* case 'Submit Details':
      return <SubmitDetails {...propsData} /> */
    default: 
      return ''
  }

}

export default TeacherSignup
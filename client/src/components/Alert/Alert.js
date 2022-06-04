import React from 'react'
import { connect } from 'react-redux'

const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}style={{textAlign: 'center'}}>
        {alert.msg}
    </div>
))

const mapStateToProps = state => {
    return {
        alerts: state.alertReducer
    }
}

export default connect(mapStateToProps)(Alert)

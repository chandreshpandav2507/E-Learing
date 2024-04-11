import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment'
import {isEmpty} from "lodash";
import {getTeachers} from "../../store/actions/student";

const AdminTeachers = () => {
    const dispatch = useDispatch();

    const { allTeachers } = useSelector(state => state.studentReducer)

    useEffect(() => {
        if(isEmpty(allTeachers)) {
            dispatch(getTeachers());
        }
    }, [allTeachers]);

    return (
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">Queries</h2>
                {!isEmpty(allTeachers) ? <div className='row mx-auto'>
                        <table className="ml-3 mt-3 table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {allTeachers.map((classOne, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{`${classOne.firstName || ''} ${classOne.lastName || ''}`}</td>
                                    <td>{classOne.email}</td>
                                    <td>{moment(classOne.createdAt).format('DD-MM-YYYY')}</td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                    : <div className='mx-auto'>
                        <h2 className='mt-5 mb-5 ml-3 text-danger font-weight-bold'>No Classes Found!</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminTeachers;
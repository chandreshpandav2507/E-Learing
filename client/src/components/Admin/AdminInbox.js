import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment'
import {getAllQueries} from "../../store/actions/teacher";
import {isEmpty} from "lodash";
import EmptyPlaceholder from "../EmptyData";
import Typography from "@material-ui/core/Typography";

const AdminInbox = () => {
    const dispatch = useDispatch();

    const { queries } = useSelector(state => state.teacherReducer)
    console.log('queries', queries);

    useEffect(() => {
        dispatch(getAllQueries())
    }, [])

    return (
        <div className="page-content page-container">
            <div className="padding">
                <h2 className="ml-3">Queries</h2>
                {!isEmpty(queries) ? <div className='row mx-auto'>
                    <table className="ml-3 mt-3 table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">email</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {queries.map((classOne, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{classOne.email}</td>
                                <td>{classOne.message}</td>
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

export default AdminInbox;
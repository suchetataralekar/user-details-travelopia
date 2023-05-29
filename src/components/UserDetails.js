import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/user-slice";
import "./UserDetail.css";
import { commonSliceActions } from "../store/common-slice";

const UserDetail = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => ({ ...state.user }));

    useEffect(() => {
        if (user.id) dispatch(getUser(user.id));
    }, [user.id]);

    const handleBack = () => {
        dispatch(commonSliceActions.setShowUserDetails(false));
    };

    return (
        <>
            <div className="card">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="6">User Details</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{user.country}</td>
                        </tr>
                        <tr>
                            <td>Total no of travellers</td>
                            <td>{user.travellerCount}</td>
                        </tr>
                        <tr>
                            <td>Total Budget</td>
                            <td>{user.totalBudget}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="button">
                <button onClick={handleBack}>Back</button>
            </div>
        </>
    );
};

export default UserDetail;



import React, { useState } from "react";
function Form({ state, setState, handleClose, initialData, EditIndex, handleUpdate }) {



    const [userName, setUserName] = useState(initialData?.name || "");
    const [userJob, setUserJob] = useState(initialData?.job || "");
    const [statusType, setStatusType] = useState(initialData?.type || "Company");
    const [statusJob, setStatusJob] = useState(initialData?.status || "Chưa hoàn thành");
    const [userProgress, setUserProgress] = useState(initialData?.progress || "");

    const saveDataLocal = (data) => {
        const existingData = localStorage.getItem('formData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        const newData = [...parsedData, data];
        localStorage.setItem('formData', JSON.stringify(newData));
    }

    // const [userName, setUserName] = useState("")

    // const handleName = (e) => {
    //     setUserName(e.target.value);
    //     console.log(e.target.value);
    // }

    // const [userJob, setUserJob] = useState("")
    // const handleJob = (e) => {
    //     setUserJob(e.target.value);
    //     console.log(e.target.value);
    // }

    // const [statusType, setStatusType] = useState("Company")
    // const handleType = (e) => {
    //     setStatusType(e.target.value);
    //     console.log(e.target.value);
    // }

    // const [statusJob, setStatusJob] = useState("Chưa hoàn thành")
    // const handleStatus = (e) => {
    //     setStatusJob(e.target.value);
    //     console.log(e.target.value);
    // }

    // const [userProgress, setUserProgress] = useState("")
    // const handleProgress = (e) => {
    //     setUserProgress(e.target.value);
    //     console.log(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: userName,
            job: userJob,
            type: statusType,
            status: statusJob,
            progress: userProgress,
        }
        // console.log(user);
        // setState([...state, user]);
        // saveDataLocal(user);
        // setState([...state, user]);
        // handleClose()
        if (EditIndex !== null) {
            handleUpdate(user);
        } else {
            setState([...state, user]);
        }
        saveDataLocal([...state, user]);
        handleClose();
    }





    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin công việc</h3>
                    <form className="form-sample" onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    placeholder="Nhập tên nhân viên" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Công việc</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={userJob}
                                    onChange={e => setUserJob(e.target.value)}
                                    placeholder="Nhập công việc cần làm" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Type</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={statusType}
                                    onChange={e => setStatusType(e.target.value)}
                                >
                                    <option>Home</option>
                                    <option>Company</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Trạng thái</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={statusJob}
                                    onChange={e => setStatusJob(e.target.value)}
                                >
                                    <option>Đã hoàn thành</option>
                                    <option>Chưa hoàn thành</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Deadline</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={userProgress}
                                    onChange={e => setUserProgress(e.target.value)}
                                    placeholder="XX/XX/XXXX" />
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button type="submit" className="btn btn-primary me-2" onClick={handleClose}>Close</button>
                        <button type="submit" className="btn btn-primary me-2">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
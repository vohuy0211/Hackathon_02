import React from "react";

function List({ handleClickControl, state,handleUpdate,setIsEditFormVisible,setEditIndex ,handleShowEditForm}) {

  
    
      
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table no-wrap user-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 text-uppercase font-medium pl-4" />
                                        <th scope="col" className="border-0 text-uppercase font-medium">Tên</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Công việc</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Type</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Dealine</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Trạng thái</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((Job, index) =>
                                        <tr key={index}>
                                            <td className="pl-4">{index + 1}</td>
                                            <td>
                                                <h6 className="font-medium mb-0">{Job.name}</h6>
                                            </td>
                                            <td>
                                                <span className="text-muted">{Job.job}</span><br />
                                                
                                            </td>
                                            <td>
                                                <select className="form-control category-select" id="exampleFormControlSelect1"
                                                defaultValue={Job.type}>
                                                    <option>Home</option>
                                                    <option>Company</option>
                                                </select>
                                            </td>
                                            <td>
                                                <span className="text-muted" >{Job.progress}</span><br/>
                                            </td>
                                            <td>
                                                <select className="form-control category-select" id="exampleFormControlSelect1" 
                                                defaultValue={Job.status}>
                                                    <option>Đã hoàn thành</option>
                                                    <option>Chưa hoàn thành</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2" onClick={() => handleShowEditForm(index, 'edit')}><i class="fa-regular fa-pen-to-square"></i>Edit</button>
                                                <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa-regular fa-trash"></i>Delete</button>

                                            </td>
                                        </tr>

                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default List;
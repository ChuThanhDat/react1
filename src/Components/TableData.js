import React, { Component } from 'react';
import TableDataRaw from './TableDataRaw';

class TableData extends Component {
 
   deleteButtonClick=(idUser)=>{
     this.props.deleteUser(idUser);
     
   }
  mappingDataUser=()=>
    this.props.dataUserPops.map((value,key)=>(
      <TableDataRaw 
      deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
      editFunClick={()=>this.props.editFun(value)} 
      id={value.id}
      username={value.name} 
      key={key} stt={key} 
      tel={value.tel}
     permission={value.permission}
     changeEditUserStatus={()=>this.props.changeEditUserStatus()}
     >
     </TableDataRaw>
    ))
  

  
  render() {
        return (       
 <div className="col">
  <table className="table table-striped table-hover">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    <tbody>
      {this.mappingDataUser()}
    </tbody>
  </table>
</div>

            
        );
    }
}

export default TableData;
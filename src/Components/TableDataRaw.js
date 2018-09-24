import React, { Component } from 'react';

class TableDataRaw extends Component {
    quyen=()=>{
        if(this.props.permission===1)
        return ("Admin");
        else if(this.props.permission===2)
        return("Moderator");
        else return("Normal User")
    }
    editClick=()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus()
    }

    deleteButtonClick=(idUser)=>{
        this.props.deleteButtonClick(idUser);      
    }
    render() {
        return (
            <tr>
        <td >{this.props.stt+1}</td>
        <td>{this.props.username}</td>
        <td>{this.props.tel}</td>
        <td>{this.quyen()}</td>
        <td>
          <div className="btn btn-warning" onClick={()=>this.editClick()}><i className="fa fa-edit ">Sửa</i></div> 
          <div className="btn btn-danger" onClick={()=>this.deleteButtonClick(this.props.id)}><i className="fa fa-delete ">Xóa</i></div> 
        </td>
      </tr>
            
        );
    }
}

export default TableDataRaw;
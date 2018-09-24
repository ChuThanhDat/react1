import React, { Component } from 'react';

class EditUser extends Component {
 constructor(props){
     super(props);
     this.state={
         id:this.props.userEditObject.id,
         name:this.props.userEditObject.name,
         tel:this.props.userEditObject.tel,
         permission:this.props.userEditObject.permission
     }
 }

    saveButton=()=>{
        var info={};
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permission=this.state.permission;
        console.log('info la '+info.id);
        
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value});
    }
    render() {
        return (
            
            <div className="card text-white bg-secondary mb-3 mt-2">
            <div className="card-header"> Sửa User </div>
            <div className="card-body text-primary">
            <form>
              <div className="form-group">
                <input  onChange={(event)=>{this.isChange(event)}} defaultValue={this.props.userEditObject.name}  name="name" type="text" className="form-control"  placeholder="Tên User" /></div>
              <div className="form-group">
                <input onChange={(event)=>{this.isChange(event)}} defaultValue={this.props.userEditObject.tel} name="tel" type="text" className="form-control"  placeholder="Số điện thoại" /></div>
              <div className="form-group">
                <select onChange={(event)=>{this.isChange(event)}} defaultValue={this.props.userEditObject.permission} onChange={(event)=>{this.isChange(event)}} name="permission" className="custom-select" required>
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Morator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input type="button" className="btn btn-block btn-primary" value="Save" onClick={()=>this.saveButton()} />
              </div>
              </form>  
            </div>
          </div> 
        
            
        );
    }
}

export default EditUser;
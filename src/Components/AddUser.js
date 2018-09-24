import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permission:""
    }
  }  


   isChange =(event)=>{
     const name = event.target.name;
     const value = event.target.value;
     this.setState({
      [name]:value
     })
     var item={};
     item.id=this.state.id;
     item.name=this.state.name;
     item.tel=this.state.tel;
     item.permission=this.state.permission;
     //console.log(item);
     
   }

  kiemtratrangthai=()=>{
    if(this.props.hienthiform===true)
      return(
        <div className="col">
           
             <div className="card border-primary mb-3 mt-2">
      <div className="card-header">Thêm mới User vào hệ thống </div>
      <div className="card-body text-primary">
      <form>
        <div className="form-group">
          <input onChange={(event)=>{this.isChange(event)}}  name="name" type="text" className="form-control"  placeholder="Tên User" /></div>
        <div className="form-group">
          <input onChange={(event)=>{this.isChange(event)}} name="tel" type="text" className="form-control"  placeholder="Số điện thoại" /></div>
        <div className="form-group">
          <select onChange={(event)=>{this.isChange(event)}} name="permission" className="custom-select" required>
            <option value>Chọn quyền mặc định</option>
            <option value={1}>Admin</option>
            <option value={2}>Morator</option>
            <option value={3}>Normal</option>
          </select>
        </div>
        <div className="form-group">
          <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.add(this.state.name,this.state.tel,this.state.permission)} value="thêm mới" />
        </div>
        </form>  
      </div>
    </div> 
 
    </div>      
      )    
  }
  
  render() {
    
        return (           
      <div>
        {this.kiemtratrangthai()}   
     </div>          
        );
    }
}

export default AddUser;
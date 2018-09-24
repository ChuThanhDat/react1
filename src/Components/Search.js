import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
   constructor(props){
       super(props);
       this.state={
           tempValue:'',
           userObj:{}
       }
   }
   
   GetText=(event)=>{    
       this.setState({tempValue:event.target.value});
        this.props.checkConnectProps(this.state.tempValue)
   }

    hienthinut=()=>{
        if(this.props.hienthiform===true){
            return  <div className="btn btn-block btn-outline-info" onClick={()=>this.props.doitrangthai()} >Đóng</div>
        }
        else return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.doitrangthai()} > Thêm mới</div>
      } 

      getUserEditInfo=(info)=>{
       this.setState({ 
           userObj:info
       });
       this.props.getUserEditInfoApp(info);
      }

      isShowEditForm=()=>{
          if(this.props.editUserStatus===true){
              return <EditUser changeEditUserStatus={()=>{this.props.changeEditUserStatus()}}
              userEditObject={this.props.userEditObject}
              getUserEditInfo={(info)=>{this.getUserEditInfo(info)}}
              ></EditUser>
          }

      }
    
    render() {
        return (              
                 
                             <div className="col-12">
                              {this.isShowEditForm()}  
                             <div class="row">
                             </div>
                         <div className="form-group">
                        <div className="btn-gruop">
                           <input className="col-3" type="text"  placeholder="Nhập từ khóa"  />
                         <div className="btn btn-info col-1" >Tìm</div>
                            </div>
                           <div>
                          
                             {this.hienthinut()}
                           </div> 
                       </div>
                        </div>
                       
                  

            
        );
    }
}

export default Search;
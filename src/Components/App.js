import React, { Component } from 'react'
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hienthiform:false,
      data:DataUser,
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }

  deleteUser=(idUser)=>{
    var tempData=this.state.data.filter(item=>item.id!=idUser);
    this.setState({
      data:tempData
    })
  }

  getUserEditInfoApp=(info)=>{
    console.log("thongtin da sua la "+info.name);
    
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permission=info.permission;
      }
    })
    
  }
  
 changeEditUserStatus=()=>{
   this.setState({
    editUserStatus:!this.state.editUserStatus
   })
 } 
editUser=(user)=>{
  console.log('da ket noi edit');
  this.setState({
    userEditObject:user
  })
  console.log(user);
  }
  

  getNewUserDate = (name,tel,permission)=>{
    var item={};
    item.id=uuidv1();
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    console.log(items);
    
    
  }
  

  getTextSearch=(dl)=>{
    this.setState({
     searchText:dl
    });
  }

  doitrangthai=()=>{
    this.setState({
    hienthiform:!this.state.hienthiform
    });
    }
  

  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!==-1){
        ketqua.push(item);
      }
    })
    
    
    return (

      <div>
        <Header></Header>
        <div className="searchForm">
        <div className="container">
        <div className="row">
        <Search  checkConnectProps={(dl)=>this.getTextSearch(dl)}  
        doitrangthai={()=>this.doitrangthai()} 
        hienthiform={this.state.hienthiform}
        editUserStatus={this.state.editUserStatus}
        changeEditUserStatus={()=>this.changeEditUserStatus()}
        userEditObject={this.state.userEditObject}
        getUserEditInfoApp={(info)=>{this.getUserEditInfoApp(info)}}
        >
        </Search>
        <TableData 
         deleteUser={(idUser)=>{this.deleteUser(idUser)}}
        editFun={(user)=>{this.editUser(user)}} 
        dataUserPops={ketqua}
        changeEditUserStatus={()=>this.changeEditUserStatus()}
        ></TableData>
         <AddUser add={(name,tel,permission)=>this.getNewUserDate(name,tel,permission)} hienthiform={this.state.hienthiform}></AddUser>
         </div>
         </div>
         </div>
      </div>
    );
  }
}

export default App;

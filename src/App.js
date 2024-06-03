import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, From, Table } from 'react-bootstrap';
import { useState } from 'react';

function App() {
let [formData,setFormData]=useState({
  uname:'',
  uemail:'',
  uphone:'',
  umassage:'',
  index:''
})
let [userData,setUserData]=useState([])

let getvalue=(event)=>{
let oldData={...formData}
let inputName=event.target.name;
let inputValue=event.target.value;
oldData[inputName]=inputValue;
setFormData(oldData);
}
let handelSub=(event)=>{
  let courentData={
    uname:formData.uname,
    uemail:formData.uemail,
    uphone:formData.uphone,
    umassage:formData.umassage
  }
  if (formData.index==="") {
    
  
          let courentNumber=userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone)
            if (courentNumber.length==1) {
              alert("alrady frist time insert email and phone")
            }
            else{
            let oldUserdata=[...userData,courentData]
            setUserData(oldUserdata);
            setFormData(
              {
              uname:'',
              uemail:'',
              uphone:'',
              umassage:'',
              index:''
              }
              )

          }
  }
  else{
  let editInadex=(formData.index);
  let oldIndexData=userData;
  let courentNumber=userData.filter((v,i)=>(v.uemail==formData.uemail || v.uphone==formData.uphone) && i!=editInadex)
      if (courentNumber.length==0) {
      oldIndexData[editInadex]['uname']=formData.uname
      oldIndexData[editInadex]['uemail']=formData.uemail
      oldIndexData[editInadex]['uphone']=formData.uphone
      oldIndexData[editInadex]['umassage']=formData.umassage
      setUserData(oldIndexData);
      setFormData(
        {
        uname:'',
        uemail:'',
        uphone:'',
        umassage:'',
        index:''
        }
        )
      
      }
      else{
        alert("alrady edit email and phone")
      }
  }
event.preventDefault();
}
let deletRow=(indexNum)=>{
let filterDatafilterData=userData.filter((v,i) =>i!==indexNum)
  //console.log(filterDatafilterData);
 //alert(indexNum)
setUserData(filterDatafilterData)
}
let editRow=(indexNumEdit)=>{
  let editData=userData.filter((v,i)=>i==indexNumEdit)[0]
  //console.log(editData);
  editData['index']=indexNumEdit;
  // console.log(editData);
  setFormData(editData)
  //alert(indexNumEdit)
}

  return (
    <div className="App">
       <Container fluid>
        <Container>
          <Row>
            <Col className='text-center py-5'>
              <h1>All Data  View Enqury Now</h1>
            </Col>
          </Row>
          <Row>
          <Col lg={5}>
          
               <form onSubmit={handelSub}>
                    {userData.length}
                    <div className='pb-3'>
                      <label className='form-label'>Name</label>
                      <input type='text' onChange={getvalue} value={formData.uname} name='uname' className='form-control'/>
                    </div>
                    <div className='pb-3'>
                    <label className='text-label'>Email</label>
                    <input type='text' onChange={getvalue} value={formData.uemail} name='uemail' className='form-control'/>
                    </div>
                    <div className='pb-3'>
                    <label className='text-label'>Phone</label>
                    <input type='number' onChange={getvalue} value={formData.uphone} name='uphone' className='form-control'/>
                    </div>
                    <div className='pb-3'>
                    <label className='text-label'>Massage</label>
                    <textarea type='text'onChange={getvalue} value={formData.umassage} className='form-control' name='umassage' id='' rows={3}/>
                    </div>
                    <button className='btn btn-primary'>
                      {formData.index!=="" ? 'update' : 'save'}
                      </button>
                  </form>
                      
              </Col>
              <Col lg={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Massage</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                    {userData.length >=1 ?
                      userData.map((obj,i)=>{
                      return(
                        <tr key={i}>
                        <td>{i}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umassage}</td>
                        <tr>
                          <button onClick={()=>deletRow(i)} >delet</button>
                          <button onClick={()=>editRow(i)}>edit</button>
                        </tr>
                        </tr>
                      )
                    })
                     
                  :
                  <tr>
                    <td colSpan={6}>no data</td>
                  </tr>
                  }
                  
                 
                </tbody>
            </Table>
              </Col>
          </Row>
         
        </Container>

      </Container>
    </div>
  );
}

export default App;

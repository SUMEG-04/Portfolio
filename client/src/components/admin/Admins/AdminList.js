import React from 'react'
import styled from 'styled-components'
import { useAdmin } from '../../../context/AdminContext'


const AdminWrapper=styled.div`
margin:20px;
width:100%;
`
const ApprovedAdmims=styled.div`
width:50%;`

const Admins=styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-evenly;
   align-items:center;
`
const AdminList = () => {
    const {admins}=useAdmin()
  return (
    <>
        <AdminWrapper>
           <h2>Admins</h2>
           <ApprovedAdmims>
             {admins.map((admin)=>{
                return (
                  <Admins key={admin._id}>
                    <p>{admin.username}</p>
                    <p>{admin.role}</p>
                    <p>{admin.status}</p>
                  </Admins>
                )
             })}
           </ApprovedAdmims>
        </AdminWrapper>
    </>
  )
}

export default AdminList

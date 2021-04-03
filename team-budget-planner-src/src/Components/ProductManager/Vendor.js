import { BsPencilSquare } from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Vendor = ({ vendor, editVendor, deleteVendor }) => {

    const[editing, setEditing] = useState(false)
    const[editedVendorName, setEditedVendorName] = useState(vendor.name)
    const[editedVendorProject, setEditedVendorProject] = useState(vendor.project)
    const confirmEdit = (id) => {
        editVendor({id, name:editedVendorName, project:editedVendorProject})
        setEditing(false)
    }


    return (
        <>
            <tr>
                <td>{vendor.id}</td>
                <td>{editing?<Form.Control type='text' value={editedVendorName} onChange={(e) => setEditedVendorName(e.target.value)}/>
                :vendor.name}</td>
                <td>{editing?<Form.Control type='text' value={editedVendorProject} onChange={(e) => setEditedVendorProject(e.target.value)}/>
                :vendor.project}</td>
                <td>{editing?<BsCheckBox style={{color:'green'}} onClick={() => confirmEdit(vendor.id)}/>
                :<BsPencilSquare style={{color:'blue'}} onClick={() => setEditing(true)}/>}
                <BsFillTrashFill style={{color:'red'}} onClick={() => deleteVendor(vendor.id)}/></td>
            </tr>
        </>
    )
}

export default Vendor
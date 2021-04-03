import { BsPencilSquare } from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Deal = ({ deal, editDeal, deleteDeal }) => {
    const[editing, setEditing] = useState(false)
    const[editedVendor, setEditedVendor] = useState(deal.vendor)
    const[editedType, setEditedType] = useState(deal.type)
    const[editedDescription, setEditedDescription] = useState(deal.description)
    const confirmEdit = (number) => {
        editDeal({number, vendor:editedVendor, type:editedType, description:editedDescription})
        setEditing(false)
    }


    return (
        <>
            <tr>
                <td>{deal.number}</td>
                <td>{editing?<Form.Control type='text' value={editedVendor} onChange={(e) => setEditedVendor(e.target.value)}/>
                :deal.vendor}</td>
                <td>{editing?<Form.Control type='text' value={editedType} onChange={(e) => setEditedType(e.target.value)}/>
                :deal.type}</td>
                <td>{editing?<Form.Control type='text' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}/>
                :deal.description}</td>
                <td>{editing?<BsCheckBox style={{color:'green'}} onClick={() => confirmEdit(deal.number)}/>
                :<BsPencilSquare style={{color:'blue'}} onClick={() => setEditing(true)}/>}
                <BsFillTrashFill style={{color:'red'}} onClick={() => deleteDeal(deal.number)}/></td>
            </tr>
        </>
    )
}

export default Deal
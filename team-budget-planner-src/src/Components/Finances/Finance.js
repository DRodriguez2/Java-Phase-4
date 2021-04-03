import { BsPencilSquare } from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsCheckBox } from 'react-icons/bs'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Finance = ({ finance, editFinance, deleteFinance }) => {

    const [editing, setEditing] = useState(false)
    const [editedAmount, setEditedAmount] = useState(finance.amount)
    const [editedBillingCycle, setEditedBillingCycle] = useState(finance.billingCycle)
    const [editedBudget, setEditedBudget] = useState(finance.budget)
    const confirmEdit = (number) => {
        editFinance({ number, amount: editedAmount, billingCycle: editedBillingCycle, budget: editedBudget })
        setEditing(false)
    }


    return (
        <>
            <tr>
                <td>{finance.number}</td>
                <td>{editing ? <Form.Control type='text' value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
                    : finance.amount}</td>
                <td>{editing ? <Form.Control as="select" value={editedBillingCycle} onChange={(e) => setEditedBillingCycle(e.target.value)}>
                    <option>Annual</option>
                    <option>Semi Annual</option>
                    <option>Monthly</option>
                </Form.Control>
                    : finance.billingCycle}</td>
                <td>{editing ? <Form.Control type='text' value={editedBudget} onChange={(e) => setEditedBudget(e.target.value)} />
                    : finance.budget}</td>
                <td>{editing ? <BsCheckBox style={{ color: 'green' }} onClick={() => confirmEdit(finance.number)} />
                    : <BsPencilSquare style={{ color: 'blue' }} onClick={() => setEditing(true)} />}
                    <BsFillTrashFill style={{ color: 'red' }} onClick={() => deleteFinance(finance.number)} /></td>
            </tr>
        </>
    )
}

export default Finance
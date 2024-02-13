import { useState, useRef } from 'react'
import Modal from './Modal'

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('')
    const taskModal = useRef()

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === ''){
            taskModal.current.open()
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }

    return (
        <>
        <Modal ref={taskModal} buttonCap='Close'>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Field is required</p>
        </Modal>
            <div className="flex items-center gap-4">
                <input  type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
                <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
            </div>
        </>
    )
}
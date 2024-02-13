import { useRef} from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx'

export default function NewProject({onAdd, onCancel}){
    const modalRef = useRef()
    const titleRef = useRef();
    const desRef = useRef();
    const dateRef = useRef();

    // capturing user inputs and passing it in the props onAdd
    function handleSave() {
        const enteredTitle = titleRef.current.value
        const enteredDes = desRef.current.value
        const enteredDate = dateRef.current.value

        // validation inside the function
        if (enteredTitle.trim() === '' || enteredDes.trim() === '' || enteredDate.trim() === '') {
            modalRef.current.open();
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDes,
            dueDate: enteredDate
        })
    }

    return (
        <>
            <Modal ref={modalRef} buttonCap='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... Look like you forgot some fields</p>
                <p className="text-stone-600 mb-4">Every field is required</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
                    <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
                </menu>
                <div>
                    <Input type='text' ref={titleRef} label='Title' />
                    <Input ref={desRef} label='Description' textarea />
                    <Input type='date' ref={dateRef} label='Due Date' />
                </div>
            </div>
        </>
    )
}
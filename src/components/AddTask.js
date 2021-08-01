import {useState} from 'react'

const AddTask = ({onAdd}) => {

const [des, setDes] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const submitTask = (e) => {
e.preventDefault()
if(!des || !day){
    alert('plese input a description or date')
}

else{
    onAdd({des, day, reminder})

setDes('')
setDay('')
setReminder(false)
}

}
    return (
        <form className= 'form' onSubmit={submitTask}>
            <div className="form-group">
                <label htmlFor="des">description</label>
                <input type="text" value={des} onChange={(e) => setDes(e.target.value)} className="des" id="des" placeholder="description" />
            </div>
            <div className="form-group">
                <label htmlFor="day">day and time</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} className="day" id="day" placeholder="day and time" />
            </div>
            <div className="form-group form-group-check">
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className="reminder" id="reminder" />
                <label htmlFor="reminder">set reminder</label>
            </div>
            <input type="submit" value='save task' className="submit" />
        </form>
    )
}

export default AddTask

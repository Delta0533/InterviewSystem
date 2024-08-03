import { Link } from "react-router-dom"
import './FillScore.css'

export default function FillScore() {
    const revieveeName = "น้องโย"
    const revieverName = "พี่คิม"
    return (
        <div>
            <header className="p-[100px] text-red-800">
                <h1 className="text">ให้คะแนน: {revieveeName} โดยพี่: {revieverName}</h1>
            </header>
        </div>
    )
}

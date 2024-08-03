import { Link } from "react-router-dom";

export default function Table() {
    return (
    <div className="overflow-x-auto text-black">
        <table className="table">

            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Add score</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td><Link to="/fillScore">ให้คะแนน</Link></td>
                </tr>

                <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td><Link to="/fillScore">ให้คะแนน</Link></td>

                </tr>

                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td><Link to="/fillScore">ให้คะแนน</Link></td>

                </tr>
            </tbody>
        </table>
    </div>
    )
}
import { useState } from "react"
import Switch from '@material-ui/core/Switch';

const d = new Date()
export default function AppDate() {
    const [isUtc, setIsUtc] = useState<boolean>(true)
    console.log("App Date render")
    const currentDate = isUtc ? d.toISOString() : d.toLocaleString()
    return <>
        <Switch
            checked={isUtc}
            onChange={() => { setIsUtc(!isUtc) }}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <h2>
            {currentDate}
        </h2>
    </>
}
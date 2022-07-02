import { useState } from "react"
import ProfileName from "../../components/profile/profileName"

export default function Hander(){
    const [Name, setName] = useState('Revan')
    return (
        <ProfileName
            Name = {Name}
        />
    )
}
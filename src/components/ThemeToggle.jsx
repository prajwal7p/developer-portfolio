import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {

const [dark,setDark]=useState(true)

const toggle=()=>{

document.documentElement.classList.toggle("dark")

setDark(!dark)

}

return(

<button

onClick={toggle}

className="fixed bottom-8 right-8 bg-blue-600 p-4 rounded-full shadow-xl"

>

{dark?<Sun/>:<Moon/>}

</button>

)

}
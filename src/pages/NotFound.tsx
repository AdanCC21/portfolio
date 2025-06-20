import { useNavigate } from "react-router"

export default function NotFound() {
    const navigator = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center px-[10vw]">
            <button className="absolute left-3 top-3 cursor-pointer" onClick={() => { navigator('/')}}> {"<-"} Go Back</button>
            <h3 className="text-center">
                Sorry<br />
                the page or repo is not public at the moment</h3>
            <img src="draws/Laptop.png" alt="laptop" className="h-1/6" />
        </div>
    )
}

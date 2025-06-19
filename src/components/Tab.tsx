import { motion } from 'framer-motion';

type Prompts = {
    title: string,
    imageName: string,
    isActive: boolean,
    click: any;
}

export default function Tab({ title, imageName, isActive, click }: Prompts) {
    return (
        <article className={`flex items-center px-4 h-[80%] mt-auto cursor-pointer rounded-t-md
            ${isActive ? "bg-black text-white h-full "
                : "bg-[#737373] text-black"}
                hover:bg-black hover:text-white hover:h-full transition-all ease-in-out duration-300`}
            onClick={() => { click() }}>
            <img src={`./icons/projects/${imageName}.png`} className="h-1/2" alt="wolfForest" />
            <p className="ml-2">{title}</p>
        </article>
    )
}
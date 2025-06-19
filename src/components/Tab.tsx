type Prompts = {
    title: string,
    imageName: string,
    isActive: boolean,
    click: any;
}

export default function Tab({ title, imageName, isActive, click }: Prompts) {
    return (
        <article className={`flex items-center pl-4 
        ${isActive ? "bg-black text-white rounded-t-md cursor-pointer"
                : "bg-[#737373] text-black rounded-t-md "}
                hover:bg-black hover:text-white cursor-pointer`}
            onClick={() => { click() }}>
            <img src={`./icons/projects/${imageName}.png`} className="h-1/2" alt="wolfForest" />
            <p className="ml-2">{title}</p>
        </article>
    )
}

import LargeB from '../assets/decoration/itemLargeBottom.svg'
import MediumB from '../assets/decoration/itemMediumBottom.svg'
import ShortB from '../assets/decoration/itemShortBottom.svg'

type Prompts = {
    imageSource: string,
    title: string
    small?: boolean
    key:any
}

export default function LanguageItem({ imageSource, title, small,key }: Prompts) {
    let bottom;
    if (title.length <= 8) {
        if (title.length <= 4) {
            bottom = ShortB;
        } else {

            bottom = MediumB;
        }
    } else {
        bottom = LargeB;
    }

    return (
        <article key={key} className='w-full h-full'>
            <img className='h-1/2 m-auto' src={imageSource} alt={title} />
            {small ? (
                <p className='text-center' style={{fontSize:'70%'}}>{title}</p>
            ):(
                <p className='text-center' >{title}</p>
            )}
            
            <img className='mx-auto' src={bottom} alt='underline' />
        </article>
    )
}

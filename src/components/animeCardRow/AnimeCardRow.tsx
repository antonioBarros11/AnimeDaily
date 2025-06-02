export default function AnimeCardRow({image, title, description, animetype, duration}){
    <div className="w-full flex justify-center items-center">
        <div className="w-full bg-white flex rounded-2xl">
            <img src={image} className="h-full w-50%" alt="" />
            <div className="flex flex-col gap-2">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="flex font-bold gap-2">
                    <span className="rounded-full p-2 bg-[#909090]">{animetype}</span>
                    <span className="rounded-full p-2 bg-[#58B7FB]">{duration}</span>
                </div>
            </div>
        </div>

    </div>
}
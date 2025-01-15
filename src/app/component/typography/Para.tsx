type ParaProps={
    title:string,
    className: string
}
export default function Para({title, className}:ParaProps) {
    return(
        <>
        <p className={className}>{title}</p>
        </>
    )
}
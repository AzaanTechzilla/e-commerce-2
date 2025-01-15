type H6Props={
    title:string,
    className: string
}
export default function H6({title, className}:H6Props) {
    return(
        <>
        <h6 className={className}>{title}</h6>
        </>
    )
}
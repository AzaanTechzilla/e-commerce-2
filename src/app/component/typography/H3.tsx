type H3Props={
    title:string,
    className: string
}
export default function H3({title, className}:H3Props) {
    return(
        <>
        <h3 className={className}>{title}</h3>
        </>
    )
}
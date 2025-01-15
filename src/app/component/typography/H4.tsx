type H4Props={
    title:string,
    className: string
}
export default function H4({title, className}:H4Props) {
    return(
        <>
        <h4 className={className}>{title}</h4>
        </>
    )
}
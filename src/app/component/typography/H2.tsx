type H2Props={
    title:string,
    className: string
}
export default function H2({title, className}:H2Props) {
    return(
        <>
        <h2 className={className}>{title}</h2>
        </>
    )
}
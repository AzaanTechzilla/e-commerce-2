type H5Props={
    title:string,
    className: string
}
export default function H5({title, className}:H5Props) {
    return(
        <>
        <h5 className={className}>{title}</h5>
        </>
    )
}
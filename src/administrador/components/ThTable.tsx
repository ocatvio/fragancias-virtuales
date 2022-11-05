
type Props = {
    item:string
}

export const ThTable = (props: Props) => {
    return (
        <th className="  align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
            {props.item}
        </th>
    )
}
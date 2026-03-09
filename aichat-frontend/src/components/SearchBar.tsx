type Props = {
  value:string
  onChange:(v:string)=>void
}

export default function SearchBar({value,onChange}:Props){

  return(

    <input
      placeholder="Search"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
    />

  )
}
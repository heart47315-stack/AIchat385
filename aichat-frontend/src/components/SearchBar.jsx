export default function SearchBar({value,onChange}){

  return(

    <input
      className="search"
      placeholder="ค้นหา"
      value={value}
      onChange={e=>onChange(e.target.value)}
    />

  )
}
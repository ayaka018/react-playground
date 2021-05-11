import React, {useCallback, useState} from 'react'

export const HomePage: React.VFC = () => {
  const [value,setValue] = useState("")
  const inputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log(value)
  },[setValue]);
  return (
    <div>
      <form>
        <input type="text" name="first" value={value} onChange={inputChange} placeholder="入力してください" />
      </form>
    </div>
)
}
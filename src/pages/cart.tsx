import { Checkbox } from '@/src/views/checkbox';
import { Todo } from '@/src/views/todo';
import { memo, useCallback, useState } from 'react';

export const Cart = () => {
	return (
		<>
			<div className="text-2xl mb-6">Einkaufsliste</div>
			<div className="px-2">
				<Checkbox />
				<Todo>halloooo</Todo>
        <Parent />
			</div>
		</>
	);
};


export const Parent = () => {
  const [hi, setHi] = useState(0) 
const [bye, setBye] = useState(0)

  console.log("new parent render")
  function one() {
    setHi(hi + 1)
    console.log(`hi ${hi}`)
  }

  const byebye = useCallback(function two() {
    setBye(bye + 1)
    console.log(`bye ${bye}`)
  }, [bye])

  return (
  <>
      <MemoOne onClick={one}/>
      <ChildTwo onClick={byebye} />
  </>

  )
}

export const ChildOne = ({onClick}) => {
  
  console.log("new child one render")
  return (
  <button type="button" onClick={onClick}>blub</button>
  )
}

 const ChildTwo = ({onClick}) => {
  console.log("new child two render") 
  return (
  <button type="button" onClick={onClick}>blubb</button>
  )
}

const MemoTwo = memo(ChildTwo)
const MemoOne = memo(ChildOne)

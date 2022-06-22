import React, {useReducer, useState} from 'react'
import {checkHandler, homeWorkReducer, SORT, sortHandler} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {

    const [people, setpeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={{display: 'flex'}}>
            <span style={{width: '150px'}}><b> name: </b> {p.name},</span> <span><b>age: </b> {p.age}</span>
        </div>
    ))

    const sortUp = () => setpeople(homeWorkReducer(initialPeople, sortHandler('up')))
    const sortDown = () => setpeople(homeWorkReducer(initialPeople, sortHandler('down')))
    const check = () => setpeople(homeWorkReducer(initialPeople, checkHandler(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={check}> check 18</SuperButton>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

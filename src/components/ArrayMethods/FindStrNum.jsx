import React from 'react'

export default function FindStrNum() {

    const arr = [1, "a", 2, "b", 3, "c", "d", "e", "f"]


    const findNumAndStr = (arr) => {
        let string = []
        let numbers = []

        for (let item of arr) {
            if (typeof (item) === "string") {
                string.push(item)
            } else if (typeof (item) === "number") {
                numbers.push(item)
            }
        }
        return { string, numbers }
    }




console.log(findNumAndStr(arr))

    return (
        <div>FindStrNum</div>
    )
}

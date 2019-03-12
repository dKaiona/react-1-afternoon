import React, {Components} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
function TopicBrowser() {
    return (
    <div>
        <EvenAndOdd></EvenAndOdd>
        <FilterObject></FilterObject>
        <FilterString></FilterString>
        <Palindrome></Palindrome>
        <Sum></Sum>

    </div>
    )
}
export default TopicBrowser
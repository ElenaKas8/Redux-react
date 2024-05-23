import { useDispatch, useSelector } from "react-redux"
import { reverseAction, sliceAction, upperCaseAction } from "../store/stringReducer"


function String(){

    const string = useSelector((store) => store.string.string)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>String</h1>
            <h2>{string}</h2>
            <div>
                <button onClick={() => dispatch(upperCaseAction())}>Upper case</button>
                <button onClick={() => dispatch(reverseAction())}>Reverse</button>
                <button onClick={() => dispatch(sliceAction(+prompt()))}>Slice</button>
            </div>
        </div>
    )
}

// Задание 1
// Реализуйте кнопку, которая возведет строку в верхний регистр

// Задание 2
// Реализуйте еще одну кнопку, которая будет зеркалить строкове значение
// 'Value' => 'eulaV'

// Задание 3
// Реализуйте кнопку, которая заменит строку на подстроку, указав количество символов через модальное окно
// (3) => первые 3 буквы
// (5) => первые 5 букв

// 'Default value'
// 5 => 'Defau'
// 3 => 'Def'


export default String



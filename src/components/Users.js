import { useDispatch, useSelector } from "react-redux"
import { filterUserAgeAction, removeLastUserAction } from "../../src/store/usersReduser"


function Users(){

    const users = useSelector((store) => store.users.users)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Users</h1>
            <div>
                <button onClick={() => dispatch(removeLastUserAction())}>Remove last user</button>
                <button onClick={() => dispatch(filterUserAgeAction())}>Filter users</button>
            </div>
            <ul>
                {users.map( elem => <li key={elem.id}>{elem.firstName}</li> )}
            </ul>
        </div>
    )
}

export default Users


// Задание
// Реализуйте кнопку, которая удалит последнего пользователя из списка

// Реализуйте кнопку, которая отфильрует массив по возрасту юзеров:
// возраст должен быть больше 35

// * Задание
// Реализуйте удлаение пользователя по нажатию на li элемент

export const decNumber = () => {
    return {
            type : 'DECREMENT'
        }
}

export const incNumber = () => {
    return {
            type : 'INCREMENT'
        }
}

export const getData = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res2 => {
            // console.log(" >>>>>>>>>>>>>>>>> ", res2)
            dispatch({
                type: 'GETDATA',
                payload: res2
            })
        })
    }
}
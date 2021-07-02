interface IState {
    count: number
}

const initialState = {
    count: 0
}

export interface IAction {
    type: string
}

const INCREMENT = "INCREMENT";

const reducerCount = (state=initialState, action: IAction): IState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1 
            }
        default:
            return state;
    }
}

export default reducerCount;

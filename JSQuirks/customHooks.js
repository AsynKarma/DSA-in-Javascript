// mounting:
// Contructor
// __Unsafe_ComponentWillMount
// deriveStateFromProps
// render()
// componentDidMount

// Update:
// deriveStateFromProps
// shouldUpdateComponent
// render()
// didUpdateComponent

// Unmounting:
// willUmnountComponent


// A(x, y) -> B(y) C(y)

// const textInputRed = createRef();
// <textInput ref={textInputRed} />
// textInputRed.focus();

// const ThemeContext = createContext()
//     < DataContext.consumer > {(data) => {
//     const { config } = data;
//     <
//     <>
// }</ThemeContext.comsumer>


//     actiuonType, payload
//     UpdateTheme('UPDATE_THEME', )

//     contextData

//     newCOntextData

const [count, setCount] = useStateWithCallback(0, count => {
    console.log(count);
});

setCount(1);

function useStateWithCallback(value, callBack) {
    const [value, setValue] = useState(iv);
    useEffect(() => {
        callBack(value);
    }, [value])
    return [value, setValue];
}

setCount(1)
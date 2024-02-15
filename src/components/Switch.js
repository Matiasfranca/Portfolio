export default function Switch(props) {
    function handleThema() {
        localStorage.setItem("thema", String(!props.thema[0]))
        props.thema[1](!props.thema[0])
    }

    return (
        <div className="switch">
            <div className="child-switch">
                <input type="checkbox" id="light" name="light" checked={props.thema[0]} onClick={() => { handleThema() }} />
                <label for="light">  Light</label>
            </div>
            <div className="child-switch">
                <input type="checkbox" id="dark" name="dark" checked={!props.thema[0]} onClick={() => { handleThema() }} />
                <label for="dark">  Dark</label>
            </div>
        </div>
    )
}
export default function Switch(props: any) {
    function handleThema() {
        localStorage.setItem("thema", String(!props.thema[0]))
        props.thema[1](!props.thema[0])
    }

    return (
        <div className="switch">
            <div className="child-switch">
                <input type="checkbox" id="light" name="light" checked={props.thema[0]} onClick={() => { handleThema() }} />
                <label>  Light</label>
            </div>
            <div className="child-switch">
                <input type="checkbox" id="dark" name="dark" checked={!props.thema[0]} onClick={() => { handleThema() }} />
                <label>  Dark</label>
            </div>
        </div>
    )
}
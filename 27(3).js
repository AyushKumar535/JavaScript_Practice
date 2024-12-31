const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Keys</th>
                    <th>Code</th>
                    <th>Keycode</th>
                </tr>
                <tr>
                    <th>${e.key === "" ?"Space":e.key}</th>
                    <th>${e.keyCode}</th>
                    <th>${e.code}</th>
                </tr>
            </table>
        </div>

    `
})
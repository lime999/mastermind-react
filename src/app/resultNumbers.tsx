export function getResultNumbers(
    results: number[][],
    setMessagePopupVisible: (value: boolean) => void,
    setPopupMessage: (message: string) => void
) {
    return (
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
            <div key={id} className="results"
                onClick={() => { setMessagePopupVisible(true); setPopupMessage("resultsexplanantion") }}
            >
                <span style={{ color: '#1e9400ff' }}>{results[id][0]}</span>
                |
                <span style={{ color: '#c98900ff' }}>{results[id][1]}</span>
            </div>
        ))
    )
}


export function resultNumbers(
    results: number[][],
    setExplanationPopupVisible: (value: boolean) => void
) {



    return (
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((Id) => (

            
                <div key={Id} className="results"
                onClick={() => setExplanationPopupVisible(true)}
                >
                    <span
                        style={{
                            color: '#33ff00ff'
                        }}
                    >{results[Id][0]} </span>
                    |
                    <span
                        style={{
                            color: '#ffae00ff'
                        }}
                    > {results[Id][1]}</span></div>


        )



        )
    )


}
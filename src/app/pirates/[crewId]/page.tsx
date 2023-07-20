import React from 'react'

type Params = {
    params: {
        crewId: string
    }
}

export default function CrewPage({ params: { crewId } }: Params) {
    return (
        <div>
            <p>
               {crewId}
            </p>
        </div>
    )
}

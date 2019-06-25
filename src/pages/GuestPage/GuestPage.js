import React from 'react'
import CongressPersons from '../../components/CongressPersons/CongressPersons'
import Senators from '../../components/Senators/Senators'
import Governor from '../../components/Governor/Governor'

function GuestPage() {
    return (
        <div>
            <CongressPersons />
            <Senators />
            <Governor />
        </div>
    )
}

export default GuestPage 
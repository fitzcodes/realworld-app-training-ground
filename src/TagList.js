import React from 'react';
import axios from 'axios';

const possibleRequestStates = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILURE: 'failure'
}
export function TagList() {
    const [requestState, setRequestState] = React.useState(possibleRequestStates.IDLE)
    const [tags, setTags] = React.useState([])
    
    React.useEffect(() => {
        setRequestState(possibleRequestStates.PENDING)

        axios.get('https://conduit.productionready.io/api/tags').then((response) => {
            setRequestState(possibleRequestStates.SUCCESS)
            setTags(response.data.tags)
        })
        .catch((error) => {
            setRequestState(possibleRequestStates.FAILURE)
            console.error(error)
        })
    }, [])

    return (
        <React.Fragment>
            <p>Popular Tags</p>
                <div className="tag-list">
                {tags.map((tag) => {
           return (
             <a href="" className="tag-pill tag-default">
                  {tag}
                </a>
             );
            })}
        </div>
        </React.Fragment>

    );
}
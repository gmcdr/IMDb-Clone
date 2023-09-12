import React from 'react'

export default function Results({results}) {
    const items = results.map(result =>
        <li key={result.id}>
            {result.original_name}
        </li>
        );
    return (
    <div>
        <ul>
            {items}
        </ul>
    </div>
  )
}

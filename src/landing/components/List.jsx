import React from "react"

export const List = ({ items }) => {

    return (
        <>
            <ul className="max-w-md space-y-1   list-disc list-inside dark:text-white">

                {items.map((item, index) => 

                    <li key={index}>{item}</li>
                )}

            </ul>
        </>
    )
}
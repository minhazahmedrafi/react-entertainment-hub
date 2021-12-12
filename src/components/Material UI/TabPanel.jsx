import React from 'react'

const TabPanel = ({children, value, index}) => {

return (
<>
    <div>
        {
            value === index && (
                <h1>{children}</h1>
            )
        }
    </div>
</>
)
}

export default TabPanel
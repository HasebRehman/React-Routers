import React from 'react'

        export const github = async () => {
            const url = "https://api.github.com/users/HasebRehman";
            let response = await fetch(url);
            let result = await response.json();
            return result;
    
        }


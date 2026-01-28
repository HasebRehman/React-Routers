import React from 'react'
import { useState, useEffect } from 'react';

const GithubApiHook = () => {

    const [githubData, setGithubData] = useState({});

    useEffect(() => {

        const github = async () => {
            const url = "https://api.github.com/users/HasebRehman";
            let response = await fetch(url);
            let result = await response.json();
            setGithubData(result);
        }

        github();
    }, []);
    
  return githubData;
}

export default GithubApiHook
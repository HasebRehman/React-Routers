import React from 'react'
import GithubApiHook from '../Hooks/GithubApiHook'
import '../Styles/Github.css'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const gitData = useLoaderData();
    console.log(gitData);
    
  return (

    <>
        <div className='githubBox'>
            <div className='githubImgBox'>
                <img className='githubImg' src={gitData.avatar_url} alt="" />
            </div>

            <div className='githubTextBox'>
                <h2 className='githubDataName'>{gitData.name}</h2>
                <p className='githubBio'>{gitData.bio}</p>
                <p className='githubBioData'><b>ID:</b> {gitData.id}</p>
                <p className='githubBioData'><b>COUNTRY:</b> {gitData.location}</p>
                <p className='githubBioData'><b>REPOS:</b> {gitData.public_repos}</p>
                <p className='githubBioData'><b>FOLLOWERS:</b> {gitData.followers}</p>
                <p className='githubBioData'><b>FOLLOWING:</b> {gitData.following}</p>
            </div>
        </div>
    </>

  )
}

export default Github
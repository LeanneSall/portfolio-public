import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ProjectState } from '../ProjectState'


const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState)
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter((ProjectState) => ProjectState.url === url);
        setProject(currentProject[0])
    }, [projects, url])

    return (
        <>
            {project && (
                <Details>
                    <Header>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="hello"></img>
                    </Header>


                </Details>
            )}
        </>


    )


}


const Details = styled.div`


`

const Header = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;

h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}

img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`

export default ProjectDetail
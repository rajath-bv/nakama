import { Button, Skeleton } from 'antd';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { FC, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query';
import Container, { DashBoardContainer } from '../components/Container';
import DashboardActiveProjects from '../components/DashboardActiveProjects';
import DashboardFriendReq from '../components/DashboardFriendReq';
import { CenterH1, H2 } from '../components/Heading';
import { SliderPage } from '../components/Page';
import Post from '../components/Post';
import axios from '../helpers/axios';
import history from '../helpers/history';

const queryCache = new QueryCache();

interface RenderProps {
    choice: string;
    setChoice: (choice: string) => void;
}

const RenderContent: FC<RenderProps> = ({ choice, setChoice }) => {
    const { user } = useStoreState((state: any) => state.auth);
    const { logOut } = useStoreActions((state: any) => state.auth);
    const { firstName, lastName, email, skills } = user;

    const { isLoading, data } = useQuery('user', () =>
        axios.get(`/project/`).then((res) => res.data)
    );

    if (choice === 'post') return <Post setChoice={setChoice} user={user} />;
    else if (choice === 'dashboard') {
        if (isLoading) {
            return (
                <DashBoardContainer>
                    <CenterH1>Dashboard</CenterH1>
                    <Container>
                        <H2>Active Projects</H2>
                        <Skeleton active />
                    </Container>
                </DashBoardContainer>
            );
        } else {
            const { requestsReceived, username } = user;
            const { projects } = data;
            const activeProjects = projects.filter((project: any) => {
                const { teamLeader } = project;
                if (teamLeader) {
                    return teamLeader.username === username;
                } else return false;
            });

            return (
                <DashBoardContainer>
                    <CenterH1>Dashboard</CenterH1>
                    <Container>
                        <H2>Active Projects</H2>
                        <DashboardActiveProjects projects={activeProjects} />
                        <DashboardFriendReq
                            requestsReceived={requestsReceived}
                        />
                    </Container>
                </DashBoardContainer>
            );
        }
    } else if (choice === 'user') {
        return (
            <DashBoardContainer>
                <CenterH1>User Profile</CenterH1>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <H2 style={{ border: "solid black 2px", borderRadius: "20px", padding: "12px" }}>Name: {firstName} {lastName}</H2>
                        <H2  style={{ border: "solid black 2px", borderRadius: "20px", padding: "12px" }} >Email: {email}</H2>
                        <div style={{ border: "solid black 2px", borderRadius: "20px", padding: "12px", margin: '2' }} >
                        <H2>
                            Skills:
                        </H2>
                            <ul>
                                {skills.map((skill: any) => (<li style={{ marginTop: "5px" }} >{skill}</li>))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </DashBoardContainer>
        )
    }
    else {
        return (
            <DashBoardContainer>
                <Container style={{ width: "100vw", margin: "10px 0", display: "flex", justifyContent: "center", justifyItems: "center" }}>
                    <Button
                        size='large'
                        onClick={() => {
                            logOut()
                            history.push('/');
                        }}
                    >Log Out!</Button>
                </Container>
            </DashBoardContainer>
        )
    }
};

const Dashboard = () => {
    const [choice, setChoice] = useState<string>('dashboard');
    return (
        <SliderPage setChoice={setChoice}>
            <Container>
                <ReactQueryCacheProvider queryCache={queryCache}>
                    <RenderContent choice={choice} setChoice={setChoice} />
                </ReactQueryCacheProvider>
            </Container>
        </SliderPage>
    );
};

export default Dashboard;

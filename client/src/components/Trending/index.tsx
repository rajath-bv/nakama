import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Col, Row, Skeleton } from 'antd';
import Project from './Project';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import axios from '../../helpers/axios';
import SideTren from './SideTren';

const Trending = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    const location = useLocation();
    const key = new URLSearchParams(location.search).get('search');

    const { isLoading, data } = useQuery('allProjects', () =>
        axios.get('/project').then((res) => res.data).then((data) => {
            console.log(key);
            if (key !== null) {
                return { ...data, projects: data.projects.filter(({ title }: any) => title.startsWith(key)) }
            }
            return data;
        })
    );

    if (isLoading)
        return (
            <div>
                {isSmallScreen && (
                    <div>
                        <Row>
                            <Col className="gutter-row" span={24}>
                                <SideTren />
                                <Skeleton active />
                            </Col>
                        </Row>
                    </div>
                )}
                {isDesktopOrLaptop && ( //minimumDeviceWidth required to render this component
                    <div>
                        <Row gutter={18}>
                            <Col className="gutter-row" md={16}>
                                <Skeleton active />
                            </Col>
                            <Col className="gutter-row" md={8}>
                                <SideTren />
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );

    // @ts-ignore
    const { projects } = data;

    if (projects.length === 0 && key !== null) {
        return <div style={{ fontSize: "20px" }}>No projects with given search query.</div>
    }

    return (
        <div>
            {isSmallScreen && (
                <div>
                    <Row>
                        <Col className="gutter-row" span={24}>
                            <SideTren />
                            {projects.map((project: any, dex: number) => (
                                <Project
                                    key={dex}
                                    title={project.title}
                                    description={project.description}
                                    coverImg={project.coverImg}
                                    skills={project.skills}
                                    tags={project.tags}
                                    likes={project.likes}
                                    _id={project._id}
                                    requestsReceived={project.requestsReceived}
                                />
                            ))}
                        </Col>
                    </Row>
                </div>
            )}
            {isDesktopOrLaptop && ( //minimumDeviceWidth required to render this component
                <div>
                    <Row gutter={18}>
                        <Col className="gutter-row" md={16}>
                            {projects.map((project: any, dex: number) => (
                                <Project
                                    key={dex}
                                    title={project.title}
                                    description={project.description}
                                    coverImg={project.coverImg}
                                    skills={project.skills}
                                    tags={project.tags}
                                    likes={project.likes}
                                    _id={project._id}
                                    requestsReceived={project.requestsRequired}
                                />
                            ))}
                        </Col>
                        <Col className="gutter-row" md={8}>
                            <SideTren />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
};

export default Trending;

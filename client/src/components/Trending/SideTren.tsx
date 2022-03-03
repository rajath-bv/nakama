import React from 'react';
import { Card } from 'antd';
import ReactSvg from '../../assets/react.svg';
import TorchSvg from '../../assets/pytorch-icon.svg';
import TensorSvg from '../../assets/tensorflow-tf.svg';
import ExpressSvg from '../../assets/expressjs-icon.svg';
import DjangoSvg from '../../assets/django-logo-positive.svg';
import KotlinSvg from '../../assets/Kotlin-logo.svg';
const SideTren = () => {
    return (
        <Card title={<h1 style={{ fontWeight: 'bolder' }}>Skills</h1>}>
            <a href="https://reactjs.org/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={ReactSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
            <a href="https://pytorch.org/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={TorchSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
            <a href="https://www.tensorflow.org/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={TensorSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
            <a href="https://expressjs.com/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={ExpressSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
            <a href="https://www.djangoproject.com/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={DjangoSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
            <a href="https://kotlinlang.org/">
                <Card.Grid
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {
                        <img
                            alt='lol'
                            src={KotlinSvg}
                            style={{ height: '50px', width: '50px' }}
                        ></img>
                    }
                </Card.Grid>
            </a>
        </Card>
    );
};

export default SideTren;

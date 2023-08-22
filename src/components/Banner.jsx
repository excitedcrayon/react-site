import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {

    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const wordRotate = ["Web Developer", "Software Developer", "Web Designer"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker)}; 
    }, [text]);

    const tick = () => {
        let i = loopNumber % wordRotate.length;
        let fullText = wordRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length);
        setText(updateText);

        if (isDeleting) {
            setDelta(previ)
        }
    };

    return(
        <section id="home" className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm excitedcrayon`}<span className="wrap"></span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et recusandae nam facere officiis iste numquam repudiandae quam laudantium inventore ratione odio nemo, magnam doloremque error dolor! Illo aspernatur inventore blanditiis.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
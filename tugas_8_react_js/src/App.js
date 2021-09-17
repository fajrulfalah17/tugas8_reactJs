import React, { useState } from "react";
import { Breadcrumb, Button, Carousel, Col, Container, Dropdown, Figure, Form, Jumbotron, ListGroup, Row, Modal } from "react-bootstrap";

function App() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         modal: ""
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }
    // handleChange(){
    //     alert(this.state.modal)
    // }

    // render() {
        return (
            <Row style={{ margin: "0" }}>
                <Container fluid>
                    <Row style={{ backgroundColor: "rgb(13,6,34)", color: "white" }}>
                        <Dropdown className="mr-auto">
                            <Dropdown.Toggle>
                                Pilih Bahasa
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>indonesia</Dropdown.Item>
                                <Dropdown.Item>Inggris</Dropdown.Item>
                                <Dropdown.Item>Rusia</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Figure className="float-right mr-4">
                            <Figure.Image width="30" height="30" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />
                            <Figure.Caption>Admin</Figure.Caption>
                        </Figure>
                    </Row>
                    <Breadcrumb className="float-right">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                        <Breadcrumb.Item href="/" active>Bola</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <Container className="mt-4">
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="Gambar 1" />
                                <Carousel.Caption>
                                    <h3>Ekspresi Neymar Setelah Memenangkan Pertandingan</h3>
                                    <p>PSG mampu mengalahkan lawannya dengan skor Telak 5-1</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="Gambar 2" />
                                <Carousel.Caption>
                                    <h3>Ekspresi Neymar Setelah Memenangkan Pertandingan</h3>
                                    <p>PSG mampu mengalahkan lawannya dengan skor Telak 5-1</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" alt="Gambar 3" />
                                <Carousel.Caption>
                                    <h3>Ekspresi Neymar Setelah Memenangkan Pertandingan</h3>
                                    <p>PSG mampu mengalahkan lawannya dengan skor Telak 5-1</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
                <Container fluid className="mt-4">
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                                <ListGroup.Item>Liga Italia</ListGroup.Item>
                                <ListGroup.Item>Liga Premire Inggris</ListGroup.Item>
                                <ListGroup.Item>League 1</ListGroup.Item>
                                <ListGroup.Item>La Liga</ListGroup.Item>
                                <ListGroup.Item>BundesLiga</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Jumbotron>
                                <h1>DIVISI PRIMERA</h1>
                                <p>Main untuk catalunya, Gerrard Pique minta dihormati</p>
                                <Button href="/" variant="primary">Read More</Button>
                            </Jumbotron>
                        </Col>
                        <Col>
                            <Figure className="">
                                <Figure.Image width="50" height="50" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />
                                <Figure.Caption>Silahkan Login</Figure.Caption>
                            </Figure>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Masukkan Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="masukkkan password"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Term & Condition" />
                                </Form.Group>
                                <Button variant="primary" onClick={handleShow}>
                                    Login
                                </Button>
                                {/* mengeluarkan modal button */}
                                <Modal animation={false} show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Anda Berhasil Login!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                    Save Username & Password
                                    </Button>
                                </Modal.Footer>
                                </Modal>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Row>
        );
    }
// }

export default App;

import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import NewNoteModal from "./NewNoteModal";
import axios from "axios";
import NoteList from "./NoteList";
import {API_URL_N} from "../../constants/api";
import "../../App.css";

class Home extends Component {
    state = {
        notes: []
    };

    componentDidMount() {
        this.resetState();
    }

    getNotes = () => {
        axios.get(API_URL_N).then(res => this.setState({notes: res.data}));
    };

    resetState = () => {
        this.getNotes();
    };

    render() {
        return (
            <Container style={{marginTop: "6%"}}>
                <Row>
                    <Col>
                        <NewNoteModal style={{marginLeft: '60px'}} create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <NoteList
                            notes={this.state.notes}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;